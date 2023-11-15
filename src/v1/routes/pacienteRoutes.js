const express = require('express');
const router = express.Router();

const pacienteController = require('../../controllers/pacienteController');

router.get('/', pacienteController.loadSiteStructure);

router.get('/:id', pacienteController.getOnePaciente);

router.post('/', pacienteController.createOnePaciente);

router.patch('/:id', pacienteController.updateOnePaciente);

router.delete('/:id', pacienteController.deleteOnePaciente);

module.exports = router;
