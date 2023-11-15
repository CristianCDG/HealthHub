// onlyEmailsController.js
const notificationService = require('../services/notificationService');

exports.sendEmail = (req, res) => {
    console.log(req.body); // Imprime el cuerpo de la solicitud
    const { Correo } = req.body;
    notificationService.sendEmail(Correo)
      .then(() => res.json({ message: 'Email sent successfully' }))
      .catch(err => res.status(500).json({ error: err.message }));
  };