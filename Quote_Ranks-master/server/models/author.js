const mongoose = require('mongoose');

module.exports = function() {
	var AuthorSchema = new mongoose.Schema({
	    name:  {
			type: String,
			required:[true,'Name field must have at least 3 characters.'],
			minlength:[3,'Name field must have at least 3 characters.']
		},
	    quotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quote' }]
	}, {timestamps: true });
	mongoose.model('Author', AuthorSchema);
	var Author = mongoose.model('Author');
}