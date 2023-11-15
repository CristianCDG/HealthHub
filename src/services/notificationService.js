const nodemailer = require("nodemailer");

let logUserName;

const generateRandomUsername = () => {
  const length = 12;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let userName = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    userName += charset[randomIndex];
  }
  return userName;
};

const sendEmail = (toEmail, role) => {
	const transporter = nodemailer.createTransport({
	  service: "gmail",
	  auth: { user: "serviceshealthhub@gmail.com", pass: "dwfctctruxxsvmbe" },
	});
  
	logUserName = generateRandomUsername();
  
	let subject, text;
	if (role === 'Pediatra') {
	  subject = "¡Bienvenido a HealthHub como Pediatra!";
	  text = 'Hola, Pediatra...'; // Personaliza este mensaje para los pediatras
	} else if (role === 'Acudiente') {
	  subject = "¡Bienvenido a HealthHub como Acudiente!";
	  text = 'Hola, Acudiente...'; // Personaliza este mensaje para los acudientes
	} else {
	  subject = "¡Te damos la bienvenida a HealthHub!";
	  text = 'Hola';
	}
  
	// Puedes utilizar HTML para dar formato al cuerpo del correo
	const mailOptions = {
	  from: "serviceshealthhub@gmail.com",
	  to: toEmail,
	  subject: subject,
	  text: text
	};
  
	transporter.sendMail(mailOptions, function (error, info) {
	  if (error) {
		console.log(error);
	  } else {
		console.log("Correo electrónico enviado: " + info.response);
	  }
	});
	return logUserName;
  };
  
  module.exports = { sendEmail, logUserName};
 