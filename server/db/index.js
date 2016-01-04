var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lunch-common-denominator');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error: '));

module.exports = {
    Group: require('./group.model')
};
