const db = require('../database/config');

const getAllGrupos = (req, res) => {
    db.query('SELECT * FROM GrupoAlimentario', (err, results) => {
      if (err) {
        console.error('Error al consultar la base de datos:', err);
        res.status(500).json({ error: 'Error en la base de datos' });
      } else {
        res.json(results);
      }
    });
  };

const getOneGrupo = (req, res) => {
    const { id } = req.params;
  
    db.query('SELECT * FROM GrupoAlimentario WHERE ID = ?', [id], (err, results) => {
      if (err) {
        console.error('Error al consultar la base de datos:', err);
        res.status(500).json({ error: 'Error en la base de datos' });
      } else {
        if (results.length > 0) {
          res.json(results[0]);
        } else {
          res.status(404).json({ error: 'Grupo alimenticio no encontrado' });
        }
      }
    });
  };

  const getGrupoIdByName = (req, res) => {
    const { Nombre } = req.params;

    db.query('SELECT Id FROM GrupoAlimentario WHERE Nombre = ?', [Nombre], (err, results) => {
        if (err) {
            console.error('Error al consultar la base de datos:', err);
            res.status(500).json({ error: 'Error en la base de datos' });
        } else {
            if (results.length > 0) {
                res.json(results[0].Id);
            } else {
                res.status(404).json({ error: 'Grupo alimenticio no encontrado' });
            }
        }
    });
};


  const createOneGrupo = (req, res) => {
    const {
      Nombre,
      Descripcion
    } = req.body;
    
    const sql =
      'INSERT INTO GrupoAlimentario (Nombre, Descripcion) VALUES (?, ?)';
  
    db.query(
      sql,
      [
        Nombre,
        Descripcion
      ],
      (err, result) => {
        if (err) {
          console.error('Error al agregar el grupo alimenticio:', err);
          res.status(500).json({ error: 'Error en la base de datos' });
        } else {
          res.json({ message: 'Grupo alimenticio agregado con éxito' });
        }
      }
    );
};

const updateOneGrupo = (req, res) => {
  const { id } = req.params;
  const {
      Nombre,
      Descripcion,
  } = req.body;

  const sql =
    'UPDATE GrupoAlimentario SET Nombre = ?, Descripcion = ? WHERE ID = ?';

  db.query(
    sql,
    [
      Nombre,
      Descripcion,
      id
    ],
    (err, result) => {
      if (err) {
        console.error('Error al actualizar el grupo alimenticio:', err);
        res.status(500).json({ error: 'Error en la base de datos' });
      } else {
        if (result.affectedRows > 0) {
          res.json({ message: 'Grupo alimenticio actualizado con éxito' });
        } else {
          res.status(404).json({ error: 'Grupo alimenticio no encontrado' });
        }
      }
    }
  );
};

  const deleteOneGrupo = (req, res) => {
    const { id } = req.params;
  
    const sql = 'DELETE FROM GrupoAlimentario WHERE ID = ?';
  
    db.query(sql, [id], (err, result) => {
      if (err) {
        console.error('Error al eliminar el grupo alimenticio:', err);
        res.status(500).json({ error: 'Error en la base de datos' });
      } else {
        if (result.affectedRows > 0) {
          res.json({ message: 'Grupo alimenticio eliminado con éxito' });
        } else {
          res.status(404).json({ error: 'Grupo alimenticio no encontrado' });
        }
      }
    });
  };

  const getGroupByName = (req, res) => {
    const { Nombre } = req.params;
  
    db.query('SELECT * FROM GrupoAlimentario WHERE Nombre = ?', [Nombre], (err, results) => {
      if (err) {
        console.error('Error al consultar la base de datos:', err);
        res.status(500).json({ error: 'Error en la base de datos' });
      } else {
        if (results.length > 0) {
          res.json(results[0]);
        } else {
          res.status(404).json({ error: 'Grupo no encontrado' });
        }
      }
    });
  };
  
  module.exports = {
    getAllGrupos,
    getOneGrupo,
    createOneGrupo,
    updateOneGrupo,
    deleteOneGrupo,
    getGrupoIdByName,
    getGroupByName
  };