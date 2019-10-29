const UserScheme = require('../schemes/user');
const mongoose = require('mongoose');
const User = mongoose.model('Users', UserScheme);

const UsersService = {
    async getUsers(req, res) {
        const tags = req.query && req.query.tags;
        const query = tags && { tags: { $in: tags } };

        try{
            const users = await User.find(query);
            res.send({ users, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    },
    async getUser(req, res) {
        const userId = req.params.userId;

        try{
            const user = await User.findOne({ _id: userId });   
            res.send({ user, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    },
    async createUser(req, res) {
        const { body: userData } = req;
        try{
            const user = new User(userData);
            await user.save();
            res.send({ user, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    },
    async updateUser(req, res) {
        const { body: userData } = req;
        try{
            const user = User.findById(userData._id);

            if (!user) return res.send({
                message: 'The user does not exist',
                status: 'error'
            });

            await User.update({ _id: user._id }, userData);
            res.send({ user, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    },
    async deleteUser(req, res) {
        const userId = req.params.userId;
        try{
            const user = User.findById(userId);

            if (!user) return res.send({
                message: 'The user does not exist',
                status: 'error'
            });

            await user.remove();
            res.send({ status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    }
}

module.exports = UsersService;
