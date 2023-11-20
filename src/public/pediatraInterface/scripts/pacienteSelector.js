document.addEventListener("DOMContentLoaded", (event) => {
  var pacienteSelector = document.querySelector("#pacienteSelector");

  let correo = localStorage.getItem('correo');
  console.log(correo)

  fetch(`/api/v1/pediatra/correo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ correo: correo }),
  })
    .then((response) => response.json())
    .then((data) => {
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
        .then((data) => {
          data.forEach((paciente) => {
            var pacienteOption = document.createElement("option");
            pacienteOption.value = paciente.Nombre + ' ' + paciente.Apellido; // Asume que el objeto paciente tiene una propiedad Apellido
            pacienteOption.textContent = paciente.Nombre + ' ' + paciente.Apellido;
            pacienteSelector.appendChild(pacienteOption);
          });
        });
    })
    .catch((error) => console.error("Error:", error));

  var pacienteSelectorFPE = document.querySelector("#pacienteSelectorFPE");
  fetch("/api/v1/paciente/all")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((paciente) => {
        var pacienteOption = document.createElement("option");
        pacienteOption.value = paciente.Nombre + ' ' + paciente.Apellido; // Asume que el objeto paciente tiene una propiedad Apellido
        pacienteOption.textContent = paciente.Nombre + ' ' + paciente.Apellido;
        pacienteSelectorFPE.appendChild(pacienteOption);
      });
    })
    .catch((error) => console.error("Error:", error));
});