const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CropScheme = new Schema({
	createdDate: {
		default: Date.now,
		type: Date
	},
	name: {
		required: 'Please add the name.',
		type: String
    },
    lot:{
        required: 'Please add the name lot',
        type: String
    },
    Days:{
        required: 'Please add the number days',
        type: Number
    },
    harvestDate: {
        required: 'Please add the finish date',
        type: Date
    },
    userId: {
        type: String
    }
});

module.exports = CropScheme;