// Botones
const btnRegistrar = document.getElementById('btnRegistrar');
const btnActualizar = document.getElementById('btnActualizar');
const btnBuscar = document.getElementById('btnBuscar');
const btnEliminar = document.getElementById('btnEliminar');

const idBuscar = document.getElementById('idBuscar');

btnRegistrar.addEventListener('click', registrarPaciente);
btnActualizar.addEventListener('click', actualizarPaciente);
btnBuscar.addEventListener('click', () => {
  const id = idBuscar.value;
  buscarPaciente(id);
});
btnEliminar.addEventListener('click', eliminarPaciente);

function registrarPaciente() {
  let Id = document.getElementById('Id');
  let Nombre_completo = document.getElementById('Nombre_completo');
  let Fecha_nacimiento = document.getElementById('Fecha_nacimiento');
  let Direccion = document.getElementById('Direccion');
  let Genero = document.getElementById('Genero');
  let Peso = document.getElementById('Peso');
  let Altura = document.getElementById('Altura');
  let Estado = document.getElementById('Estado');
  let Id_pediatra = document.getElementById('Id_pediatra');

  let paciente = {
    Id: Id.value,
    Nombre_completo: Nombre_completo.value,
    Fecha_nacimiento: Fecha_nacimiento.value,
    Direccion: Direccion.value,
    Genero: Genero.value,
    Peso: Peso.value,
    Altura: Altura.value,
    Estado: Estado.value,
    Id_pediatra: Id_pediatra.value,
  };

  let pacienteJSON = JSON.stringify(paciente);

  console.log(pacienteJSON);

  output.value = 'El paciente se ha añadido con exito a la base de datos';

  fetch('http://localhost:3000/api/v1/paciente', {
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
      // Aquí puedes mostrar el mensaje de éxito
      const registroExitoso = document.getElementById('registroExitoso');
      registroExitoso.classList.remove('hidden-message');
      registroExitoso.textContent = 'Paciente registrado exitosamente.';

      // También puedes reiniciar el formulario o realizar otras acciones si es necesario
      const formulario = document.querySelector('form');
      formulario.reset();

      Id.value = '';
      Nombre_completo.value = '';
      Fecha_nacimiento.value = '';
      Direccion.value = '';
      Genero.value = '';
      Peso.value = '';
      Altura.value = '';
      Estado.value = '';
      Id_pediatra.value = '';
    })
    .catch((error) => {
      // Manejar errores de la solicitud HTTP
      console.error('Error al enviar la solicitud POST:', error);
    })
    .catch((error) => {
      // Manejar errores de la conversión de JSON
      console.error('Error al convertir la respuesta en JSON:', error);
      output.value =
        'Ocurrió un error mientras se añadía el alimento, por favor verifique los datos ingresados';
    });
}

// function actualizarPaciente() {}

function buscarPaciente(id) {
  fetch(`http://localhost:3000/api/v1/paciente/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Aquí puedes mostrar los datos del paciente encontrado
      const observaciones = document.getElementById('observaciones');
      observaciones.value = JSON.stringify(data);

      // También puedes mostrar un mensaje de éxito
      const buscadoExitoso = document.getElementById('buscadoExitoso');
      buscadoExitoso.classList.remove('hidden-message');
      buscadoExitoso.textContent = 'Paciente encontrado exitosamente.';
    })
    .catch((error) => {
      // Manejar errores de la solicitud HTTP
      console.error('Error al consultar el paciente por ID:', error);
    });
}

// function eliminarPaciente() {}
