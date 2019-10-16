const plantsMocks = require('../utils/mocks/plants');
const MongoLib = require('../lib/mongo');

class PlantsService {
    constructor(){
        this.collection = 'plants';
        this.mongoDB = new MongoLib();
    }

    async getPlants({ tags }) {
        const query = tags && { tags: { $in: tags } };
        const plants = await this.mongoDB.getAll(this.collection, query);
        
        return plants || [];
    }

    async getPlant({ plantId }) {
        const plant = await this.mongoDB.get(this.collection, plantId);
        return plant || {};
    }

    async createPlant({ plant }) {
        const createPlantId = await this.mongoDB.create(this.collection, plant);
        return createPlantId;
    }

    async updatePlant({ plantId, plant }) {
        const updatePlantId = await this.mongoDB.update(this.collection, plantId, plant);
        return updatePlantId;
    }

    async deletePlant({ plantId }) {
        const deletedPlantId = await this.mongoDB.delete(this.collection, plantId);
        return deletedPlantId;
    }
}

module.exports = PlantsService;