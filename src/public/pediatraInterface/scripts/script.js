const btnCrearPaciente = document.getElementById("btnCrear");
const btnActualizar = document.getElementById('btnActualizar')

const btnConsultarTodos = document.getElementById('btnConsultarTodos')
const btnEliminar = document.getElementById('btnEliminar')

// Ids unicos
const idActualizar = document.getElementById("id_actualizar");
const idConsultar = document.getElementById("id_consultar");
const idEliminar = document.getElementById("id_eliminar");

// Botones sidebar
document.querySelector(".btnRegisterShow").addEventListener("click", function () {
  document.querySelector(".crearPaciente").style.left = "32%";
  document.querySelector(".actualizarPaciente").style.left = "-100%";
  document.querySelector(".consultarPacientes").style.left = "-100%";
  document.querySelector(".PlanAlimentarioContainer").style.left = "-100%";
  document.querySelector(".AlimentosContainer").style.left = "-100%";
  document.querySelector('.foodPlanEditorContainer').style.left = '-100%';
  document.querySelector('.regIncidenciaContainer').style.left = '-100%';
  document.querySelector('.seeIncidenciasContainer').style.left = '-100%';
});

document.querySelector(".btnActualizarShow").addEventListener("click", function () {
  document.querySelector(".crearPaciente").style.left = "-100%";
  document.querySelector(".actualizarPaciente").style.left = "32%";
  document.querySelector(".consultarPacientes").style.left = "-100%";
  document.querySelector(".PlanAlimentarioContainer").style.left = "-100%";
  document.querySelector(".AlimentosContainer").style.left = "-100%";
  document.querySelector('.foodPlanEditorContainer').style.left = '-100%';
  document.querySelector('.regIncidenciaContainer').style.left = '-100%';
  document.querySelector('.seeIncidenciasContainer').style.left = '-100%';
});

document.querySelector(".btnConsultarShow").addEventListener("click", function () {
  document.querySelector(".crearPaciente").style.left = "-100%";
  document.querySelector(".actualizarPaciente").style.left = "-100%";
  document.querySelector(".consultarPacientes").style.left = "22%";
  document.querySelector(".PlanAlimentarioContainer").style.left = "-100%";
  document.querySelector(".AlimentosContainer").style.left = "-100%";
  document.querySelector('.foodPlanEditorContainer').style.left = '-100%';
  document.querySelector('.regIncidenciaContainer').style.left = '-100%';
  document.querySelector('.seeIncidenciasContainer').style.left = '-100%';
});

document.querySelector(".btnCrearPlan").addEventListener("click", function () {
  document.querySelector(".crearPaciente").style.left = "-100%";
  document.querySelector(".actualizarPaciente").style.left = "-100%";
  document.querySelector(".consultarPacientes").style.left = "-100%";
  document.querySelector(".PlanAlimentarioContainer").style.left = "28%";
  document.querySelector(".AlimentosContainer").style.left = "80%";
  document.querySelector('.foodPlanEditorContainer').style.left = '-100%';
  document.querySelector('.regIncidenciaContainer').style.left = '-100%';
  document.querySelector('.seeIncidenciasContainer').style.left = '-100%';
});

document.querySelector('.btnEditorPlan').addEventListener("click", function () {
  document.querySelector(".crearPaciente").style.left = "-100%";
  document.querySelector(".actualizarPaciente").style.left = "-100%";
  document.querySelector(".consultarPacientes").style.left = "-100%";
  document.querySelector(".PlanAlimentarioContainer").style.left = "-100%";
  document.querySelector(".AlimentosContainer").style.left = "-100%";
  document.querySelector('.foodPlanEditorContainer').style.left = '34%';
  document.querySelector('.regIncidenciaContainer').style.left = '-100%';
  document.querySelector('.seeIncidenciasContainer').style.left = '-100%';
});

document.querySelector('.btnRegistrarIncidencia').addEventListener("click", function () {
  document.querySelector(".crearPaciente").style.left = "-100%";
  document.querySelector(".actualizarPaciente").style.left = "-100%";
  document.querySelector(".consultarPacientes").style.left = "-100%";
  document.querySelector(".PlanAlimentarioContainer").style.left = "-100%";
  document.querySelector(".AlimentosContainer").style.left = "-100%";
  document.querySelector('.foodPlanEditorContainer').style.left = '-100%';
  document.querySelector('.seeIncidenciasContainer').style.left = '34%';
});

document.querySelector('.btnIncidencias').addEventListener("click", function () {
  document.querySelector(".crearPaciente").style.left = "-100%";
  document.querySelector(".actualizarPaciente").style.left = "-100%";
  document.querySelector(".consultarPacientes").style.left = "-100%";
  document.querySelector(".PlanAlimentarioContainer").style.left = "-100%";
  document.querySelector(".AlimentosContainer").style.left = "-100%";
  document.querySelector('.foodPlanEditorContainer').style.left = '-100%';
  document.querySelector('.seeIncidenciasContainer').style.left = '-100%';
  document.querySelector('.seeIncidenciasContainer').style.left = '34%';
});

document.getElementById('borrar').addEventListener('click', function () {
  // Selecciona el cuerpo de la tabla
  var tbody = document.querySelector('.table-container table tbody');

  // Borra todas las filas existentes
  tbody.innerHTML = '';

  idConsultar.value = '';
});

btnCrearPaciente.addEventListener("click", (event) => {
  event.preventDefault();
  crearPaciente();
});

btnActualizar.addEventListener("click", (event) => {
  event.preventDefault();
  const Nombre = document.getElementById("nombre_a").value;
  const Apellido = document.getElementById("apellido_a").value;
  const Fecha_nacimiento = document.getElementById("fecha_nacimiento_a").value;
  const Direccion = document.getElementById("direccion_a").value;
  const Genero = document.getElementById("genero_a").value;
  const Peso = document.getElementById("peso_a").value;
  const Altura = document.getElementById("altura_a").value;
  const Estado = document.getElementById("estado_a").value;

  const nuevosDatos = {
    Nombre: Nombre,
    Apellido: Apellido,
    Fecha_nacimiento: Fecha_nacimiento,
    Direccion: Direccion,
    Genero: Genero,
    Peso: Peso,
    Altura: Altura,
    Estado: Estado,
  };

  actualizarPaciente(idActualizar.value, nuevosDatos);
});

btnConsultarTodos.addEventListener('click', (event) => {
  event.preventDefault();
  consultarTodosPacientes();
});

// btnEliminar.addEventListener('click', (event) => {
//   event.preventDefault();
//   const id = idEliminar.value;
//   eliminarPaciente(id);
// });

function crearPaciente() {
  const Nombre = document.getElementById("nombre").value;
  const Apellido = document.getElementById("apellido").value;
  const Fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
  const Direccion = document.getElementById("direccion").value;
  const Genero = document.getElementById("genero").value;
  const Peso = document.getElementById("peso").value;
  const Altura = document.getElementById("altura").value;
  const Estado = document.getElementById("estado").value;
  const Id_acudiente = document.getElementById("selectAcudiente").value;

  if (!Nombre || !Apellido || !Fecha_nacimiento || !Direccion || !Genero || !Peso || !Altura || !Estado) {
    console.log('Todos los campos deben estar llenos');
    mostrarErrorCampoVacio();
    return;
  }

  let correo = localStorage.getItem('correo');
  console.log(correo)

  fetch(`/api/v1/pediatra/correo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ correo: correo }),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const Id_pediatra = data[0].Id;

      let paciente = {
        Nombre: Nombre,
        Apellido: Apellido,
        Fecha_nacimiento: Fecha_nacimiento,
        Direccion: Direccion,
        Genero: Genero,
        Peso: Peso,
        Altura: Altura,
        Estado: Estado,
        Id_pediatra: Id_pediatra
      };

      let pacienteJSON = JSON.stringify(paciente);

      console.log(pacienteJSON);

      fetch('/api/v1/paciente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: pacienteJSON,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log('El registro se ha creado con éxito')
          mostrarRegistroExitoso();
          document.getElementById('nombre').value = '';
          document.getElementById('apellido').value = '';
          document.getElementById('fecha_nacimiento').value = '';
          document.getElementById('direccion').value = '';
          document.getElementById('genero').value = '';
          document.getElementById('peso').value = '';
          document.getElementById('altura').value = '';
          document.getElementById('estado').value = '';

          let asignacion = {
            Id_Acudiente: Id_acudiente,
            Id_paciente: data.Id, // Asume que tu API devuelve el Id del paciente creado
            Rol: 'Cuidador' // O cualquier valor que necesites
          };

          fetch('/api/v1/asignacion_acudiente', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(asignacion),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              return response.json();
            })
            .then((data) => {
              console.log('La asignación del acudiente se ha creado con éxito')
              // Aquí puedes limpiar los campos del formulario si lo deseas
            })
            .catch((error) => {
              console.error('Error:', error);
              output.value = 'Ocurrió un error mientras se añadía la asignación del acudiente, por favor verifique los datos ingresados';
            });
        })
    })
    .catch((error) => {
      console.error('Error:', error);
      output.value = 'Ocurrió un error mientras se añadía el paciente, por favor verifique los datos ingresados';
    });
}

function actualizarPaciente(Id, nuevosDatos) {
  if (!Id || !nuevosDatos.Nombre || !nuevosDatos.Apellido || !nuevosDatos.Fecha_nacimiento || !nuevosDatos.Direccion || !nuevosDatos.Genero || !nuevosDatos.Peso || !nuevosDatos.Altura || !nuevosDatos.Estado) {
    console.log('Todos los campos deben estar llenos');
    mostrarErrorCampoVacio();
    return;
  }
  // Validar si el ID ya existe
  validarID(Id)
    .then((existe) => {
      if (!existe) {
        console.log(`El ID ${Id} no existe en la base de datos`);
        mostrarErrorNoIdPaciente();
        return;
      }
    })

  fetch(`/api/v1/paciente/${Id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(nuevosDatos),
  }).then((response) => {
    if (response.ok) {
      // La actualización fue exitosa, puedes mostrar un mensaje de éxito.
      console.log("Paciente actualizado con éxito");
      mostrarActualizacionExitosa();
    } else {
      // La actualización no fue exitosa, manejar el error.
      console.error("Error al actualizar el Paciente");
    }
  })
    .catch((error) => {
      // Manejar errores, como mostrar un mensaje de error.
      console.error("Error al enviar la solicitud de actualización:", error);
    });
}

function consultarTodosPacientes() {
  let correo = localStorage.getItem('correo');
  console.log(correo)

  fetch(`/api/v1/pediatra/correo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ correo: correo }),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const Id = data[0].Id;

      fetch(`/api/v1/paciente/all/${Id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(pacientes => {
          // Selecciona el cuerpo de la tabla
          var tbody = document.querySelector('.table-container table tbody');

          // Borra todas las filas existentes
          tbody.innerHTML = '';

          // Crea una nueva fila para cada paciente
          pacientes.forEach(paciente => {
            var tr = document.createElement('tr');
            tr.innerHTML = `
          <td>${paciente.Id}</td>
          <td>${paciente.Nombre}</td>
          <td>${paciente.Apellido}</td>
          <td>${new Date(paciente.Fecha_nacimiento).toISOString().slice(0, 10)}</td>
          <td>${paciente.Direccion}</td>
          <td>${paciente.Genero}</td>
          <td>${paciente.Peso}</td>
          <td>${paciente.Altura}</td>
          <td>${paciente.Estado}</td>
        `;

            // Añade la fila al cuerpo de la tabla
            tbody.appendChild(tr);
          });
        })
        .catch(error => {
          console.error('Error:', error);
        });

    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

//Funciones Extras
function validarID(Id) {
  return fetch(`/api/v1/paciente/${Id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.status === 404) {
        // Paciente no encontrado, retornar false
        return false;
      }
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Si se encuentra un paciente con el ID, retornar true
      if (data === false) {
        return;
      }
      return data ? true : false;
    })
    .catch((error) => {
      // Manejar errores de la solicitud HTTP y de la conversión de JSON
      console.error('Error:', error);
      output.value = 'Ocurrió un error mientras se añadía el Paciente, por favor verifique los datos ingresados';
    });
}

// Validaciones interfaces

// Campo vacio
function mostrarErrorCampoVacio() {
  var errorMessage = document.getElementById("v-campo-vacio");
  errorMessage.classList.add("show");

  // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
  setTimeout(function () {
    errorMessage.classList.remove("show");
  }, 10000); // 3000 milisegundos (3 segundos)
}

function mostrarErrorLongitudId() {
  var errorMessage = document.getElementById("v-id-caracteres");
  errorMessage.classList.add("show");

  // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
  setTimeout(function () {
    errorMessage.classList.remove("show");
  }, 10000); // 3000 milisegundos (3 segundos)
}

// ID del paciente ya existe
function mostrarErrorIdPaciente() {
  var errorMessage = document.getElementById("v-id-existe-paciente");
  errorMessage.classList.add("show");

  // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
  setTimeout(function () {
    errorMessage.classList.remove("show");
  }, 10000); // 3000 milisegundos (3 segundos)
}

// Id del paciente no existe
function mostrarErrorNoIdPaciente() {
  var errorMessage = document.getElementById("v-id-no-existe-paciente");
  errorMessage.classList.add("show");

  // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
  setTimeout(function () {
    errorMessage.classList.remove("show");
  }, 10000); // 3000 milisegundos (3 segundos)
}

// ID del pediatra no existe
function mostrarErrorIdPediatra() {
  var errorMessage = document.getElementById("v-id-no-existe-pediatra");
  errorMessage.classList.add("show");

  // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
  setTimeout(function () {
    errorMessage.classList.remove("show");
  }, 10000); // 3000 milisegundos (3 segundos)
}

function mostrarErrorCampoVacioConsultar() {
  var errorMessage = document.getElementById("v-campo-vacio-consultar");
  errorMessage.classList.add("show");

  // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
  setTimeout(function () {
    errorMessage.classList.remove("show");
  }, 10000); // 3000 milisegundos (3 segundos)
}

function mostrarRegistroExitoso() {
  var goodMessage = document.getElementById("goodRegistration");
  goodMessage.classList.add("show");

  // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
  setTimeout(function () {
    goodMessage.classList.remove("show");
  }, 10000); // 3000 milisegundos (3 segundos)
}

function mostrarActualizacionExitosa() {
  var goodUpdate = document.getElementById("goodUpdate");
  goodUpdate.classList.add("show");

  // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
  setTimeout(function () {
    goodUpdate.classList.remove("show");
  }, 10000); // 3000 milisegundos (3 segundos)
}