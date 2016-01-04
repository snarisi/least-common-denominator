var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(require('./routes'));

app.use(express.static(path.join(__dirname, '../public')));

app.use(function (err, req, res, next) {
    var status = err.status || 500;
    res.status(status).send(err.message);
})

app.listen(8080, function () {
    console.log('Server listening on port 8080');
});
