var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var detailschema = new Schema({
	username:{
	type:String,
	required:true
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
	},
	experience:{
	type:Number,
	required:true
	}
},{
	timestamps:true
});

var Details = mongoose.model('Detail',detailschema);

module.exports = Details;

