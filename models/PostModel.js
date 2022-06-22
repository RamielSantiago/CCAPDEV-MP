const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
	/*
	username: { 
		type: String,
		required: true
	},
	*/
	postTitle: { 
		type: String,
		required: true
	},
	desc: { 
		type: String,
		required: true
	},
	/*
	img: {
		type: images
	},
	*/
});

const PostModel = mongoose.model('Post', PostSchema)
module.exports = PostModel;