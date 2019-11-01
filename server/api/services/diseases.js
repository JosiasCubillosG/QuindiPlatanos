const mongoose = require('mongoose');
const Disease = mongoose.model('Diseases');

const DiseasesService = {
    async getDiseases(req, res) {
        const tags = req.query && req.query.tags;
        const query = tags && { tags: { $in: tags } };

        try{
            const disease = await Disease.find(query);
            res.send({ disease, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    },
    async getDisease(req, res) {
        const diseaseId = req.params.diseaseId;

        try{
            const disease = await Disease.findOne({ _id: diseaseId });   
            res.send({ disease, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    },
    async createDisease(req, res) {
        const { body: diseaseData } = req;
        try{
            const disease = new Disease(diseaseData);
            await disease.save();
            res.send({ disease, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    },
    async updateDisease(req, res) {
        const { body: diseaseData } = req;
        try{
            const disease = await Disease.findById(req.params.diseaseId);

            if (!disease) return res.send({
                message: 'The disease does not exist',
                status: 'error'
            });

            await Disease.updateOne({ _id: disease._id }, diseaseData);
            res.send({ disease, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    },
    async deleteDisease(req, res) {
        const diseaseId = req.params.diseaseId;
        try{
            const disease = await Disease.findById(diseaseId);

            if (!disease) return res.send({
                message: 'The disease does not exist',
                status: 'error'
            });

            await disease.remove();
            res.send({ disease, status: 'success' });
        }catch(err){
            res.send({ message: err.message, status: 'error' });
        }
    }
}

module.exports = DiseasesService;
