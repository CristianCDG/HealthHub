const db = require('../database/config');
const path = require('path');

const loadSiteStructure = (req, res) => {
  const indexPath = path.join(__dirname, '../public/paciente/paciente.html')
  res.sendFile(indexPath);
};

const getOnePaciente = (req, res) => {
  const { id } = req.params;

  db.query('SELECT * FROM Paciente WHERE ID = ?', [id], (err, results) => {
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

const createOnePaciente = (req, res) => {
  const { id, nombre, apellido, fecha_nacimiento, direccion, genero, peso, altura, estado, id_pediatra } = req.body;

  const sql = 'INSERT INTO Paciente (id, nombre, apellido, fecha_nacimiento, direccion, genero, peso, altura, estado, id_pediatra) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  db.query(sql, [id, nombre, apellido, fecha_nacimiento, direccion, genero, peso, altura, estado, id_pediatra], (err, result) => {
    if (err) {
      console.error('Error al agregar el paciente:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
    } else {
      res.json({ message: 'Paciente agregado con éxito' });
    }
  });
};

const updateOnePaciente = (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, fecha_nacimiento, direccion, genero, peso, altura, estado } = req.body;

  const sql = `UPDATE Paciente SET nombre = ?, apellido = ?, fecha_nacimiento = ?, direccion = ?, genero = ?, peso = ?, altura = ?, estado = ? WHERE Id = ${id}`;

  db.query(sql, [nombre, apellido, fecha_nacimiento, direccion, genero, peso, altura, estado], (err, result) => {
    if (err) {
      console.error('Error al actualizar el Paciente:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
    } else {
      if (result.affectedRows > 0) {
        res.json({ message: 'Paciente actualizado con éxito' });
      } else {
        res.status(404).json({ error: 'Paciente no encontrado' });
      }
    }
  });
};

const deleteOnePaciente = (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM Paciente WHERE id = ?'

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error al eliminar el paciente:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
    } else {
      if (result.affectedRows > 0) {
        res.json({ message: 'Paciente eliminado con éxito' });
      } else {
        res.status(404).json({ error: 'Paciente no encontrado' });
      }
    }
  });
};

module.exports = {
  loadSiteStructure,
  getOnePaciente,
  createOnePaciente,
  updateOnePaciente,
  deleteOnePaciente,
};
