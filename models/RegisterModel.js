const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    firstname: { 
		type: String,
		required: true
	},
	lastname: { 
		type: String,
		required: true
	},
	email: { 
		type: String,
		required: true
	},
	username: { 
		type: String,
		required: true
	},
	password1: { 
		type: String,
		required: true
	},
	password2: { 
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

module.exports = mongoose.model('Register', RegisterSchema);