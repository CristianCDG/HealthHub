const db = require('../database/config');
const path = require('path');

const loadSiteStructure = (req, res) => {
  const indexPath = path.join(__dirname, '../public/index.html');
  res.sendFile(indexPath);
};

const loadSiteStyles = (req, res) => {
  const stylePath = path.join(__dirname, '../public/index.css');
  res.sendFile(stylePath);
};

const getAllAlimentos = (req, res) => {
  db.query('SELECT * FROM Alimento', (err, results) => {
    if (err) {
      console.error('Error al consultar la base de datos:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
    } else {
      res.json(results);
    }
  });
};

const getOneAlimento = (req, res) => {
  const { id } = req.params;

  db.query('SELECT * FROM Alimento WHERE ID = ?', [id], (err, results) => {
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

const getAlimentoByName = (req, res) => {
  const { name } = req.params;

  db.query('SELECT * FROM Alimento WHERE Nombre = ?', [name], (err, results) => {
    if (err) {
      console.error('Error al consultar la base de datos:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
    } else {
      if (results.length > 0) {
        res.json(results[0]);
      } else {
        res.status(404).json({ error: 'Alimento no encontrado' });
      }
    }
  });
};



const createOneAlimento = (req, res) => {
  const { Nombre, Alergenico, Id_GrupoAlimentario } = req.body;

  const sql =
    'INSERT INTO Alimento (Nombre, Alergenico, Id_GrupoAlimentario) VALUES (?, ?, ?)';

  db.query(
    sql,
    [Nombre, Alergenico, Id_GrupoAlimentario],
    (err, result) => {
      if (err) {
        console.error('Error al agregar el alimento:', err);
        res.status(500).json({ error: 'Error en la base de datos' });
      } else {
        res.json({ message: 'Alimento agregado con éxito' });
      }
    },
  );
};

const updateOneAlimento = (req, res) => {
  const { id } = req.params;
  const { Nombre, Alergenico, Id_GrupoAlimentario } = req.body;

  const sql = 'UPDATE Alimento SET Nombre = ?, Alergenico = ?, Id_GrupoAlimentario = ? WHERE ID = ?';

  db.query(sql, [Nombre, Alergenico, Id_GrupoAlimentario, id], (err, result) => {
    if (err) {
      console.error('Error al actualizar el alimento:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
    } else {
      if (result.affectedRows > 0) {
        res.json({ message: 'Alimento actualizado con éxito' });
      } else {
        res.status(404).json({ error: 'Alimento no encontrado' });
      }
    }
  });
};

const deleteOneAlimento = (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM Alimento WHERE ID = ?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error al eliminar el alimento:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
    } else {
      if (result.affectedRows > 0) {
        res.json({ message: 'Alimento eliminado con éxito' });
      } else {
        res.status(404).json({ error: 'Alimento no encontrado' });
      }
    }
  });
};

module.exports = {
  getAllAlimentos,
  getOneAlimento,
  createOneAlimento,
  updateOneAlimento,
  deleteOneAlimento,
  loadSiteStructure,
  loadSiteStyles,
  getAlimentoByName
};
