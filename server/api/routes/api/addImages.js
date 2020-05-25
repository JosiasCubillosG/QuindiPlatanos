const express = require('express');
const router = express.Router();
const addImagesService = require('../../services/addImages');

router.get('/', addImagesService.getImages);
router.post('/', addImagesService.getImage);
router.get('/:imageId', addImagesService.createImage);
router.put('/:imageId', addImagesService.updateImage);
router.delete('/:imageId', addImagesService.deleteImage);

module.exports = router;