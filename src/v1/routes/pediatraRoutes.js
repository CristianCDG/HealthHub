const router = require('express').Router();

const pediatraController = require('../../controllers/pediatraController');

// Mostrar Pagina Pediatras
router.get('/', pediatraController.mostrarPagina);

// Mostrar Estilos Pediatras
router.get('/pediatras.css', pediatraController.mostrarEstilos);

// Obtener todos los pediatras
router.get('/', pediatraController.getAllPediatras);

// Obtener un solo pediatra por su ID
router.get('/:id', pediatraController.getOnePediatra);

// Obtiene un solo pediatra por su Correo
router.post('/correo', pediatraController.getOnePediatraCorreo);

// Agregar un nuevo pediatra
router.post('/', pediatraController.createOnePediatra);

// Actualizar un pediatra
router.patch('/:id', pediatraController.updateOnePediatra);

// Eliminar un pediatra
router.delete('/:id', pediatraController.deleteOnePediatra);

module.exports = router;
