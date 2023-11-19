const db = require('../database/config');
const path = require('path');

const getAlimentosPlan = (req, res) => {
    const sql = `SELECT * FROM PlanAlimentario_Alimento WHERE ID_PlanAlimentario = ?`;
  
    db.query(sql, [req.params.idPlan], (err, result) => {
      if (err) res.status(500).json({ error: err });
      else res.json(result);
    });
  };


  const deleteAlimentoPlan = (req, res) => {
    const sql = `DELETE FROM PlanAlimentario_Alimento WHERE ID_PlanAlimentario = ? AND ID_Alimento = ? AND Dia = ?`;
  
    db.query(sql, [req.params.idPlan, req.params.idAlimento, req.params.dia], (err, result) => {
      if (err) res.status(500).json({ error: err });
      else res.json({ message: 'Alimento deleted successfully' });
    });
  };
  

  const getAlimentoByName = (req, res) => {
    const sql = `SELECT * FROM Alimento WHERE Nombre = ?`;
  
    db.query(sql, [req.params.name], (err, result) => {
      if (err) res.status(500).json({ error: err });
      else res.json(result[0]); // Assuming the name is unique, so we return the first result
    });
  };

  const addAlimentoPlan = (req, res) => {
    const sqlGetId = `SELECT Id FROM Alimento WHERE Nombre = ?`;
    db.query(sqlGetId, [req.body.nombreAlimento], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: err });
      } else {
        const idAlimento = result[0].Id; // Change this line
        const sqlInsert = `INSERT INTO PlanAlimentario_Alimento (ID_PlanAlimentario, ID_Alimento, Dia) VALUES (?, ?, ?)`;
        db.query(sqlInsert, [req.body.idPlan, idAlimento, req.body.diaAlimento], (err, result) => {
          if (err) {
            console.error(err);
            res.status(500).json({ error: err });
          } else {
            res.json({ message: 'Alimento added successfully' });
          }
        });
      }
    });
};

  module.exports = {
    getAlimentosPlan,
    deleteAlimentoPlan,
    getAlimentoByName,
    addAlimentoPlan
  };