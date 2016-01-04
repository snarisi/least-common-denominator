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

router.get('/search', function(req, res, next) {
	// Request API access: http://www.yelp.com/developers/getting_started/api_access
	var Yelp = require('yelp');

	var yelp = new Yelp({
	  consumer_key: 'Gk-AIfVKrKoie1pskNgufg',
	  consumer_secret: 'ffzbkv1YlEqN2uPBxopA91KjqII',
	  token: 'wJ_2jwc184DfL3G862wUucTwrd9j0ecX',
	  token_secret: 'k63TKfLaQCdoLL3_5hXgM8-sAFA',
	});

	// See http://www.yelp.com/developers/documentation/v2/search_api
	// yelp.search({ term: 'restaurants', location: 'New York', limit: '20' })
	yelp.search({ term: 'restaurants', ll: '40.705214999999995,-74.0091106', limit: '3' })
	.then(function (data) {
	  console.log(data.businesses);

	  for (var i = 0; i < data.businesses.length; i++) {
	  	// console.log(data.businesses[i].categories);
	  };
	})
	.catch(function (err) {
	  console.error(err);
	});

	// // See http://www.yelp.com/developers/documentation/v2/business
	// yelp.business('yelp-san-francisco')
	//   .then(console.log)
	//   .catch(console.error);

	// yelp.phoneSearch({ phone: '+15555555555' })
	//   .then(console.log)
	//   .catch(console.error);

	// A callback based API is also available:
	// yelp.business('yelp-san-francisco', function(err, data) {
	//   if (err) return console.log(error);
	//   console.log(data);
	// });
	res.send('route to search');
});

router.post('/', function (req, res, next) {
    Group.create(req.body)
        .then(group => {
            res.json(group);
        })
        .then(null, next);
});


module.exports = router;
