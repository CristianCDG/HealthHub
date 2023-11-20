const db = require('../database/config');

const getAllAcudientes = (req, res) => {
  db.query('SELECT * FROM Acudiente', (err, results) => {
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

  db.query('SELECT * FROM Acudiente WHERE ID = ?', [id], (err, results) => {
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
    Nombre,
    Apellido,
    E_mail,
    Contrasena,
    Telefono,
    Direccion,
    Fecha_nacimiento,
  } = req.body;

  // Genera un ID aleatorio
  const ID = Math.floor(Math.random() * 1000000);

  const sql =
    'INSERT INTO Acudiente (ID, Nombre, Apellido, E_mail, Contrasena, Telefono, Direccion, Fecha_nacimiento) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

  db.query(
    sql,
    [
        ID,
        Nombre,
        Apellido,
        E_mail,
        Contrasena,
        Telefono,
        Direccion,
        Fecha_nacimiento,
    ],
    (err, result) => {
      if (err) {
        console.error('Error al agregar el Acudiente:', err);
        res.status(500).json({ error: 'Error en la base de datos' });
      } else {
        res.json({ message: 'Acudiente agregado con éxito', ID });
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
    'UPDATE Acudiente SET Nombre = ?, Apellido = ? WHERE ID = ?';

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

  const sql = 'DELETE FROM Acudiente WHERE ID = ?';

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

const getAcudienteByEmail = (req, res) => {
  const { email } = req.params;

  db.query('SELECT * FROM Acudiente WHERE E_mail = ?', [email], (err, results) => {
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

const updateAcudienteByEmail = (req, res) => {
  const { email } = req.params;
  const {
    Direccion,
    Telefono,
    Fecha_nacimiento,
  } = req.body;

  const sql =
    'UPDATE Acudiente SET Direccion = ?, Telefono = ?, Fecha_nacimiento = ? WHERE E_mail = ?';

  db.query(
    sql,
    [
        Direccion,
        Telefono,
        Fecha_nacimiento,
        email,
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


module.exports = {
  getAllAcudientes,
  getOneAcudiente,
  createOneAcudiente,
  updateOneAcudiente,
  deleteOneAcudiente,
  getAcudienteByEmail,
  updateAcudienteByEmail
};