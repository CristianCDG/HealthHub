// sendEmailRoutes.js
const express = require('express');
const router = express.Router();
const onlyEmailsController = require('../../controllers/onlyEmailsController');

router.post('/', onlyEmailsController.sendEmail);

module.exports = router;