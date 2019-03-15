const mongoose = require("mongoose");
const unique = require("mongoose-unique-validator");

mongoose.connect("mongodb://localhost:27017/quotes_demo", {
    useNewUrlParser: true
}, (errs) => console.log(errs || 'db = gucci'));

const QuotesSchema = new mongoose.Schema({
    quote: {
        type: String,
        minlength: [3, "you need longer name"],
        required: [true, "a quote is required"]
    },
    rating: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, "you need longer name"],
        required: [true, "your name is required"],
        unique: true //VERY important for validating
    },
    quote: [QuotesSchema]
}, {timestamps: true})

const Quotes = mongoose.model('quote', QuotesSchema);
const Authors = mongoose.model('author', AuthorSchema);
AuthorSchema.plugin(unique, {message: "This is not Unique"})// unique validator

module.exports = Authors;