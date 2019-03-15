// require express
const express = require("express");
const path = require("path");
const session = require('express-session');
// create the express app
const app = express();
app.use(session({ secret: "yomama" })); ///string for encryption
const bodyParser = require("body-parser");
///static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
// root route to render the index.ejs view
app.get("/", function(req, res) {
  if (req.session.counter) req.session.counter++;
  else req.session.counter = 1;
  res.render("index", { counter: req.session.counter });
});
app.get("/add2", function(req, res) {
  req.session.counter++;
  res.redirect("/");
});
app.get("/reset", function(req, res) {
  req.session.counter = 0;
  res.redirect("/");
});
app.listen(5000);
