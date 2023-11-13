const db = require('../database/config');

const getAllPacientes = (req, res) => {
    db.query('SELECT * FROM paciente', (err, results) => {
      if (err) {
        console.error('Error al consultar la base de datos:', err);
        res.status(500).json({ error: 'Error en la base de datos' });
      } else {
        res.json(results);
      }
    });
  };

const getOnePaciente = (req, res) => {
    const { id } = req.params;
  
    db.query('SELECT * FROM paciente WHERE ID = ?', [id], (err, results) => {
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
    const {
      ID,
      Nombre,
      Apellido,
      Edad,
      Dni,
      Direccion,
      Telefono,
    } = req.body;
    
    const sql =
      'INSERT INTO Paciente (ID, Nombre, Apellido, Edad, Dni, Direccion, Telefono) VALUES (?, ?, ?, ?, ?, ?, ?)';
  
    db.query(
      sql,
      [
        ID,
        Nombre,
        Apellido,
        Edad,
        Dni,
        Direccion,
        Telefono,
      ],
      (err, result) => {
        if (err) {
          console.error('Error al agregar el paciente:', err);
          res.status(500).json({ error: 'Error en la base de datos' });
        } else {
          res.json({ message: 'Paciente agregado con éxito' });
        }
      }
    );
  };

  const updateOnePaciente = (req, res) => {
    const { id } = req.params;
    const {
        ID,
        Nombre,
        Apellido,
        Edad,
        Dni,
        Direccion,
        Telefono,
    } = req.body;
  
    const sql =
      'UPDATE Paciente SET Nombre = ?, Apellido = ?, Direccion = ?, Telefono = ? WHERE ID = ?';
  
    db.query(
      sql,
      [
        ID,
        Nombre,
        Apellido,
        Edad,
        Dni,
        Direccion,
        Telefono,
      ],
      (err, result) => {
        if (err) {
          console.error('Error al actualizar el paciente:', err);
          res.status(500).json({ error: 'Error en la base de datos' });
        } else {
          if (result.affectedRows > 0) {
            res.json({ message: 'Paciente actualizado con éxito' });
          } else {
            res.status(404).json({ error: 'Paciente no encontrado' });
          }
        }
      }
    );
  };

const deleteOnePaciente = (req, res) => {
    const { id } = req.params;
  
    const sql = 'DELETE FROM Paciente WHERE ID = ?';
  
    db.query(sql, [id], (err, result) => {
      if (err) {
        console.error('Error al eliminar el paciente:', err);
        res.status(500).json({ error: 'Error en la base de datos' });
      } else {
        if (result.affectedRows > 0) {
          res.json({ message: 'Paciente eliminado con éxito' });
        } else {
          res.status(404).json({ error: 'Pediatra no encontrado' });
        }
      }
    });
  };
  
  module.exports = {
    getAllPacientes,
    getOnePaciente,
    createOnePaciente,
    updateOnePaciente,
    deleteOnePaciente,
  };