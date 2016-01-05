var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: { type: String },
    catgories: [String],
    location: {
    	latitude: {
	    	type: Number
	    },
	    longitude: {
	    	type: Number
	    }
	},
    exclude: [String],
    closed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Group', schema);
