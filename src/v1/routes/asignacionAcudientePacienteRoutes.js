const router = require('express').Router();

const AsignacionController = require('../../controllers/asignacionAcudientePacienteController');

router.post('/', AsignacionController.createAsignacion);

// router.post('/:id', AsignacionController.getPacientesPorAcudiente);

module.exports = router;