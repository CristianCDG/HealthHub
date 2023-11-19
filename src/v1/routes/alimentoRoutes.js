const router = require('express').Router();

const alimentoController = require('../../controllers/alimentoController');

// Cargar el sitio web
router.get('/', alimentoController.loadSiteStructure)

// Obtener todos los Pacientes
router.get('/all', alimentoController.getAllAlimentos);

// Obtener un solo Paciente por su ID
router.get('/:id', alimentoController.getOneAlimento);

// Agregar un nuevo Paciente
router.post('/', alimentoController.createOneAlimento);

// Actualizar un Paciente
router.patch('/:id', alimentoController.updateOneAlimento);

// Eliminar un Paciente
router.delete('/:id', alimentoController.deleteOneAlimento);

// Obtener un solo Alimento por su nombre
router.get('/name/:name', alimentoController.getAlimentoByName);

module.exports = router;
