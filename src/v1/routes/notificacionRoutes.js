const router = require('express').Router();

const notificacionController = require('../../controller/notificacionController');

// Obtener todos las notificaciones
router.get('/', notificacionController.getAllNotificaciones);

// Obtener una sola notificacion por su ID
router.get('/:id', notificacionController.getOneNotificacion);

// Agregar una Notificacion
router.post('/', notificacionController.createOneNotificacion);

// Actualizar una Notificacion
router.patch('/:id', notificacionController.updateOneNotificacion);

// Eliminar una Notificacion
router.delete('/:id', notificacionController.deleteOneNotificacion);

module.exports = router;
