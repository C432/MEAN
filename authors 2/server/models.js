var mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength:[3,"at least three characters"]
    }

  }, {timestamps:true});
  
  mongoose.connect(
    'mongodb://localhost/authorsDB',
    errs => console.log(errs)
  );
  const Authors = mongoose.model('author', AuthorSchema);
  
  
  module.exports = Authors;
  