const express = require('express');
const router = express.Router();
const path = require('path');

const acudienteRegistrationSiteController = require('../../controllers/acudienteRegistrationController');

router.get('/', acudienteRegistrationSiteController.loadSiteStructure);
module.exports = router;