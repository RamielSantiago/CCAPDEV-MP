const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
	commentUsername: { 
		type: String,
		required: true
	},
	commenttedUsername: { 
		type: String,
		required: true
	},
	postComment: { 
		type: String,
		required: true
	},
},	{
		toObject: {
			virtuals: true,
		},
		toJSON: {
			virtuals: true,
		}
});

const CommentModel = mongoose.model('Comment', CommentSchema);
module.exports = CommentModel;