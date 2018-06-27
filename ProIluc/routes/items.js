const express = require('express');
const router = express.Router();

const ModelosItems = require('../models/items');

router.get('/', ModelosItems.find);
router.get('/:id', ModelosItems.findOne);
router.post('/', ModelosItems.create);
router.put('/:id', ModelosItems.update);
router.delete('/:id', ModelosItems.delete);

module.exports = router;
