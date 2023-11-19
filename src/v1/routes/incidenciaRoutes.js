const express = require('express');
const incidenciaController = require('../../controllers/incidenciaController');

const router = express.Router();

router.post('/', incidenciaController.createIncidencia);

router.get('/paciente/:Id_paciente', incidenciaController.getIncidenciasByPacienteId);

module.exports = router;