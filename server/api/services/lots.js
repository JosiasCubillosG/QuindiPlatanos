const mongoose = require('mongoose');
const Lot = mongoose.model('Lots');

const LotsService = {
    async getLots(req, res) {
        const tags = req.query && req.query.tags;
        const query = tags && { tags: { $in: tags } };

        try{
            const lots = await Lot.find(query);
            res.send({ lots, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    },
    async getLot(req, res) {
        const lottId = req.params.lottId;

        try{
            const lot = await Lot.findOne({ _id: lotId });   
            res.send({ lot, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    },
    async createLot(req, res) {
        const lotData = req.body;

        console.log(req.body);

        try{
            const lot = new Lot(lotData);
            await lot.save();
            res.send({ lot, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    },
    async updateLot(req, res) {
        const { body: lotData } = req;
        try{
            const lot = Lot.findById(lotData._id);

            if (!lot) return res.send({
                message: 'The lot does not exist',
                status: 'error'
            });

            await Lot.update({ _id: lot._id }, lotData);
            res.send({ lot, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    },
    async deleteLot(req, res) {
        const lotId = req.params.lotId;
        try{
            const lot = Lot.findById(lotId);

            if (!lot) return res.send({
                message: 'The lot does not exist',
                status: 'error'
            });

            await lot.remove();
            res.send({ status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    }
}

module.exports = LotsService;
