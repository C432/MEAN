const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/authors",
  { useNewUrlParser: true }
);

const AuthorSchema = new mongoose.Schema({
    name: { type: String,
    minLength: [3, 'need a longer name!']
    }
  }, {timestamps: true});
const Authors = mongoose.model('author', AuthorSchema);

module.exports = Authors;
