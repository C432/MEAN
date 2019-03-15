const mongoose = require('mongoose');
const Author = mongoose.model('Author');
const Quote = mongoose.model('Quote');

module.exports = {
	showAuthors: function(req,res) {
	  Author.find({}).sort({_id: -1}).exec(function(err, authors) {
	    if(err)
	    {
	    	console.log("Error in finding authors",err);
			var errors = [];
			for(var key in err.errors)
			{
				errors.push(err.errors[key].message);
			}
			res.json({ message: "Error", error: errors });
		}
	    else
	    {
	    	res.json(authors);
	    }
	  })
	},
	showAuthor: function(req,res,id) {
	  Author.findOne({_id: id}).populate('quotes').exec(function(err, author) {
	    if(err)
	    {
	    	console.log("Error in finding author",err);
			var errors = [];
			for(var key in err.errors)
			{
				errors.push(err.errors[key].message);
			}
			res.json({ message: "Error", error: errors });
		}
	    else
	    {
	    	res.json(author);
	    }
	  })
	},
	newAuthor: function(req,res,name) {
		var newAuthor = new Author({name: name});
		newAuthor.save(function(err,author){
			if(err)
			{
		    	console.log("Error in adding author",err);
				var errors = [];
				for(var key in err.errors)
				{
					errors.push(err.errors[key].message);
				}
				res.json({ message: "Error", error: errors });
			}
			else
			{
				res.json({ message: "Saved author!", author: author });
			}
		})
	},
	newQuote: function(req,res,id,quote) {
		var newQuote = new Quote({quote: quote});
		newQuote.save(function(err){
			if(err)
			{
				var message = "Error in saving quote";
				console.log(message,err);
				var errors = [];
				for(var key in err.errors)
				{
					errors.push(err.errors[key].message);
				}
				res.json({ message: message, error: errors });
			}
			else
			{
				Author.findOne({_id: id},function(err,author){
					if(err)
					{
						var message = "Error in locating author";
						console.log(message,err);
						var errors = [];
						for(var key in err.errors)
						{
							errors.push(err.errors[key].message);
						}
						res.json({ message: message, error: errors });
					}
					else
					{
						author.quotes.push(newQuote);
						author.save(function(err){
							if(err)
							{
								var message = "Error in saving quote to author";
								console.log(message,err);
								var errors = [];
								for(var key in err.errors)
								{
									errors.push(err.errors[key].message);
								}
								res.json({ message: message, error: errors });
							}
							else
							{
								res.json({ message: "Saved quote!", quote: quote });
							}
						})
					}
				})
			}
		})
	},
	updateAuthor: function(req,res,id,name) {
		Author.updateOne({_id: id},{$set: {name: name}},function(err,author){
			if(err)
			{
				var message = "Error in updating name";
				console.log(message,err);
				var errors = [];
				for(var key in err.errors)
				{
					errors.push(err.errors[key].message);
				}
				res.json({ message: message, error: errors });
			}
			else
			{
				res.json({ message: "Success", author: author });
			}
		})
	},
	voteQuote: function(req,res,quote_id,vote) {
		Quote.findOneAndUpdate({"_id": quote_id},{"$inc": {"votes": vote}},function(err,quote){
			if(err)
			{
				var message = "Error in changing vote total";
		    	console.log(message,err);
				var errors = [];
				for(var key in err.errors)
				{
					errors.push(err.errors[key].message);
				}
				res.json({ message: message, error: errors });
			}
			else
			{
				res.json({ message: "Changed vote total by "+vote , quote: quote });
			}
		})
	},
	removeAuthor: function(req,res,id) {
		Author.remove({_id: id},function(err,author){
			if(err)
			{
				var message = "Error in removing author";
		    	console.log(message,err);
				var errors = [];
				for(var key in err.errors)
				{
					errors.push(err.errors[key].message);
				}
				res.json({ message: meesage, error: errors });
			}
			else
			{
				res.json({ message: "Removed author!", author: author });
			}
		})
	},
	removeQuote: function(req,res,quote_id) {
		Author.findOne({'quotes': new mongoose.Types.ObjectId(quote_id)},function(err,author){
			if(err)
			{
				console.log("Error in locating author",err);
				var errors = [];
				for(var key in err.errors)
				{
					errors.push(err.errors[key].message);
				}
				res.json({ message: "Error", error: errors });
			}
			else
			{
				console.log(author);
				author.quotes.pop({"_id": quote_id});
				author.save(function(err){
					if(err)
					{
						console.log("Error in removing quote from author",err);
						var errors = [];
						for(var key in err.errors)
						{
							errors.push(err.errors[key].message);
						}
						res.json({ message: "Error", error: errors });
					}
					else
					{
						Quote.remove({'_id': quote_id},function(err,quote){
							if(err)
							{
								console.log("Error in removing quote",err);
								var errors = [];
								for(var key in err.errors)
								{
									errors.push(err.errors[key].message);
								}
								res.json({ message: "Error", error: errors });
							}
							else
							{
								res.json({ message: "Success", quote: quote });
							}
						})
					}
				})
			}
		})				
	}
}