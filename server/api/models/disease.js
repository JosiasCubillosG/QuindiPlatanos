const diseaseScheme = require('../schemes/disease');
const mongoose = require('mongoose');

module.exports = mongoose.model('diseases', diseaseScheme);
