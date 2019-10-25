const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlantScheme = new Schema({
	createdDate: {
		default: Date.now,
		type: Date
	},
	name: {
		required: 'Please add the name.',
		type: String
	}
});

module.exports = PlantScheme;