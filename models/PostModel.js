const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
	postUsername: { 
		type: String,
		required: true
	},
	postTitle: { 
		type: String,
		required: true
	},
	desc: { 
		type: String,
		required: true
	},
	postPhoto: {
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

const PostModel = mongoose.model('Post', PostSchema)
module.exports = PostModel;