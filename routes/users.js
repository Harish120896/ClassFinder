var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Details = require('../models/details');

var usersRouter = express.Router();
usersRouter.use(bodyParser.json());
/* GET users listing. */
usersRouter.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

usersRouter.post('/register',function(req, res, next) {
	Details.create(req.body,function(err, detail){
		if(err){throw err;}
		console.log("detail inserted");
		res.json({"success":"inserted successfully"});
	});
});

usersRouter.get('/search',function(req, res, next){
	Details.find({}).exec(function(err, detail){
		if(err) throw err;
		res.json(detail);
	});
});

module.exports = usersRouter;
