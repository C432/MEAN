const mongoose = require('mongoose');

module.exports = function() {
	var QuoteSchema = new mongoose.Schema({
        quote: {
            type: String,
            required:[true,'Quote field must have at least 3 characters.'],
            minlength:[3,'Quote field must have at least 3 characters.']
        },
        votes: { type: Number, default: 0 }
	}, {timestamps: true });
	mongoose.model('Quote', QuoteSchema);
	var Quote = mongoose.model('Quote');
}