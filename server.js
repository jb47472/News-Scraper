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

// A GET route for scraping the NY Times website
app.get("/scrape", function (req, res) {

  axios.get("https://www.nytimes.com/").then(function (response) {
    //    load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);
    // console.log(response.data);


    $(".css-1ez5fsm").each(function (i, element) {
      // Save an empty result object
      var result = {};

      // Add the text and href of every link, and save them as properties of the result object
      result.title = $(this)
        .children("h2")
        .text();
      result.link = $(this)
        .parent("a")
        .attr("href");
      // result.summary =$(this).children("h2").children("ul").children("li").text();
      console.log(result.title);
      console.log(result.link);
      // console.log(result.summary);
      

      // Create a new Article using the `result` object built from scraping
        // db.Article.create(result)
        //   .then(function(dbArticle) {
        //     // View the added result in the console
        //     console.log(dbArticle);
        //   })
        //   .catch(function(err) {
        //     // If an error occurred, log it
        //     console.log(err);
        //   });
    });

    // Send a message to the client
    res.send("Scrape Complete");
  });
});





// Start the server
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});


