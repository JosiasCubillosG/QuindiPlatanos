const plantsMocks = require('../utils/mocks/plants');

class PlantsService {
    constructor(){

    }

    getPlants({ tags }){
        return Promise.resolve(plantsMocks);
    }

    getPlant({ plantId }){
        return Promise.resolve(plantsMocks[0]);
    }

    createPlant({ plant }){
        return Promise.resolve(plantsMocks[0]);
    }

    updatePlant({ plantId, plant }){
        return Promise.resolve(plantsMocks[0]);
    }

    deletePlant({ plantId }){
        return Promise.resolve(plantsMocks[0]);
    }
}

module.exports = PlantsService;