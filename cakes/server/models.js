const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/authors",{ useNewUrlParser: true }
);

const authorSchema = new mongoose.Schema({
author: {
  name: {type: String, required:true},
}
})


module.exports = author;
