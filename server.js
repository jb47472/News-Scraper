var express = require("express");
var morgan = require("morgan");
var mongoose = require("mongoose");
// Lines 1-27 used as boiler-plate code taken from activity 20
// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
// var db = require("./models");

var PORT = 3000;

// Initialize Express
var app = express();

// Configure middleware

// Use morgan morgan for logging requests
app.use(morgan("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));




// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
  