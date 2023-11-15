const express = require('express');
const router = express.Router();

const pacienteController = require('../../controllers/pacienteController');

router.get('/', pacienteController.loadSiteStructure);

router.get('/', pacienteController.getOnePaciente);

router.post('/', pacienteController.createOnePaciente);

module.exports = router;
