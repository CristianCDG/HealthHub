const router = require('express').Router();

const pacienteController = require('../../controllers/pacienteController');

// Obtener todos los Pacientes
router.get('/', pacienteController.getAllPacientes);

// Obtener un solo Paciente por su ID
router.get('/:id', pacienteController.getOnePaciente);

// Agregar un nuevo Paciente
router.post('/', pacienteController.createOnePaciente);

// Actualizar un Paciente
router.patch('/:id', pacienteController.updateOnePaciente);

// Eliminar un Paciente
router.delete('/:id', pacienteController.deleteOnePaciente);

module.exports = router;
