// onlyEmailsController.js
const notificationService = require('../services/notificationService');

exports.sendEmail = (req, res) => {
    console.log(req.body); // Imprime el cuerpo de la solicitud
    const { Correo } = req.body;
    try {
        const result = notificationService.sendEmail(Correo);
        res.json({ message: 'Email sent successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};