const express = require('express'); //express
const path = require('path'); //path
const bodyParser = require('body-parser'); // req.body data
const mongoose = require('mongoose'); // mongoose and MongoDB 
// ##############################################################################

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'./author/dist/author')));

// ############################################################################### 

mongoose.connect('mongodb://localhost/authors_quotes');
const QuoteSchema = new mongoose.Schema({
    quote: {type: String, required: [true,"Quote must be filled."], minlength:[3, "Length Must be more than 3."]},
    vote: {type: Number, default: 0}
}, {timestamps:true})

const AuthorSchema = new mongoose.Schema({
    name: {type: String, required: [true,"Name must be filled"], minlength:[3, "Length Must be more than 3."]},
    quotes:[QuoteSchema],
}, {timestamps:true})

mongoose.model('Author', AuthorSchema);
mongoose.model('Quote', QuoteSchema);

const Author = mongoose.model('Author');
const Quote = mongoose.model('Quote')
// ###########################################################################################
app.get('/main', function(req,res){
    Author.find({}, function(err,data){
        if(err){
            console.log("Author_get_all Error") 
            res.json(err)
        }
        else{
            console.log("Author_get_all Success: Data_passing")
            res.json(data)
        }
    })
})

app.post('/main',function(req,res){
    let author= new Author({name:req.body.name});
    author.save(function(err,data){
        if(err){
            console.log("Author_post_new Error")
            res.json(err)
        }
        else{
            console.log("Author_post_new Success: Data_passing")
            res.json(data)
        }
    })
})

app.get('/author/:id',function(req,res){
    Author.findOne({_id:req.params.id},function(err,data){
        if(err){
            console.log("Author_get_one Error")
            res.json(err)
        }
        else{
            console.log("Author_get_one Success: Data_passing")
            res.json(data)
        }
    })
})

app.put('/author/:id',function(req,res){
    Author.updateOne({_id:req.params.id},{
        name: req.body.name,
    },{ runValidators: true },function(err,data){
        if(err){
            console.log("Author_put_one Error")
            res.json(err)
        }
        else{
            console.log("Author_put_one Success: No Data_passing")
            res.json(data)
        }
    })
})

app.delete('/author/:id', function(req,res){
    Author.remove({_id: req.params.id}, function(err,data){
        if(err){
            console.log("Author_delete_one Error")
            res.json(err)
        }
        else{
            console.log("Author_delete_one Success: No Data_passing")
            res.json(data)
        }
    })
})
// ###########################################################################################
app.get('/quotes/:id', function(req,res){
    Quote.findOne({_id:req.params.id}, function(err,data){
        if(err){
            console.log("Find_Quote Error")
            res.json(err)
        }
        else{
            console.log("Find_Quote Success")
            res.json(data)
        }
    })
})
app.post('/quotes/:id', function(req,res){
    Quote.create(req.body, function(err,data){
        if(err){
            console.log("Quote_create Error")
            res.json(err)
        }
        else{
            Author.findOneAndUpdate({_id:req.params.id},{$push:{quotes:data}}, function(err,data){
                if(err){
                    console.log("Author_find_update Error")
                    res.json(err)
                }
                else{
                    console.log("Author_find_update Success")
                    res.json(data)
                }
            })
        }
    })
})

app.put('/quotes/:id', function(req,res){
    Author.findOneAndUpdate(req.body, {$pull:{'quotes':{_id:req.params.id}}}, function(err,data){
        if(err){
            console.log("Delete_Quote_from_Author Error")
            res.json(err)
        }
        else{
            console.log("Delete_Quote_from_Author Success")
            res.json(data)
        }
    })
})

app.put('/vote/:id', function(req,res){
    console.log("$$")
    console.log(req.body)
    console.log(req.params.id)
    Quote.findOneAndUpdate({_id:req.params.id}, {$set:{'vote':req.body}}, function(err,data){
        if(err){
            console.log("Quote_vote Error")
            res.json(err)
        }
        else{
            console.log("Quote_vote Success")
            res.json(data)
        }
    })
})

// ###########################################################################################
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./author/dist/author/index.html"))
});
    
app.listen(8000, function() {
    console.log("listening on port 8000");
})