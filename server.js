var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var app = express();


var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
//this makes the entire "public" directory, and sub-directories, available for the all the app to reference. So the long relative paths are unnecessary. It is looking in "Public" and then moving down
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
  console.log("I am functioning server.js");
});
