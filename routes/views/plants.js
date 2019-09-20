const express = require("express");
const router = express.Router();
const PlantsService = require('../../services/plants');

const plantService = new PlantsService();


router.get("/", async function(req, res, next){

    const { tags } = req.query;
    
    try{
        const plant = await plantService.getPlants({ tags });
        res.render("plants",{ plants });
    }catch(err){
        next(err);
    }
});

module.exports=router;