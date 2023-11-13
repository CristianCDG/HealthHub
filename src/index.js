const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
app.use(express.json());

const v1AcudienteRouter = require("./v1/routes/acudienteRoutes");
const v1AlimentoRouter = require("./v1/routes/alimentoRoutes");
const v1PacienteRouter = require("./v1/routes/pacienteRoutes");
const v1GrupoRouter = require("./v1/routes/grupoAlimenticioRoutes");
const v1PediatraRouter = require("./v1/routes/pediatraRoutes");
const v1MainRouter = require("./v1/routes/mainRoute");
const sendEmail = require("./services/notificationService"); // Requiere la función sendEmail

//Enlace para el CRUD de plan alimentario (Solo postman, sin interfaz)
const v1PlanRouter = require("./v1/routes/planAlimentarioRoutes");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public", "addPatient")));
app.use(express.static(path.join(__dirname, "public", "mainInterface")));

app.use("/api/v1/alimento", v1AlimentoRouter);
app.use("/api/v1/paciente", v1PacienteRouter);
app.use("/api/v1/acudiente", v1AcudienteRouter);
app.use("/api/v1/grupo", v1GrupoRouter);
app.use("/api/v1/planes", v1PlanRouter);
app.use("/api/v1/pediatra", v1PediatraRouter);
app.use("/main", v1MainRouter);

app.listen(PORT, () => {
  console.log(`API and Server started on port ${PORT}`);
});

app.post("/send-email", (req, res) => {
  const { toEmail } = req.body;
  sendEmail(toEmail);
  res.send("Correo enviado");
});

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";