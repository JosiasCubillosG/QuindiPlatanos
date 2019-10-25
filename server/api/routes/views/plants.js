const express = require("express");
const router = express.Router();
const plantService = require('../../services/plants');


router.get("/", async function(req, res){    
    try{
        const plants = await plantService.getPlants(req, res);
        res.render("plants", { plants });
    }catch(err){
        res.render("plants", { plants: [] });
    }
});

module.exports=router;