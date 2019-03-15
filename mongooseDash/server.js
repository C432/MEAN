var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({extended:true}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongooseDash', {useNewUrlParser:true});

var userSchema = new mongoose.Schema({
    name: {
        type: String, required:true, minlength: 3
    }
})

var Animal = mongoose.model('Animal', userSchema);
mongoose.Promise = global.Promise;

// -----------------------------------------------------------

app.get('/', function(req, res){
    Animal.find({}, function(err, data){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(data);
            res.render('index', {data:data});
        }
    });
});

app.get("/jaguar/:id", function(req, res) {
  Animal.findById({ _id: req.params.id }, function(err, data) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log("found the jaguar");
      res.render("details", { data: data });
    }
  });
});
app.get("/jaguar/edit/:id", function(req, res) {
  console.log(req.params.id);
  Animal.find({ _id: req.params.id }, function(err, data) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.render("edit", { data: data });
    }
  });
});
app.get("/jaguar/new", function(req, res) {
  console.log("make a new jaguar!");
  res.render("new");
});

app.post("/jaguar/new", function(req, res) {
  console.log("POST DATA", req.body);
  var jaguar = new Animal({
    name: req.body.name
  });
  jaguar.save(function(err) {
    if (err) {
      console.log("something went wrong");
      res.redirect("/");
    } else {
      console.log("successfully created a new jaguar!");
    }
  });
});
app.post("/jaguar/edit/:id", function(req, res) {
    let id = mongoose.Types.ObjectId(req.params.id);
  Animal.findById(id, function(err, res) {
    data.name = req.body.newName;
    data.save();
  });
  res.redirect("/");
});

app.post("/jaguar/destroy/:id", function(req, res) {
    let id = mongoose.Types.ObjectId(req.params.id);
  Animal.remove({_id: id}, function(err, data) {
    console.log("later puma");
  });
  res.redirect("/");
});

app.listen(5000);