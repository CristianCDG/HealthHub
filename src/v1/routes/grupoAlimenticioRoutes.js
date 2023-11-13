const router = require('express').Router();

const grupoController = require('../../controllers/grupoAlimenticioController');

// Obtener todos los Pacientes
router.get('/', grupoController.getAllGrupos);

// Obtener un solo Paciente por su ID
router.get('/:id', grupoController.getOneGrupo);

// Agregar un nuevo Paciente
router.post('/', grupoController.createOneGrupo);

// Actualizar un Paciente
router.patch('/:id', grupoController.updateOneGrupo);

// Eliminar un Paciente
router.delete('/:id', grupoController.deleteOneGrupo);

module.exports = router;
