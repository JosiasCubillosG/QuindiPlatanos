const mongoose = require('mongoose');
const AccountingScheme = require('../schemes/accountingTable');
const AccountingTable = mongoose.model('AccountingTables', AccountingScheme);

const AccountingTablesService = {

    async getAccountingTables(req, res) {
        const tags = req.query && req.query.tags;
        const query = tags && { tags: { $in: tags } };

        try{
            const tables = await AccountingTable.find(query);
            res.send({ tables, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    },
    async getAccountingTable(req, res) {
        const accountingTableId = req.params.accountingTableId;

        try{
            const table = await AccountingTable.findOne({ _id: accountingTableId });   
            res.send({ table, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    },
    async createAccountingTable(req, res) {
        const { body: accountingTableData } = req;
        try{
            const table = new AccountingTable(accountingTableData);
            await table.save();
            res.send({ table, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    },
    async updateAccountingTable(req, res) {
        const { body: accountingTableData } = req;
        try{
            const table = AccountingTable.findById(accountingTableData._id);

            if (!table) return res.send({
                message: 'The table does not exist',
                status: 'error'
            });

            await AccountingTable.update({ _id: table._id }, accountingTableData);
            res.send({ table, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    },
    async deleteAccountingTable(req, res) {
        const accountingTableId = req.params.accountingTableId;
        try{
            const table = AccountingTable.findById(accountingTableId);

            if (!table) return res.send({
                message: 'The table does not exist',
                status: 'error'
            });

            await table.remove();
            res.send({ table, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    }
}

module.exports = AccountingTablesService;