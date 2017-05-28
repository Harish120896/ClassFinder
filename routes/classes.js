var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Classes = require('../models/class');

var classesRouter = express.Router();
classesRouter.use(bodyParser.json());
/* GET users listing. */
classesRouter.get('/swimming', function(req, res, next) {
  res.send('respond with a resource');
});

classesRouter.get('/dance',function(req, res, next) {
	Classes.find({classname:"dance"}).exec(function(err, classes){
		if(err){throw err;}
		res.json(classes);
	});
});

classesRouter.post('/dance',function(req, res, next) {
	Classes.create(req.body,function(err, classes){
		if(err){throw err;}
		console.log("detail inserted");
		res.json({"success":"inserted successfully"});
	});
});

classesRouter.get('/music',function(req, res, next) {
	Classes.find().exec(function(err, classes){
		if(err){throw err;}
		res.json(classes);
	});
});

classesRouter.post('/music',function(req, res, next){
	Classes.create(req.body,function(err, classes){
		if(err){throw err;}
		console.log("detail inserted");
		res.json({"success":"inserted successfully"});
	});
});

module.exports = classesRouter;
