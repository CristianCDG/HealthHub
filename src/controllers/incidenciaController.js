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

module.exports = {
    createIncidencia
}