const userScheme = require('../schemes/user');
const mongoose = require('mongoose');

module.exports = mongoose.model('users', userScheme);
