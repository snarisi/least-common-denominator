var router = require('express').Router();
var Group = require('../../db').Group;

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
            res.json(groups);
        })
        .then(null, next);
});

router.get('/:id', function (req, res, next) {
    res.json(req.group);
});

router.post('/', function (req, res, next) {
    Group.create(req.body)
        .then(group => {
            res.json(group);
        })
        .then(null, next);
});

module.exports = router;
