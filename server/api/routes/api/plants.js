const express = require('express');
const router = express.Router();
const PlantsService = require('../../services/plants');

router.get('/', PlantsService.getPlants);
router.post('/', PlantsService.createPlant);
router.get('/:plantId', PlantsService.getPlant);
router.put('/:plantId', PlantsService.updatePlant);
router.delete('/:plantId', PlantsService.deletePlant);

module.exports = router;