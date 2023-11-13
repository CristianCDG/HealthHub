const router = require('express').Router();

const dataBaseUserController = require('../../controllers/databaseUserCreationController');

// Agregar un usuario
router.post('/', dataBaseUserController.createOneUser);

module.exports = router;
