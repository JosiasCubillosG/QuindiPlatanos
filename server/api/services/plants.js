const Plant = require('../models/plant');

const PlantsService = {
    async getPlants(req, res) {
        const tags = req.query && req.query.tags;
        const query = tags && { tags: { $in: tags } };

        try{
            const plants = await Plant.find(query);
            res.send({ plants, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    },
    async getPlant(req, res) {
        const plantId = req.params.plantId;

        try{
            const plant = await Plant.findOne({ _id: plantId });   
            res.send({ plant, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    },
    async createPlant(req, res) {
        const { body: plantData } = req;
        try{
            const plant = Plant.new(plantData);
            await plant.save();
            res.send({ plant, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    },
    async updatePlant(req, res) {
        const { body: plantData } = req;
        try{
            const plant = Plant.findById(plantData._id);

            if (!plant) return res.send({
                message: 'The plant does not exist',
                status: 'error'
            });

            await Plant.update({ _id: plant._id }, plantData);
            res.send({ plant, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    },
    async deletePlant(req, res) {
        const plantId = req.params.plantId;
        try{
            const plant = Plant.findById(plantId);

            if (!plant) return res.send({
                message: 'The plant does not exist',
                status: 'error'
            });

            await plant.remove();
            res.send({ status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    }
}

module.exports = PlantsService;