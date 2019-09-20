const express = require('express');
const router = express.Router();
const PlantsService = require('../../services/plants');

const plantService = new PlantsService();

router.get("/", async function(req, res, next){
    const { tags } = req.query;
    console.log('req', req.query);

    try{
        const plants = await plantService.getPlants({ tags });
    
        res.status(200).json({
            data: plants,
            message: 'plants listed'
        });
    }catch(err){
        next(err);
    }
    
});

router.get("/:plantId", async function(req, res, next){
    const { plantId } = req.params;
    console.log('req', req.params);
    
    try{
        const plant = await plantService.getPlant({ plantId });

        res.status(200).json({
            data: plant,
            message: 'plant retrieved'
        });
    }catch(err){
        next(err);
    }
    
});

router.post("/", async function(req, res, next){

    const { body: plant } = req;
    console.log('req', req.body);

    try{
        const createdPlant = await plantService.createPlant({ plant });
    
        res.status(201).json({
            data: createdPlant,
            message: 'plant created'
        });
    }catch(err){
        next(err);
    }
});

router.put("/:plantId", async function(req, res, next){

    const { plantId } = req.params;
    const { body: plant } = req;

    console.log('req', req.params, req.body);

    try{
        const updatePlant = await plantService.updatePlant({ plantId, plant });
    
        res.status(200).json({
            data: updatePlant,
            message: 'plant updated'
        });
    }catch(err){
        next(err);
    }
    
});

router.delete("/:plantId", async function(req, res, next){

    const { plantId } = req.params;

    console.log('req', req.params);

    try{
        const deletedPlant = await plantService.deletePlant({ plantId });
    
        res.status(200).json({
            data: deletedPlant,
            message: 'plant deleted'
        });
    }catch(err){
        next(err);
    }
    
});

module.exports = router;