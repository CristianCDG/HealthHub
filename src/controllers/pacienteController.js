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

const getAllPacientes = (req, res) => {
  db.query('SELECT * FROM Paciente', (err, results) => {
    if (err) {
      console.error('Error al consultar la base de datos:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
    } else {
      res.json(results);
    }
  });
};

const createOnePaciente = (req, res) => {
  const { Id, Nombre, Apellido, Fecha_nacimiento, Direccion, Genero, Peso, Altura, Estado, Id_pediatra } = req.body;

  const sql = 'INSERT INTO Paciente (Id, Nombre, Apellido, Fecha_nacimiento, Direccion, Genero, Peso, Altura, Estado, Id_pediatra) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  db.query(sql, [Id, Nombre, Apellido, Fecha_nacimiento, Direccion, Genero, Peso, Altura, Estado, Id_pediatra], (err, result) => {
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
  const { Nombre, Apellido, Fecha_nacimiento, Direccion, Genero, Peso, Altura, Estado } = req.body;

  const sql = `UPDATE Paciente SET Nombre = ?, Apellido = ?, Fecha_nacimiento = ?, Direccion = ?, Genero = ?, Peso = ?, Altura = ?, Estado = ? WHERE Id = ${id}`;

  db.query(sql, [Nombre, Apellido, Fecha_nacimiento, Direccion, Genero, Peso, Altura, Estado], (err, result) => {
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

  const sql = 'DELETE FROM Paciente WHERE Id = ?'

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
  getAllPacientes,
  createOnePaciente,
  updateOnePaciente,
  deleteOnePaciente,
  getAllPacientes
};
