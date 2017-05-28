var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var classschema = new Schema({
	classname:{
		type:String,
		require:true
	}
});

var Classes = mongoose.model('Class',classschema);

module.exports = Classes;

