//Require the Express Module
var express = require('express');
//Create an Express App
var app = express();
//Require body-parser(to receive post data from clients)
var bodyParser = require('body-parser');
//Integrate body-parser w our App
app.use(bodyParser.urlencoded({extended:true}));
//Require Mongoose module
var mongoose = require('mongoose');
//to make a model, you can first define a schema, which is the BLUEPRINT for a model

//SCHEMA WITH VALIDATIONS:
// var UserSchema = new mongoose.Schema({
//     first_name: {type:String, required: true, minlength: 6};
//     last_name: {type:String, required: true, maxlength: 20},
//     age: {type: Number, min: 1, max: 150},
//     email: {type: String, required: true}
// }, {timestamps: true});



//set up other middleware such as session
const flash = require('express-flash');
app.use(flash());
app.post('/users', function(req, res){
    var user = new User(req,res);
    user.save(function(err){
        if(err){
//if there is an error upon saving, use console.log to see what is in the err object
            console.log("We have an error!", err);
//adjust the code below as needed to create a flash message with the tag and content you would like
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
//redirect the user to an appropriate route
            res.redirect('/');
        }
        else {
            res.redirect('/users');
        }
    });
});

//Use native promises
mongoose.Promise = global.Promise;

//This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost:27017/basic_mongoose', {useNewUrlParser: true});
// mongoose.connect('mongodb://localhost/basic_mongoose');
//Require 

var UserSchema = new mongoose.Schema({
    name: {type:String},
    age: {type: Number}
}, {timestamps: true})
//Store/set the Schema under the name 'User'
mongoose.model('User', UserSchema);
//Retrieve the Schema called 'User' and store it to the variable 'User'
var User = mongoose.model('User');


//FINDING ALL USERS
//Using the User Schema...
//...retrieve all records matching {}
User.find({}, function(err, users){
    //Retrieve an array of users
    //This code will run when the DB is done attempting to retrieve all matching records to {}
})

//FINDING ALL USERS BASED ON A REQUIREMENT
//...retrieve 1 record (the first record found) matching {}
User.findOne({}, function(err, user){
    //Retrieve 1 object
    //This code will run when the DB is done attempting to retrieve 1 record.
})

//LET'S CREATE A SAMPLE USER
//...create a new instance of the User Schema and save it to the DB.
var userInstance = new User()
userInstance.name = 'Andriana'
userInstance.age = 29
userInstance.save(function(err){
//This code will run when Mongo had attempted to save the record.
//If (err) exists, the record was not saved, and (err) contains validation errors.
//If (err) does not exist (undefined), Mongo saved the record successfully.
})

//DELETE ALL USERS
// ...delete all records of the User Model
User.remove({_id: 'insert record unique id here'}, function(err){
//This code will run when the DB has attempted to remove all matching records to {}
})


//DELETE ONE USER
//...delete 1 record by a certain key/value.
User.remove({_id: 'insert record unique id here'}, function(err){
//This code will run when the DB has attempted to remove one matching record to{_id: 'insert record unique id here'}
})


//UPDATE AND RECORDS
//...update and records that match the query
User.update({name:'Andriana'}, {$push: {pets: {name: 'Skippy', type:'cactus'}}}, function(err){
//This code will run when the DB had attempted to update the matching record.
})
//Another way to update a record
User.find({name:'Andriana'}, function(err, user){
    user.name = 'Andri';
    user.pets.push({name:'Skippy', type: ' cactus'});
    user.save(function(err){
//if save was successful, awesome!
    })
})

var path = require('path');
//Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
//Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
//Setting our View Engine set to EJS
app.set('view engine', 'ejs');
//Routes
//Root request
app.get('/', function(req,res){
//This is where we will retrieve the users from the database and include them in the view page we will be rendering
    res.render('index');
})
//Add User Request
//This is the route that we already have in our server.js
//When the user presses the submit button on index.ejs it should send a post requset to '/users'/.
//In this route we should add the user to the databade and then redirect to the root route(index view).
app.post('/users', function(req, res){
    console.log("POST DATA", req.body);
    //create a new User with the name and age corresponding to those from req.body
    var user = new User({name: req.body.name, age: req.body.age});
    
    //This is where we would add the user from req.body to the database.
    //Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback
    //function with an error (if any) from the operation.
    user.save(function(err){
        //if there is an error console.log that something went wrong!
        if(err)
            {
            console.log('something went wrong');
            }
            else
            {
                //else console.log that we did well and the redirect to the root route
                console.log('successfully added a user!')
            }
    })
    res.redirect('/');
})
//Setting our Server to listen on Port: 5000
app.listen(5000, function(){
    console.log("listening on port 5000")
})