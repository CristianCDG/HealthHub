const express = require('express');
const router = express.Router();
const path = require('path');

const mainSiteController = require('../../controllers/mainSiteController');

// Define routes that use the functions
router.get('/site', mainSiteController.loadSiteStructure);

module.exports = router;