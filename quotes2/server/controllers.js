const Authors = require("./models")
// readAll
function readAll(req, res) {
    Authors.find({})
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
}
// readOne
function readOne(req, res) {
    Authors.findById(req.params.id)
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
}
function readQuotes(req, res) {
    Authors.findById(req.params.id)
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
}
// deleteOne
function deleteAuthor(req, res) {
    Authors.findByIdAndRemove(req.params.id)
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
}
function deleteQuote(req, res) {
    Authors.findByIdAndRemove(req.params.id)
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
}
// editOne
function editAuthor(req, res) { // with added runValidators
    Authors.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            context: "query"
        })
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
}
function editQuote(req, res) { // with added runValidators
    Authors.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            context: "query"
        })
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
}
// createOne
function createAuthor(req, res) {
    Authors.create(req.body)
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
}
function createQuote(req, res) {
    Authors.findByIdAndUpdate(req.body.id, {$push: {quote: req.body}})//finding author pushing quotes into quotes
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
}

function addVote(req, res){// need to get back to this
    Authors.findById( req.body._id)
    .then(author => {
        let quote = author.quote.id(req.body.q_id)
        quote.rating+= req.body.rating
        author.save();
        res.json(author)
    })
    .catch(errs => res.json(errs));
}

module.exports = {
    readAll: readAll,
    readOne: readOne,
    readQuotes: readQuotes,
    deleteAuthor: deleteAuthor,
    deleteQuote: deleteQuote,
    editAuthor: editAuthor,
    editQuote: editQuote,
    createAuthor: createAuthor,
    createQuote: createQuote,
    addVote: addVote
};