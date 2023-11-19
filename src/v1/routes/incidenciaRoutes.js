const express = require('express');
const incidenciaController = require('../../controllers/incidenciaController');

const router = express.Router();

router.post('/', incidenciaController.createIncidencia);

// Puedes añadir más rutas para manejar otras solicitudes HTTP, como obtener todas las incidencias, obtener una incidencia por su id, actualizar una incidencia, etc.

module.exports = router;