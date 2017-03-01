// packages

var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var express = require('express');
var logger = require('morgan');

// this makes scraping possible

var request = require("request");
var cheerio = require("cheerio");

// set mongoose to leverage built in JavaScript ES6 Promises

mongoose.Promise = Promise;

// create app

var app = express();

// morgan

app.use(logger("dev"));

// body-parser

app.use(bodyParser.urlencoded({ extended: false }));

// static directory

app.use(express.static("public"));

// database

mongoose.connect("mongodb://localhost/mongonews");

var db = mongoose.connection;

// log errors

db.on("error", function(error) {

	console.log(error);

});

// log success

db.once("open", function() {

	console.log("Connection successful");

});

// listener

app.listen(3000, function() {

  console.log("App running on port 3000!");

});

