const express = require('express');
const router = express.Router();

const ModelosMapas = require('../models/mapas');

router.get('/', ModelosMapas.find);
router.get('/:id', ModelosMapas.findOne);
router.post('/', ModelosMapas.create);
router.put('/:id', ModelosMapas.update);
router.delete('/:id', ModelosMapas.delete);

module.exports = router;
