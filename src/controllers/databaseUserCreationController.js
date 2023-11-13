const db = require("../database/config");
const { sendEmail } = require('../services/notificationService');

const length = 7;
const charset = "0123456789";

const createOneUser = async (req, res) => {
  const { ID, Nombre, Apellido, Correo, Contrasena } = req.body;

  const sql =
    "INSERT INTO Usuario (Id_usuario, Nombre, Apellido, Correo, Contrasena, Username) VALUES (?, ?, ?, ?, ?, ?)";

  let ID_ = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    ID_ += charset[randomIndex];
  }

  // Llama a sendEmail y usa el valor devuelto para Username
  console.log(Correo);
  const userName = await sendEmail(Correo);

  db.query(sql, [ID_, Nombre, Apellido, Correo, Contrasena, userName], (err, result) => {
    if (err) {
      console.error("Error al agregar el usuario en la base de datos:", err);
      res.status(500).json({ error: "Error en la base de datos" });
    } else {
      res.json({ message: "Usuario agregado con éxito" });
    }
  });
};

const getOneUserMail = (req, res) => {
  const { Correo } = req.params;

  db.query('SELECT * FROM Usuario WHERE Correo = ?', [Correo], (err, results) => {
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

module.exports = {
  createOneUser,
  getOneUserMail,
};