const express = require('express');
const router = express.Router();

const pacienteController = require('../../controllers/pacienteController');

router.get('/', pacienteController.loadSiteStructure);

router.get('/all', pacienteController.getAllPacientes);

router.get('/:id', pacienteController.getOnePaciente);

router.get('/all/:id', pacienteController.getAllPacientesForId);

// Obtener los pacientes por el ID del acudiente
router.post('/acu/:id', pacienteController.getPacientesPorAcudiente);

router.post('/', pacienteController.createOnePaciente);

router.patch('/:id', pacienteController.updateOnePaciente);

router.delete('/:id', pacienteController.deleteOnePaciente);

// Obtener el ID de un paciente por su nombre y apellido
router.get('/id/:nombre/:apellido', pacienteController.getIdForPaciente);

router.get('/nombre/:nombre/apellido/:apellido', pacienteController.getPacientePorNombreApellido);

module.exports = router;