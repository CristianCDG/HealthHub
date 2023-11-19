create database HealthHUB;
USE HealthHUB;

CREATE TABLE Pediatra (
	Id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Nombre VARCHAR(20) NOT NULL,
    Apellido VARCHAR(20) NOT NULL,
    E_mail VARCHAR(30) NOT NULL,
    Contrasena VARCHAR(30) NOT NULL
);


CREATE TABLE Paciente (
	Id INT PRIMARY KEY NOT NULL,
	Nombre VARCHAR(40) NOT NULL,
	Apellido VARCHAR(40) NOT NULL,
	Fecha_nacimiento DATE NOT NULL,
	Direccion VARCHAR(40) NOT NULL,
	Genero VARCHAR(20) NOT NULL,
    Peso DOUBLE NOT NULL,
    Altura int NOT NULL,
	Estado VARCHAR(20) NOT NULL,
	Id_pediatra INT NOT NULL,
    FOREIGN KEY (Id_pediatra) REFERENCES Pediatra(Id)
);

CREATE TABLE Acudiente (
	Id INT PRIMARY KEY NOT NULL,
    Nombre VARCHAR(40) NOT NULL,
    Apellido VARCHAR(40) NOT NULL,
    E_mail VARCHAR(40) NOT NULL,
    Contrasena VARCHAR(30) NOT NULL,
    Telefono INT NOT NULL,
    Direccion VARCHAR(40) NOT NULL,
    Fecha_nacimiento DATE NOT NULL
);

CREATE TABLE Asignacion_acudiente (
	Id_Acudiente INT NOT NULL,
    Id_paciente INT NOT NULL,
    Rol VARCHAR(15) NOT NULL,
    FOREIGN KEY (Id_Acudiente) REFERENCES Acudiente(Id),
    FOREIGN KEY (Id_paciente) REFERENCES Paciente(Id)
);

CREATE TABLE Usuario (
	Id_usuario INT NOT NULL,
    Nombre VARCHAR(40) NOT NULL,
    Apellido VARCHAR(40) NOT NULL,
    Correo VARCHAR(40) NOT NULL,
    Contrasena VARCHAR(40) NOT NULL,
    Username VARCHAR(40) NOT NULL,
    Rol VARCHAR(40) NULL
);


CREATE TABLE Notificacion (
	Id INT PRIMARY KEY NOT NULL,
	Contenido VARCHAR(100) NOT NULL,
    Fecha_envio DATE NOT NULL,
	Id_Acudiente INT NOT NULL,
	FOREIGN KEY (Id_Acudiente) REFERENCES Acudiente(Id)
);

CREATE TABLE GrupoAlimentario (
	Id INT PRIMARY KEY NOT NULL,
    Nombre VARCHAR(20) NOT NULL,
    Descripcion VARCHAR(40) NOT NULL
);

CREATE TABLE Alimento (
	Id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Nombre VARCHAR(20) NOT NULL,
    Alergenico BOOLEAN NOT NULL,
    Id_GrupoAlimentario INT NOT NULL,
	FOREIGN KEY (Id_GrupoAlimentario) REFERENCES GrupoAlimentario(Id)
);

CREATE TABLE PlanAlimentario (
	Id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Fecha_creacion DATE NOT NULL,
    Observaciones VARCHAR(60),
    ID_Paciente INT NOT NULL,
    Tipo VARCHAR(40) NOT NULL,
    FOREIGN KEY (ID_Paciente) REFERENCES Paciente(Id)
);

CREATE TABLE PlanAlimentario_Alimento (
    ID_PlanAlimentario INT,
    ID_Alimento INT,
    Dia VARCHAR(40) NOT NULL,
    PRIMARY KEY (ID_PlanAlimentario, ID_Alimento, Dia),
    FOREIGN KEY (ID_PlanAlimentario) REFERENCES PlanAlimentario(Id),
    FOREIGN KEY (ID_Alimento) REFERENCES Alimento(Id)
);