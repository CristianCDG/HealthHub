create database HealthHUB;
#drop database healthhub;
USE HealthHUB;

CREATE TABLE Pediatra (
	Id INT PRIMARY KEY NOT NULL,
    Nombre VARCHAR(20) NOT NULL,
    Apellido VARCHAR(20) NOT NULL,
    E_mail VARCHAR(30) NOT NULL,
    Contrasena VARCHAR(30) NOT NULL
);

CREATE TABLE Paciente (
	id INT PRIMARY KEY NOT NULL,
	nombre VARCHAR(40) NOT NULL,
	apellido VARCHAR(40) NOT NULL,
	fecha_nacimiento DATE NOT NULL,
	direccion VARCHAR(40) NOT NULL,
	genero VARCHAR(20) NOT NULL,
    peso DOUBLE NOT NULL,
    altura int NOT NULL,
	estado VARCHAR(20) NOT NULL,
	id_pediatra INT NOT NULL,
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
	Id INT PRIMARY KEY NOT NULL,
    Nombre VARCHAR(20) NOT NULL,
    Alergenico BOOLEAN NOT NULL,
    Id_GrupoAlimentario INT NOT NULL,
	FOREIGN KEY (Id_GrupoAlimentario) REFERENCES GrupoAlimentario(Id)
);

CREATE TABLE PlanAlimentario (
	Id INT PRIMARY KEY NOT NULL,
    Fecha_creacion DATE NOT NULL,
    Observaciones VARCHAR(60),
    ID_Paciente INT NOT NULL,
    ID_Pediatra INT NOT NULL,
    ID_Alimento INT NOT NULL,
    FOREIGN KEY (ID_Paciente) REFERENCES Paciente(Id),
    FOREIGN KEY (ID_Pediatra) REFERENCES Pediatra(Id),
    FOREIGN KEY (ID_Alimento) REFERENCES Alimento(Id)
);
