const router = require('express').Router();

const AcudienteController = require('../../controllers/acudienteController');

// Obtener todos los Acudientes
router.get('/', AcudienteController.getAllAcudientes);

// Obtener un solo Acudiente por su correo electrónico
router.get('/email/:email', AcudienteController.getAcudienteByEmail);

// Obtener un solo Acudiente por su ID
router.get('/:id', AcudienteController.getOneAcudiente);

// Agregar un nuevo Acudiente
router.post('/', AcudienteController.createOneAcudiente);

// Actualizar un Acudiente
router.patch('/:id', AcudienteController.updateOneAcudiente);

// Actualizar un Acudiente por correo electrónico
router.patch('/email/:email', AcudienteController.updateAcudienteByEmail);

// Eliminar un Acudiente
router.delete('/:id', AcudienteController.deleteOneAcudiente);

module.exports = router;