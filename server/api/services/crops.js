const Crop = require('../models/crop');

const CropsService = {
    async getCrops(req, res) {
        const tags = req.query && req.query.tags;
        const query = tags && { tags: { $in: tags } };

        try{
            const crops = await Crop.find(query);
            res.send({ crops, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    },
    async getCrop(req, res) {
        const cropId = req.params.cropId;

        try{
            const crop = await Crop.findOne({ _id: cropId });   
            res.send({ crop, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    },
    async createCrop(req, res) {
        const { body: cropData } = req;
        try{
            const crop = Crop.new(cropData);
            await crop.save();
            res.send({ crop, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    },
    async updateCrop(req, res) {
        const { body: cropData } = req;
        try{
            const crop = Crop.findById(cropData._id);

            if (!crop) return res.send({
                message: 'The crop does not exist',
                status: 'error'
            });

            await Crop.update({ _id: crop._id }, cropData);
            res.send({ crop, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    },
    async deleteCrop(req, res) {
        const cropId = req.params.cropId;
        try{
            const crop = Crop.findById(plantId);

            if (!crop) return res.send({
                message: 'The crop does not exist',
                status: 'error'
            });

            await crop.remove();
            res.send({ status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    }
}

module.exports = CropsService;
