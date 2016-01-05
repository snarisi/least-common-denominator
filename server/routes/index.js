var router = require('express').Router();
var path = require('path');
var pathToIndex = path.join(__dirname, '..', '..', 'browser', 'index.html');

router.use('/api', require('./api'));

router.use('/api', require('./api'));

router.get('/', function (req, res, next) {
    res.sendFile(pathToIndex);
});

module.exports = router;
