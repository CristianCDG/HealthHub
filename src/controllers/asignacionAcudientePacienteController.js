const db = require('../database/config');

const createAsignacion = (req, res) => {
  const { Id_Acudiente, Id_paciente, Rol } = req.body;

  if (!Id_Acudiente || !Id_paciente || !Rol) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }

  const sql = 'INSERT INTO Asignacion_acudiente (Id_Acudiente, Id_paciente, Rol) VALUES (?, ?, ?)';

  db.query(sql, [Id_Acudiente, Id_paciente, Rol], (err, result) => {
    if (err) {
      console.error('Error al crear la asignación:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
    } else {
      res.json({ message: 'Asignación creada con éxito', Id: result.insertId });
    }
  });
};

const getPacientesPorAcudiente = (req, res) => {
  const Id_Acudiente = req.params.id;

  const sql = 'SELECT Id_paciente FROM Asignacion_acudiente WHERE Id_Acudiente = ?';

  db.query(sql, [Id_Acudiente], (err, result) => {
    if (err) {
      console.error('Error al obtener los pacientes:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
    } else {
      res.json(result);
    }
  });
};

module.exports = {
  createAsignacion,
  getPacientesPorAcudiente
}