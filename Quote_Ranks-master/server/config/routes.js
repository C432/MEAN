const authors = require('../controllers/authors.js')

module.exports = function(app) {

app.get('/authors', function(req, res) {
  authors.showAuthors(req,res);
})

app.get('/authors/:id', function(req, res) {
  authors.showAuthor(req,res,req.params.id);
})

app.post('/authors/new', function(req, res) {
  authors.newAuthor(req,res,req.body.name);
})

app.put('/authors/edit/:id', function(req, res) {
  authors.updateAuthor(req,res,req.params.id,req.body.name);
})

app.delete('/authors/remove/:id', function(req, res) {
  authors.removeAuthor(req,res,req.params.id);
})

app.post('/quotes/new', function(req, res) {
  authors.newQuote(req,res,req.body.id,req.body.quote);
})

app.put('/vote/:id', function(req, res) {
  authors.voteQuote(req,res,req.params.id,req.body.vote);
})

app.delete('/quotes/:id', function(req, res) {
  authors.removeQuote(req,res,req.params.id);
})

}