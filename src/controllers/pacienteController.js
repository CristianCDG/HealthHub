const db = require('../database/config');
const path = require('path');

// const loadSiteStructure = (req, res) => {};

// const loadSiteStyles = (req, res) => {
//   pass;
// };

const getOnePaciente = (req, res) => {
  const { id } = req.params;

  db.query('SELECT * FROM Alimentos WHERE ID = ?', [id], (err, results) => {
    if (err) {
      console.error('Error al consultar la base de datos:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
    } else {
      if (results.length > 0) {
        res.json(results[0]);
      } else {
        res.status(404).json({ error: 'Paciente no encontrado' });
      }
    }
  });
};

module.exports = {
  getOnePaciente,
};
