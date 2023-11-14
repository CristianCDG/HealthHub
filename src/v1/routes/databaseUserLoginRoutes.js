const router = require('express').Router();
const databaseUserLogController = require('../../controllers/databaseUserLoginController');

// Ruta para verificar las credenciales del usuario
router.post('/', databaseUserLogController.getUser);

module.exports = router;