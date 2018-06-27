const express = require('express');
const router = express.Router();

const ModelosUsuarios = require('../models/usuarios');

router.get('/', ModelosUsuarios.find);
router.get('/:id', ModelosUsuarios.findOne);
router.post('/', ModelosUsuarios.create);
router.put('/:id', ModelosUsuarios.update);
router.delete('/:id', ModelosUsuarios.delete);

module.exports = router;
