const mongoose = require('mongoose');
const moment = require('moment')
const Schema = mongoose.Schema;

const LotScheme = new Schema({
	createdDate: {
		default: Date.now,
		type: Date
	},
	name: {
		required: 'Please add the name.',
		type: String
	},
	plants: {
		required: 'Please add the number Plants',
		type: Number
	},
	cropId: {
		type: String
	},
	tasks:{
		type:[
			{
				name: String,
				state: Boolean,
				days: Number
			}
		],
		default: [
			{
				name: 'Abonar',
				state: false,
				days: 1,
			},
			{
				name: 'Fumigar',
				state: false,
				days: 2,
			}
		]
	}
});

module.exports = LotScheme;