var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var classschema = new Schema({
	classname:{
		type:String,
		require:true
	},
	institutename:{
	type:String,
	required:true
	},
	location:{
	type:String,
	required:true
	},
	contact :{
	type:Number,
	required:true
	}
});

var Classes = mongoose.model('Class',classschema);

module.exports = Classes;

