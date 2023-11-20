const router = require('express').Router();

const grupoController = require('../../controllers/grupoAlimenticioController');

// Obtener todos los grupos
router.get('/', grupoController.getAllGrupos);

// Obtener un solo grupo por su ID
router.get('/:id', grupoController.getOneGrupo);

// Obtener el ID de un grupo por su nombre
router.get('/nombre/:Nombre', grupoController.getGrupoIdByName);

router.get('/name/:nombre', grupoController.getGroupByName);

// Agregar un nuevo grupo
router.post('/', grupoController.createOneGrupo);

// Actualizar un grupo
router.patch('/:id', grupoController.updateOneGrupo);

// Eliminar un grupo
router.delete('/:id', grupoController.deleteOneGrupo);


module.exports = router;