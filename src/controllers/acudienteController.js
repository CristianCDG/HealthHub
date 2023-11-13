const db = require('../database/config');

const getAllAcudientes = (req, res) => {
  db.query('SELECT * FROM Acudientes', (err, results) => {
    if (err) {
      console.error('Error al consultar la base de datos:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
    } else {
      res.json(results);
    }
  });
};

const getOneAcudiente = (req, res) => {
  const { id } = req.params;

  db.query('SELECT * FROM Acudientes WHERE ID = ?', [id], (err, results) => {
    if (err) {
      console.error('Error al consultar la base de datos:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
    } else {
      if (results.length > 0) {
        res.json(results[0]);
      } else {
        res.status(404).json({ error: 'Acudiente no encontrado' });
      }
    }
  });
};

const createOneAcudiente = (req, res) => {
  const {
    ID,
    Nombre,
    Apellido,
    PacienteID,
  } = req.body;
  const sql =
    'INSERT INTO Acudientes (ID, Nombre, Apellido, PacienteID) VALUES (?, ?, ?, ?)';

  db.query(
    sql,
    [
        ID,
        Nombre,
        Apellido,
        PacienteID,
    ],
    (err, result) => {
      if (err) {
        console.error('Error al agregar el Acudiente:', err);
        res.status(500).json({ error: 'Error en la base de datos' });
      } else {
        res.json({ message: 'Acudiente agregado con éxito' });
      }
    }
  );
};

const updateOneAcudiente = (req, res) => {
  const { id } = req.params;
  const {
    ID,
    Nombre,
    Apellido,
    PacienteID,
  } = req.body;

  const sql =
    'UPDATE Acudientes SET Nombre = ?, Apellido = ? WHERE ID = ?';

  db.query(
    sql,
    [
        ID,
        Nombre,
        Apellido,
        PacienteID,
    ],
    (err, result) => {
      if (err) {
        console.error('Error al actualizar el Acudiente:', err);
        res.status(500).json({ error: 'Error en la base de datos' });
      } else {
        if (result.affectedRows > 0) {
          res.json({ message: 'Acudiente actualizado con éxito' });
        } else {
          res.status(404).json({ error: 'Acudiente no encontrado' });
        }
      }
    }
  );
};

const deleteOneAcudiente = (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM Acudientes WHERE ID = ?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error al eliminar el Acudiente:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
    } else {
      if (result.affectedRows > 0) {
        res.json({ message: 'Acudiente eliminado con éxito' });
      } else {
        res.status(404).json({ error: 'Acudiente no encontrado' });
      }
    }
  });
};

module.exports = {
  getAllAcudientes,
  getOneAcudiente,
  createOneAcudiente,
  updateOneAcudiente,
  deleteOneAcudiente,
};