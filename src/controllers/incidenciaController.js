const db = require("../database/config");

const createIncidencia = (req, res) => {
    const { Id_paciente, Id_Alimento, Descripcion } = req.body;
  
    db.query(
      'INSERT INTO Incidencia (Id_paciente, Id_Alimento, Descripcion) VALUES (?, ?, ?)',
      [Id_paciente, Id_Alimento, Descripcion],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({ message: 'Error al crear la incidencia' });
        } else {
          res.status(201).json({ message: 'Incidencia creada con éxito' });
        }
      }
    );
  };

  const getIncidenciasByPacienteId = (req, res) => {
    const { Id_paciente } = req.params;
  
    db.query(
      'SELECT * FROM Incidencia WHERE Id_paciente = ?',
      [Id_paciente],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({ message: 'Error al obtener las incidencias' });
        } else {
          res.status(200).json(results);
        }
      }
    );
};

module.exports = {
    createIncidencia,
    getIncidenciasByPacienteId
}