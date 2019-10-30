const mongoose = require('mongoose');
const ExpenseScheme = require('../schemes/expense');
const Expense = mongoose.model('Expenses', ExpenseScheme);

const ExpenseService = {

    async getExpenses(req, res) {
        const tags = req.query && req.query.tags;
        const query = tags && { tags: { $in: tags } };

        try{
            const expense = await Expense.find(query);
            res.send({ expense, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    },
    async getExpense(req, res) {
        const expenseId = req.params.expenseId;

        try{
            const expense = await Expense.findOne({ _id: expenseId });   
            res.send({ expense, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    },
    async createExpense(req, res) {
        const { body: expenseData } = req;
        try{
            const expense = new Expense(expenseData);
            await expense.save();
            res.send({ expense, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    },
    async updateExpense(req, res) {
        const { body: expenseData } = req;
        try{
            const expense = Expense.findById(expenseData._id);

            if (!expense) return res.send({
                message: 'The expense does not exist',
                status: 'error'
            });

            await Expense.update({ _id: expense._id }, expenseData);
            res.send({ expense, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    },
    async deleteExpense(req, res) {
        const expenseId = req.params.expenseId;
        try{
            const expense = Expense.findById(expenseId);

            if (!expense) return res.send({
                message: 'The expense does not exist',
                status: 'error'
            });

            await expense.remove();
            res.send({ expense, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    }
}

module.exports = ExpenseService;