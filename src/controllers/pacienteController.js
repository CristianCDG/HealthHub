const db = require('../database/config');

const mostrarPagina = (req, res) => {
  console.log('en get/api/v1/paciente');
  const rutaArchivo = path.resolve(
    __dirname,
    '../public/paciente/paciente.html',
  );
  res.sendFile(rutaArchivo);
};

const mostrarEstilos = (req, res) => {
  console.log('en get/api/v1/paciente/styles/pacientes.css');
  const rutaArchivo = path.resolve(
    __dirname,
    '../public/paciente/styles/pacientes.css',
  );
  res.sendFile(rutaArchivo);
};

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
    Id,
    Nombre_completo,
    Fecha_nacimiento,
    Direccion,
    Genero,
    Peso,
    Altura,
    Estado,
    Id_pediatra,
  } = req.body;

  const sql = 'INSERT INTO Paciente VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

  db.query(
    sql,
    [
      Id,
      Nombre_completo,
      Fecha_nacimiento,
      Direccion,
      Genero,
      Peso,
      Altura,
      Estado,
      Id_pediatra,
    ],
    (err, result) => {
      if (err) {
        console.error('Error al agregar el paciente:', err);
        return res.status(500).json({ error: 'Error en la base de datos' });
      }
      res.json({ message: 'Paciente agregado con éxito', id: result.insertId });
    },
  );
};

const updateOnePaciente = (req, res) => {
  const {
    ID,
    Nombre,
    Apellido,
    Fecha_nacimiento,
    Direccion,
    Genero,
    Peso,
    Altura,
    Estado,
    Id_pediatra,
  } = req.body;

  const sql =
    'UPDATE Paciente SET ID = ?, Nombre = ?, Apellido = ?, Fecha_nacimiento = ?, Direccion = ?, Genero = ?, Peso = ?, Altura = ?, Estado = ?, Id_pediatra WHERE ID = ?';

  db.query(
    sql,
    [
      ID,
      Nombre,
      Apellido,
      Fecha_nacimiento,
      Direccion,
      Genero,
      Peso,
      Altura,
      Estado,
      Id_pediatra,
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
    },
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
  mostrarPagina,
  mostrarEstilos,
  getAllPacientes,
  getOnePaciente,
  createOnePaciente,
  updateOnePaciente,
  deleteOnePaciente,
};
