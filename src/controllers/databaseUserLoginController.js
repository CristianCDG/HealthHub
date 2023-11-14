const db = require("../database/config");

const getUser = (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM Usuario WHERE Username = ? AND Contrasena = ?', [username, password], (err, results) => {
    if (err) {
      console.error('Error al consultar la base de datos:', err);
      res.status(500).json({ error: 'Error en la base de datos' });
    } else {
      if (results.length > 0) {
        res.json({ valid: true, user: results[0] });
      } else {
        res.json({ valid: false, error: 'Nombre de usuario o contraseña incorrectos' });
      }
    }
  });
};

module.exports = {
  getUser,
};