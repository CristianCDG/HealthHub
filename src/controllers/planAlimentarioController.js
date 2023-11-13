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
    const {
      ID,
      Fecha_creacion,
      Observaciones,
      ID_paciente,
      ID_pediatra,
      ID_alimento,
    } = req.body;
    
    const sql =
      'INSERT INTO PlanAlimentario (ID, Fecha_creacion, Observaciones, ID_paciente, ID_pediatra, ID_alimento) VALUES (?, ?, ?, ?, ?, ?)';
  
    db.query(
      sql,
      [
        ID,
        Fecha_creacion,
        Observaciones,
        ID_paciente,
        ID_pediatra,
        ID_alimento,
      ],
      (err, result) => {
        if (err) {
          console.error('Error al agregar el plan alimentario:', err);
          res.status(500).json({ error: 'Error en la base de datos' });
        } else {
          res.json({ message: 'Plan alimentario agregado con éxito' });
        }
      }
    );
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

module.exports = {
    getAllPlanes,
    getOnePlan,
    createOnePlan,
    updateOnePlan,
    deleteOnePlan,
  };