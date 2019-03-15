const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
var session = require('express-session');
app.use(session({
    secret: 'meanrulespythondrools',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000 }
}));


app.use(bodyParser.urlencoded({ extended: true}));

app.set('views', path.join(__dirname, '/views'));
app.set ('view engine', 'ejs');

mongoose.connect("mongodb://localhost:27017/ninja_scores", {useNewUrlParser:true});

const ScoreSchema = new mongoose.Schema({
    name: String,
    gold: Number, 
}, {timestamps: true})

var Player = mongoose.model("Player", ScoreSchema);
mongoose.Promise = global.Promise;


app.get('/', function(request, response){
    if (request.session.gold === undefined){
        request.session.gold = 0;
    }
    if (request.session.log === undefined){
        request.session.log = [];
    }
    let context = {
        gold: request.session.gold,
        log: request.session.log
    };
    response.render('index', {context: context});
});

app.post('/storeScore', function(req, res){
    var player = new Player()
    player.name=req.body.name
    player.gold=req.body.score
    console.log("Post data has arrived!");
    player.save(function(errs){
        if(errs){
            console.log(errs);
        }
        else{
            console.log('success')
        }
    })
    console.log("I've been saved!");
    res.redirect('/HOF')
})
app.get('/HOF', function(req, res){
    console.log('working HOF');
Player.find({}, function(err, data){
    console.log(data);
    res.render('display', {players:data});
})
})


app.post('/loot', function(request, response){
    if (request.body.location == 'farm'){
        let num = Math.floor((Math.random() * 10) +10);
        request.session.gold += num;
        request.session.log.push({log:"<p class='green'>You found "+num.toString()+" gold in the farm!</p>"});
    }
    else if (request.body.location == 'cave'){
        let num = Math.floor((Math.random() * 5) +5);
        request.session.gold += num;
        request.session.log.push({log:"<p class='green'>You found "+num.toString()+" gold in the cave!</p>"});
    }
    else if (request.body.location == 'house'){
        let num = Math.floor((Math.random() * 3) +2);
        request.session.gold += num;
        request.session.log.push({log:"<p class='green'>You found "+num.toString()+" gold in the house!</p>"});
    }
    else if (request.body.location == 'casino'){
        let num = Math.floor((Math.random() * 100) -50);
        request.session.gold += num;
        if (num >= 0){
            request.session.log.push({log:"<p class='green'>You earned "+num.toString()+" gold at the casino!</p>"});
        }
        else {
            request.session.log.push({log:"<p class='red'>You lost "+num.toString()+" gold at the casino!</p>"});
        }
    }
   
    response.redirect('/');
});

app.get('/reset', function(request, response){
    request.session.destroy();
    response.redirect('/');
})

app.listen(5000);

