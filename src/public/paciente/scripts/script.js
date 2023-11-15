const btnCrearPaciente = document.getElementById("btnCrear");
const btnActualizar = document.getElementById('btnActualizar')
const btnEliminar = document.getElementById('btnEliminar')

// Ids unicos
const idActualizar = document.getElementById("id_actualizar");
const idEliminar = document.getElementById("id_eliminar");

btnCrearPaciente.addEventListener("click", (event) => {
  event.preventDefault();
  crearPaciente();
});

btnActualizar.addEventListener("click", (event) => {
  event.preventDefault();
  const nombre = document.getElementById("nombre_actualizar").value;
  const apellido = document.getElementById("apellido_actualizar").value;
  const fecha_nacimiento = document.getElementById("fecha_nacimiento_actualizar").value;
  const direccion = document.getElementById("direccion_actualizar").value;
  const genero = document.getElementById("genero_actualizar").value;
  const peso = document.getElementById("peso_actualizar").value;
  const altura = document.getElementById("altura_actualizar").value;
  const estado = document.getElementById("estado_actualizar").value;

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

btnEliminar.addEventListener('click', (event) => {
  event.preventDefault();
  const id = idEliminar.value;
  eliminarPaciente(id);
});

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
    return;
  }

  // Validar si el ID ya existe
  validarID(id)
    .then((existe) => {
      if (existe) {
        console.log('El ID ya existe en la base de datos');
        return;
      }

      // Continuar con la creación del paciente si el ID no existe
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
        })
        .catch((error) => {
          console.error('Error:', error);
          output.value = 'Ocurrió un error mientras se añadía el paciente, por favor verifique los datos ingresados';
        });
    })
    .catch((error) => {
      console.error('Error al validar el ID:', error);
    });
}

function actualizarPaciente(id, nuevosDatos) {
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
    } else {
      // La actualización no fue exitosa, manejar el error.
      console.error("Error al actualizar el Paciente");
    }
  })
    .then((data) => {
      console.log('El paciente se ha actualizado con éxito')
    })
    .catch((error) => {
      // Manejar errores, como mostrar un mensaje de error.
      console.error("Error al enviar la solicitud de actualización:", error);
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
  return fetch(`/ api / v1 / paciente / ${id}`, {
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
