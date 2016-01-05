var router = require('express').Router();
var path = require('path');
<<<<<<< HEAD

router.use('/api', require('./api'));

router.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../../browser/index.html'));
=======
var pathToIndex = path.join(__dirname, '..', '..', 'browser', 'index.html');
router.use('/api', require('./api'));

router.get('/', function (req, res, next) {
    res.sendFile(pathToIndex);
>>>>>>> d5b5534eb56ac17037ca39106bc9bcfdbacc16e3
});

module.exports = router;
