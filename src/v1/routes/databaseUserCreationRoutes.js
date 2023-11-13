const router = require('express').Router();

const dataBaseUserController = require('../../controllers/databaseUserCreationController');

// Agregar un usuario
router.post('/', dataBaseUserController.createOneUser);

// Obtener un solo correo
router.get('/:Correo', dataBaseUserController.getOneUserMail);

module.exports = router;
