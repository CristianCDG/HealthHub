const db = require('../database/config');
const path = require('path');

const mostrarPagina = (req, res) => {
  console.log('en get/api/v1/pediatra');
  const rutaArchivo = path.resolve(
    __dirname,
    '../public/pediatra/pediatras.html'
  );
  res.sendFile(rutaArchivo);
};

const mostrarEstilos = (req, res) => {
  console.log('en get/api/v1/paciente/styles/pediatras.css');
  const rutaArchivo = path.resolve(
    __dirname,
    '../public/pediatra/styles/pediatras.css'
  );
  res.sendFile(rutaArchivo);
};

const getAllPediatras = (req, res) => {
  db.query('SELECT * FROM pediatra', (err, results) => {
    if (err) {
      console.error('Error al consultar la base de datos:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
    } else {
      res.json(results);
    }
  });
};

const getOnePediatra = (req, res) => {
  const { id } = req.params;

  db.query('SELECT * FROM Pediatra WHERE ID = ?', [id], (err, results) => {
    if (err) {
      console.error('Error al consultar la base de datos:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
    } else {
      if (results.length > 0) {
        res.json(results[0]);
      } else {
        res.status(404).json({ error: 'Pediatra no encontrado' });
      }
    }
  });
};

const createOnePediatra = (req, res) => {
  const { Id, Nombre, Apellido, E_mail, Contrasena } = req.body;

  const sql = 'INSERT INTO Pediatra VALUES (?, ?, ?, ?, ?)';

  db.query(sql, [Id, Nombre, Apellido, E_mail, Contrasena], (err, result) => {
    if (err) {
      console.error('Error al agregar el pediatra:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
    } else {
      res.json({ message: 'Pediatra agregado con éxito' });
    }
  });
};

const updateOnePediatra = (req, res) => {
  const { id } = req.params;
  const { Nombre, Apellido, E_mail, Contrasena } = req.body;

  const sql =
    'UPDATE Pediatra SET Nombre = ?, Apellido = ?, E_mail = ?, Contrasena = ? WHERE ID = ?';

  db.query(sql, [Nombre, Apellido, E_mail, Contrasena, id], (err, result) => {
    if (err) {
      console.error('Error al actualizar el pediatra:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
    } else {
      if (result.affectedRows > 0) {
        res.json({ message: 'Pediatra actualizado con éxito' });
      } else {
        res.status(404).json({ error: 'Pediatra no encontrado' });
      }
    }
  });
};

const deleteOnePediatra = (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM Pediatra WHERE ID = ?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error al eliminar el pediatra:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
    } else {
      if (result.affectedRows > 0) {
        res.json({ message: 'Pediatra eliminado con éxito' });
      } else {
        res.status(404).json({ error: 'Pediatra no encontrado' });
      }
    }
  });
};

module.exports = {
  getAllPediatras,
  mostrarPagina,
  mostrarEstilos,
  getOnePediatra,
  createOnePediatra,
  updateOnePediatra,
  deleteOnePediatra,
};
