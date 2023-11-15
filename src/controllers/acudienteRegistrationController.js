const db = require("../database/config");
const path = require("path");

const loadSiteStructure = (req, res) => {
  const indexPath = path.join(
    __dirname,
    "../public/acudienteRegistrationInterface/index.html"
  );
  res.sendFile(indexPath);
};

module.exports = {
  loadSiteStructure,
};
