const db = require('../database/config');
const path = require('path');

const getAllPlanes = (req, res) => {
    db.query('SELECT * FROM PlanAlimentario', (err, results) => {
      if (err) {
        console.error('Error al consultar la base de datos:', err);
        res.status(500).json({ error: 'Error en la base de datos' });
      } else {
        res.json(results);
      }
    });
  };

const getOnePlan = (req, res) => {
    const { id } = req.params;
  
    db.query('SELECT * FROM PlanAlimentario WHERE ID = ?', [id], (err, results) => {
      if (err) {
        console.error('Error al consultar la base de datos:', err);
        res.status(500).json({ error: 'Error en la base de datos' });
      } else {
        if (results.length > 0) {
          res.json(results[0]);
        } else {
          res.status(404).json({ error: 'Plan alimentario no encontrado' });
        }
      }
    });
  };

  const createOnePlan = (req, res) => {
    const { nombreBebe, apellidoBebe, planAlimentario, tipo } = req.body;
  
    // Primero, obtenemos el ID del bebé basado en su nombre y apellido
    const sqlGetId = 'SELECT ID FROM Paciente WHERE Nombre = ? AND Apellido = ?';
    db.query(sqlGetId, [nombreBebe, apellidoBebe], (err, results) => {
      if (err) {
        console.error('Error al obtener el ID del bebé:', err);
        res.status(500).json({ error: 'Error en la base de datos' });
        return;
      }
  
      if (results.length === 0) {
        res.status(404).json({ error: 'Bebé no encontrado' });
        return;
      }
  
      // Ahora que tenemos el ID del bebé, podemos insertar el nuevo plan alimentario
      const bebeId = results[0].ID;
      const sqlInsert = 'INSERT INTO PlanAlimentario (Fecha_creacion, Observaciones, ID_Paciente, Tipo) VALUES (CURDATE(), ?, ?, ?)';
      db.query(sqlInsert, ['', bebeId, tipo], (err, result) => {
        if (err) {
          console.error('Error al agregar el plan alimentario:', err);
          res.status(500).json({ error: 'Error en la base de datos' });
          return;
        }
  
        const ID_PlanAlimentario = result.insertId;
  
        // Creamos un array de promesas para cada alimento en el plan alimentario
        const promises = planAlimentario.flatMap((dia) => {
          return dia.alimentos.map((alimento) => {
            return new Promise((resolve, reject) => {
              getAlimentoId(alimento, (err, ID_Alimento) => {
                if (err) {
                  console.error('Error al obtener el ID del alimento:', err);
                  reject('Error en la base de datos');
                } else {
                  insertIntoPlanAlimento(ID_PlanAlimentario, ID_Alimento, dia.dia, (err) => {
                    if (err) {
                      console.error('Error al insertar el alimento en el plan alimentario:', err);
                      reject('Error en la base de datos');
                    } else {
                      resolve();
                    }
                  });
                }
              });
            });
          });
        });
  
        // Esperamos a que todas las promesas se resuelvan antes de enviar la respuesta
        Promise.all(promises)
          .then(() => {
            res.json({ message: 'Plan alimentario agregado con éxito' });
          })
          .catch((error) => {
            res.status(500).json({ error });
          });
      });
    });
  };


  const getPlanesForPaciente = (req, res) => {
    const { nombreBebe, apellidoBebe } = req.params;
  
    const sqlGetId = 'SELECT ID FROM Paciente WHERE Nombre = ? AND Apellido = ?';
    db.query(sqlGetId, [nombreBebe, apellidoBebe], (err, results) => {
      if (err) {
        console.error('Error al obtener el ID del bebé:', err);
        res.status(500).json({ error: 'Error en la base de datos' });
        return;
      }
  
      if (results.length === 0) {
        res.status(404).json({ error: 'Bebé no encontrado' });
        return;
      }
  
      const bebeId = results[0].ID;
      const sqlGetPlanes = 'SELECT * FROM PlanAlimentario WHERE ID_Paciente = ?';
      db.query(sqlGetPlanes, [bebeId], (err, results) => {
        if (err) {
          console.error('Error al obtener los planes alimentarios:', err);
          res.status(500).json({ error: 'Error en la base de datos' });
          return;
        }
  
        res.json(results);
      });
    });
  };

  const updateOnePlan = (req, res) => {
    const { id } = req.params;
    const { Observaciones } = req.body;
  
    const sql = 'UPDATE PlanAlimentario SET Observaciones = ? WHERE ID = ?';
  
    db.query(sql, [Observaciones, id], (err, result) => {
      if (err) {
        console.error('Error al actualizar el plan alimentario:', err);
        res.status(500).json({ error: 'Error en la base de datos' });
      } else {
        if (result.affectedRows > 0) {
          res.json({ message: 'Plan alimentario actualizado con éxito' });
        } else {
          res.status(404).json({ error: 'Plan alimentario no encontrado' });
        }
      }
    });
  };
  

const deleteOnePlan = (req, res) => {
    const { id } = req.params;
  
    const sql = 'DELETE FROM PlanAlimentario WHERE ID = ?';
  
    db.query(sql, [id], (err, result) => {
      if (err) {
        console.error('Error al eliminar el plan alimentario:', err);
        res.status(500).json({ error: 'Error en la base de datos' });
      } else {
        if (result.affectedRows > 0) {
          res.json({ message: 'Plan alimentario eliminado con éxito' });
        } else {
          res.status(404).json({ error: 'Plan alimentario no encontrado' });
        }
      }
    });
  };

  const getAlimentoId = (alimento, callback) => {
    const sql = 'SELECT Id FROM Alimento WHERE Nombre = ?';
    db.query(sql, [alimento], (err, result) => {
      if (err) {
        console.error('Error al buscar el ID del alimento:', err);
        callback(err);
      } else {
        const ID_Alimento = result[0].Id; // Cambia 'ID_Alimento' a 'Id'
        callback(null, ID_Alimento);
      }
    });
  };

  const insertIntoPlanAlimento = (ID_PlanAlimentario, ID_Alimento, dia, callback) => {
    const sql = 'INSERT INTO PlanAlimentario_Alimento (ID_PlanAlimentario, ID_Alimento, Dia) VALUES (?, ?, ?)';
    db.query(sql, [ID_PlanAlimentario, ID_Alimento, String(dia)], (err, result) => {
      if (err) {
        console.error('Error al insertar el alimento en el plan alimentario:', err);
        callback(err);
      } else {
        callback(null);
      }
    });
  };

  const getAlimentosForPlan = (req, res) => {
    const { id } = req.params;
  
    const sql = 'SELECT * FROM PlanAlimentario_Alimento WHERE ID_PlanAlimentario = ?';
    db.query(sql, [id], (err, results) => {
      if (err) {
        console.error('Error al obtener los alimentos del plan alimentario:', err);
        res.status(500).json({ error: 'Error en la base de datos' });
        return;
      }
  
      res.json(results);
    });
  };

  const updateAlimentoInPlan = (req, res) => {
    const { idPlan, idAlimento } = req.params;
    const { dia } = req.body;
  
    const sql = 'UPDATE PlanAlimentario_Alimento SET Dia = ? WHERE ID_PlanAlimentario = ? AND ID_Alimento = ?';
    db.query(sql, [dia, idPlan, idAlimento], (err, result) => {
      if (err) {
        console.error('Error al actualizar el alimento en el plan alimentario:', err);
        res.status(500).json({ error: 'Error en la base de datos' });
      } else {
        if (result.affectedRows > 0) {
          res.json({ message: 'Alimento actualizado con éxito en el plan alimentario' });
        } else {
          res.status(404).json({ error: 'Alimento no encontrado en el plan alimentario' });
        }
      }
    });
  };

  
  

module.exports = {
    getAllPlanes,
    getOnePlan,
    createOnePlan,
    updateOnePlan,
    deleteOnePlan,
    getPlanesForPaciente,
    getAlimentosForPlan,
    updateAlimentoInPlan
  };