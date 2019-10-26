const accountingScheme = require('../schemes/accountingTable');
const mongoose = require('mongoose');

module.exports = mongoose.model('accountingTables', accountingScheme);
