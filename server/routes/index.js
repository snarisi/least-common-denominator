var router = require('express').Router();
var path = require('path');

router.use('/api', require('./api'));

router.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../../browser/index.html'));
});

module.exports = router;
