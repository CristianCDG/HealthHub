const btnCrearPaciente = document.getElementById("btnCrear");
const btnActualizar = document.getElementById('btnActualizar')

const btnConsultarUno = document.getElementById('btnConsultar')
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
});

document.querySelector(".btnActualizarShow").addEventListener("click", function () {
  document.querySelector(".crearPaciente").style.left = "-100%";
  document.querySelector(".actualizarPaciente").style.left = "32%";
  document.querySelector(".consultarPacientes").style.left = "-100%";
});

document.querySelector(".btnConsultarShow").addEventListener("click", function () {
  document.querySelector(".crearPaciente").style.left = "-100%";
  document.querySelector(".actualizarPaciente").style.left = "-100%";
  document.querySelector(".consultarPacientes").style.left = "22%";
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
  const nombre = document.getElementById("nombre_a").value;
  const apellido = document.getElementById("apellido_a").value;
  const fecha_nacimiento = document.getElementById("fecha_nacimiento_a").value;
  const direccion = document.getElementById("direccion_a").value;
  const genero = document.getElementById("genero_a").value;
  const peso = document.getElementById("peso_a").value;
  const altura = document.getElementById("altura_a").value;
  const estado = document.getElementById("estado_a").value;

  const nuevosDatos = {
    nombre: nombre,
    apellido: apellido,
    fecha_nacimiento: fecha_nacimiento,
    direccion: direccion,
    genero: genero,
    peso: peso,
    altura: altura,
    estado: estado,
  };

  actualizarPaciente(idActualizar.value, nuevosDatos);
});

btnConsultarUno.addEventListener('click', (event) => {
  event.preventDefault();
  const id = idConsultar.value;
  consultarUnPaciente(id);
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
  const id = document.getElementById("id").value;
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
  const direccion = document.getElementById("direccion").value;
  const genero = document.getElementById("genero").value;
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  const estado = document.getElementById("estado").value;
  const id_pediatra = document.getElementById("id_pediatra").value;

  if (!id || !nombre || !apellido || !fecha_nacimiento || !direccion || !genero || !peso || !altura || !estado || !id_pediatra) {
    console.log('Todos los campos deben estar llenos');
    mostrarErrorCampoVacio();
    return;
  }

  if (id.length > 12) {
    console.log('El ID no puede exceder los 12 caracteres');
    mostrarErrorLongitudId();
    return;
  }

  // Validar si el ID ya existe
  validarID(id)
    .then((existe) => {
      if (existe) {
        console.log(`El ID ${id} ya existe en la base de datos`);
        mostrarErrorIdPaciente();
        return;
      }

      // Validar si el ID del pediatra existe
      validarPediatraID(id_pediatra)
        .then((existe) => {
          if (!existe) {
            console.log(`El pediatra al que se quiere registrar con ID ${id_pediatra} no existe`);
            mostrarErrorIdPediatra();
            return;
          }

          let paciente = {
            id: id,
            nombre: nombre,
            apellido: apellido,
            fecha_nacimiento: fecha_nacimiento,
            direccion: direccion,
            genero: genero,
            peso: peso,
            altura: altura,
            estado: estado,
            id_pediatra: id_pediatra,
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
              document.getElementById('id').value = '';
              document.getElementById('nombre').value = '';
              document.getElementById('apellido').value = '';
              document.getElementById('fecha_nacimiento').value = '';
              document.getElementById('direccion').value = '';
              document.getElementById('genero').value = '';
              document.getElementById('peso').value = '';
              document.getElementById('altura').value = '';
              document.getElementById('estado').value = '';
              document.getElementById('id_pediatra').value = '';
            })
            .catch((error) => {
              console.error('Error:', error);
              output.value = 'Ocurrió un error mientras se añadía el paciente, por favor verifique los datos ingresados';
            });
        })
    })
    .catch((error) => {
      console.error('Error al validar el ID:', error);
    });
}

function actualizarPaciente(id, nuevosDatos) {
  if (!id || !nombre || !apellido || !fecha_nacimiento || !direccion || !genero || !peso || !altura || !estado) {
    console.log('Todos los campos deben estar llenos');
    mostrarErrorCampoVacio();
    return;
  }
  // Validar si el ID ya existe
  validarID(id)
    .then((existe) => {
      if (!existe) {
        console.log(`El ID ${id} no existe en la base de datos`);
        mostrarErrorNoIdPaciente();
        return;
      }
    })

  fetch(`/api/v1/paciente/${id}`, {
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

function consultarUnPaciente(id) {
  if (!id) {
    console.log('Todos los campos deben estar llenos');
    mostrarErrorCampoVacioConsultar();
    return;
  }

  fetch(`/api/v1/paciente/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.status === 404) {
        mostrarErrorNoIdPaciente();
        // Selecciona el cuerpo de la tabla
        var tbody = document.querySelector('.table-container table tbody');

        // Borra todas las filas
        tbody.innerHTML = '';

        throw new Error(`Paciente no encontrado: ID ${id}`);
      }
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(paciente => {
      // Selecciona el cuerpo de la tabla
      var tbody = document.querySelector('.table-container table tbody');

      tbody.innerHTML = '';

      // Crea una nueva fila
      var tr = document.createElement('tr');

      // Crea y añade las celdas a la fila
      tr.innerHTML = `
        <td>${paciente.id}</td>
        <td>${paciente.nombre}</td>
        <td>${paciente.apellido}</td>
        <td>${new Date(paciente.fecha_nacimiento).toISOString().slice(0, 10)}</td>
        <td>${paciente.direccion}</td>
        <td>${paciente.genero}</td>
        <td>${paciente.peso}</td>
        <td>${paciente.altura}</td>
        <td>${paciente.estado}</td>
        <td>${paciente.id_pediatra}</td>
      `;

      // Añade la fila al cuerpo de la tabla
      tbody.appendChild(tr);
    })
    .catch((error) => {
      // Manejar errores de la solicitud HTTP y de la conversión de JSON
      console.error('Error:', error);
      output.value = 'Ocurrió un error mientras se añadía el Paciente, por favor verifique los datos ingresados';
    });
}

function consultarTodosPacientes() {
  fetch(`/api/v1/paciente/all`, {
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
        <td>${paciente.id}</td>
        <td>${paciente.nombre}</td>
        <td>${paciente.apellido}</td>
        <td>${new Date(paciente.fecha_nacimiento).toISOString().slice(0, 10)}</td>
        <td>${paciente.direccion}</td>
        <td>${paciente.genero}</td>
        <td>${paciente.peso}</td>
        <td>${paciente.altura}</td>
        <td>${paciente.estado}</td>
        <td>${paciente.id_pediatra}</td>
      `;

        // Añade la fila al cuerpo de la tabla
        tbody.appendChild(tr);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function eliminarPaciente(id) {
  fetch(`/api/v1/paciente/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((response) => {
      if (response.ok) {
        // La eliminación fue exitosa, puedes mostrar un mensaje de éxito.
        console.log("Paciente eliminado con éxito");
      } else {
        // La eliminación no fue exitosa, manejar el error.
        console.error("Error al eliminar el Paciente");
      }
    })
    .catch((error) => {
      // Manejar errores, como mostrar un mensaje de error.
      console.error("Error al enviar la solicitud DELETE:", error);
    });
};

//Funciones Extras
function validarID(id) {
  return fetch(`/api/v1/paciente/${id}`, {
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

function validarPediatraID(id) {
  return fetch(`/api/v1/pediatra/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.status === 404) {
        // El pediatra no existe, retornar false
        return false;
      }
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return true; // El pediatra existe, retornar true 
    })
    .then((data) => {
      // Si se encuentra un pediatra con el ID, retornar true
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
