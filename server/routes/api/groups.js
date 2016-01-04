var router = require('express').Router();
var Group = require('../../db').Group;

router.get('/', function (req, res, next) {
    res.send('Route to get all groups');
});

router.post('/', function (req, res, next) {
    console.log('GROUP: ', req.body);
    
    Group.create(req.body)
        .then(group => {
            res.json(group);
        })
        .then(null, next);
});

module.exports = router;
