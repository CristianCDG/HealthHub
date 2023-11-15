const btnCrearPaciente = document.getElementById("btnCrear");

btnCrearPaciente.addEventListener("click", () => {
  event.preventDefault();
  crearPaciente();
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

  if (!id || !nombre || !apellido || !fecha_nacimiento || !direccion || !genero
    || !peso || !altura || !estado || !id_pediatra) {
    console.log('Todos los campos deben estar llenos');
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

  fetch('http://localhost:3000/api/v1/paciente', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: pacienteJSON,
  })
    .then((response) => {
      if (!response.ok) {
        return response.text().then((text) => {
          // Lanza un error con el mensaje de error del servidor, si está disponible
          throw new Error(text || `HTTP error! status: ${response.status}`);
        });
      }
      return response.json();
    })
    .then((data) => {
      console.log('El paciente se ha creado con éxito')
    })
    .catch((error) => {
      // Manejar errores de la solicitud HTTP y de la conversión de JSON
      console.error('Error:', error);
    });
}