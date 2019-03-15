// require express
const express = require("express");
const path = require("path");
const session = require("express-session");
// create the express app
const app = express();
app.use(session({ secret: "yomama" })); ///string for encryption
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true}));
///static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
// root route to render the index.ejs view
app.get("/", function(req, res) {
  res.render("index");
});
// post route for viewing the survey's results
app.post('/results', function(req,res){
    console.log("POST DATA", req.body);
    // this is where we would add the user to the database
    // then redirect to the root route
    res.render('results', {results: req.body});
});
app.listen(5000);
