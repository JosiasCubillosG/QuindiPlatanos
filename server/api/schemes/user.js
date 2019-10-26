const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserScheme = new Schema({
	createdDate: {
		default: Date.now,
		type: Date
	},
	name: {
		required: 'Please add the name.',
		type: String
    },
    email:{
        required: 'please add the email',
        type: String
    },
    password:{
        required: 'please add the password',
        type: String
    }
});

module.exports = UserScheme;