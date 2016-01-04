var express = require('express');
var app = express();

app.use(require('./routes'));

app.listen(8080, function () {
    console.log('Server listening on port 8080');
});
