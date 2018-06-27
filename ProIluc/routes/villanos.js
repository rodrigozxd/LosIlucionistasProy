const express = require('express');
const router = express.Router();

const ModelosVillanos = require('../models/villanos');

router.get('/', ModelosVillanos.find);
router.get('/:id', ModelosVillanos.findOne);
router.post('/', ModelosVillanos.create);
router.put('/:id', ModelosVillanos.update);
router.delete('/:id', ModelosVillanos.delete);

module.exports = router;
