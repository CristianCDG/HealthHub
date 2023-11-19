const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const session = require('express-session');
const path = require("path");
app.use(express.json());

const v1AcudienteRouter = require("./v1/routes/acudienteRoutes");
const v1AlimentoRouter = require("./v1/routes/alimentoRoutes");
const v1PacienteRouter = require("./v1/routes/pacienteRoutes");
const v1GrupoRouter = require("./v1/routes/grupoAlimenticioRoutes");
const v1PediatraRouter = require("./v1/routes/pediatraRoutes");
const v1MainRouter = require("./v1/routes/mainSiteRoute");
const v1DatabaseUser = require("./v1/routes/databaseUserCreationRoutes")
const v1DatabaseUserLog = require("./v1/routes/databaseUserLoginRoutes")
const v1DatabaseUserReg = require("./v1/routes/databaseUserCreationRoutes");
const v1PlanRouter = require("./v1/routes/planAlimentarioRoutes");
const v1AcudienteReg = require("./v1/routes/acudienteRegistrationRoutes");
const v1SendEmailRouter = require("./v1/routes/sendEmailRoutes");
const v1AlimentosPlanRouter = require("./v1/routes/alimentosPlanRoutes");
const v1IncidenciaRouter = require("./v1/routes/incidenciaRoutes");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public", "addPatient")));
app.use(express.static(path.join(__dirname, "public", "mainInterface")));
app.use(express.static(path.join(__dirname, "public", "acudienteRegistrationInterface")));

app.use("/api/v1/paciente", v1PacienteRouter);
app.use("/api/v1/alimento", v1AlimentoRouter);
app.use("/api/v1/acudiente", v1AcudienteRouter);
app.use("/api/v1/grupo", v1GrupoRouter);
app.use("/api/v1/planes", v1PlanRouter);
app.use("/api/v1/pediatra", v1PediatraRouter);
app.use("/main", v1MainRouter);
app.use("/api/v1/usercreation", v1DatabaseUser)
app.use("/api/v1/userlogin", v1DatabaseUserLog)
app.use("/api/v1/send-email", v1DatabaseUserReg)
app.use("/api/v1/finishAcudienteReg", v1AcudienteReg);
app.use("/api/v1/send-email-reg", v1SendEmailRouter);
app.use("/api/v1/alimentos", v1AlimentosPlanRouter);
app.use("/api/v1/incidencia", v1IncidenciaRouter);

app.use(session({
  secret: 'tu secreto aquí',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

app.listen(PORT, () => {
  console.log(`API and Server started on port ${PORT}`);
});

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
