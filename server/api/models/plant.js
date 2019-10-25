const plantScheme = require('../schemes/plant');
const mongoose = require('mongoose');

module.exports = mongoose.model('Plants', plantScheme);
