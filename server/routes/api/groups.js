var router = require('express').Router();
var Group = require('../../db').Group;
var Yelp = require('yelp');
var categories = require('../../utils/categories');
var io = require('../../socket.js');

var yelp = new Yelp({
    consumer_key: 'Gk-AIfVKrKoie1pskNgufg',
    consumer_secret: 'ffzbkv1YlEqN2uPBxopA91KjqII',
    token: 'wJ_2jwc184DfL3G862wUucTwrd9j0ecX',
    token_secret: 'k63TKfLaQCdoLL3_5hXgM8-sAFA',
});

router.param('id', function (req, res, next, id) {
    Group.findById(id)
        .then(group => {
            if (!group) {
                var err = new Error('No group found');
                err.status = 404;
                return next(err);
            }
            req.group = group;
            next();
        })
        .then(null, next);
})

router.get('/', function (req, res, next) {
    Group.find()
        .then(groups => {
            io.emit('groups', groups);
            res.json(groups);
        })
        .then(null, next);
});


router.get('/:id', function (req, res, next) {
    res.json(req.group);
});

router.get('/:id/close', function(req, res, next) {
    if (req.group.closed) return res.status(201).send();
    req.group.closed = true;
    req.group.save()
        .then(function (group) {
            res.status(201).send();
        });
});

router.get('/:id/search', function(req, res, next) {

    //create an object to make it easy to look up whether a category needs to be excluded
    var exclusions = {};
    req.group.exclude.forEach(function (category) {
        exclusions[category] = true;
    });

    //create a string of non-excluded categories to use for the yelp search
    var categoryString = categories.map(function (category) {
        return category.name;
    }).filter(function (category) {
        return !exclusions[category];
    }).join(',');

    //create a string with the location coordinates for the yelp search
    var location = [req.group.location.latitude, req.group.location.longitude].join(',');

    yelp.search({
        term: 'restaurants',
        category_filter: categoryString,
        ll: location,
        sort: 2,
        radius_filter: 500
    })
    .then(function (data) {
        res.send(
            //filter restaurants with exluded categories from the results
            data.businesses.filter(business => business.categories.every(cat => !exclusions[cat[1]]))
        );
    })
    .catch(function (err) {
        console.error(err);
    });

});

router.put('/:id', function (req, res, next) {
    if (!req.body.exclude) return res.json(req.group);
    if (req.group.closed) {
        var err = new Error('Voting for this group is closed');
        err.status = 401;
        return next(err);
    }

    req.group.exclude = req.group.exclude.concat(req.body.exclude);
    req.group.save()
        .then(group => res.json(group))
        .then(null, next);
});

router.post('/', function (req, res, next) {
    Group.create(req.body)
        .then(group => {
            res.json(group);
        })
        .then(null, next);
});


module.exports = router;
