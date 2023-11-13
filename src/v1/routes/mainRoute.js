const express = require('express');
const router = express.Router();
const path = require('path');

const loadSiteStructure = (req, res) => {
  const indexPath = path.join(__dirname, '../../public/mainInterface/index.html');
  res.sendFile(indexPath);
}

// Define routes that use the functions
router.get('/site', loadSiteStructure);

module.exports = router;