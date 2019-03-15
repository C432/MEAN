const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/authors',
{useNewUrlParser:true});

const authorqSchema = new mongoose.Schema({
  name: { type: String,
  minLength: [3, 'need a longer name, human']}},
  {timestamps:true});

  const Authors = mongoose.model('author', authorqSchema);

  module.exports = Authors;
