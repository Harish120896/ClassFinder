var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var classschema = new Schema({
	classname:{
		type:String,
		require:true
	}
});

var Classes = mongoose.model('NClass',classschema);

module.exports = Classes;

