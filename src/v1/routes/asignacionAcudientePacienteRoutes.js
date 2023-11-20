const router = require('express').Router();

const AsignacionController = require('../../controllers/asignacionAcudientePacienteController');

router.post('/', AsignacionController.createAsignacion);

module.exports = router;