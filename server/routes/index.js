var router = require('express').Router();

router.use('/api', require('./api'));

router.get('/', function (req, res, next) {
    res.send('Hello world');
});

module.exports = router;
