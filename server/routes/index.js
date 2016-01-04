var router = require('express').Router();

router.use('/api', require('./api'));

router.get('/', function (req, res, next) {
    res.send('Home page');
});

module.exports = router;
