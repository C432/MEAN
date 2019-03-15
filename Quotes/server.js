var express = require('express');
var app = express ();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Quotes', {useNewUrlParser:true});

var UserSchema = new mongoose.Schema({
    name: String,
    quote: String
})
mongoose.model('User', UserSchema);  //We're setting this Schema in our models as 'User'
var userQuote = mongoose.model('User')//We're retrieving this Schema from out models, named 'User'

mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({extended: true}));
var path = require('path');
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
})
app.get('/quotes', function(req, res){
    userQuote.find({}, function(err, quotes){
        if (err) {console.log(err)}
        context = {
            quotes:quotes
        }
        res.render('quotes', context);
    }) 
})
app.post('/quotes', function(req,res){
    console.log("POST DATA", req.body);
    var quote = new userQuote({
        name: req.body.name,
        quote: req.body.quote
    });

    quote.save(function(err){
        if(err)
        {
            console.log('something went wrong!')
            res.redirect('/')
        }
        else
        {
            console.log('successfully created a quote!')
            res.redirect('/quotes');
        }
    })
})

app.listen(5000, function(){
    console.log("listening on 5000");
})
