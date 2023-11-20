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
            pacienteSelectorFPE.appendChild(pacienteOption);
          });
        });
    })
    .catch((error) => console.error("Error:", error));

  var pacienteSelectorInc = document.querySelector("#pacienteIncidenciaSelector");
  fetch(`/api/v1/acudiente/correo`, {
    method: 'POST',
    body: JSON.stringify({ correo: correo }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      const Id = data[0].Id;
      fetch(`/api/v1/paciente/acu/${Id}`, {
        method: 'POST',
      })
        .then((response) => response.json())
        .then((pacientes) => {
          pacientes.forEach((paciente) => {
            var pacienteOption = document.createElement("option");
            pacienteOption.value = paciente.Id;
            pacienteOption.textContent = paciente.Nombre + ' ' + paciente.Apellido;
            pacienteSelectorInc.appendChild(pacienteOption);
          });
        })
    })
    .catch((error) => console.error("Error:", error));

  var pacienteSelectorViewInc = document.querySelector("#pacienteIncidenciaViewSelector");
  fetch(`/api/v1/acudiente/correo`, {
    method: 'POST',
    body: JSON.stringify({ correo: correo }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      const Id = data[0].Id;
      fetch(`/api/v1/paciente/acu/${Id}`, {
        method: 'POST',
      })
        .then((response) => response.json())
        .then((pacientes) => {
          pacientes.forEach((paciente) => {
            var pacienteOption = document.createElement("option");
            pacienteOption.value = paciente.Id;
            pacienteOption.textContent = paciente.Nombre + ' ' + paciente.Apellido;
            pacienteSelectorViewInc.appendChild(pacienteOption);
          });
        })
    })
    .catch((error) => console.error("Error:", error));

  var pacienteIncidenciaSelector = document.querySelector("#pacienteIncidenciaSelector");
  fetch("/api/v1/paciente/all")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((paciente) => {
        var pacienteOption = document.createElement("option");
        pacienteOption.value = paciente.Nombre + ' ' + paciente.Apellido; // Asume que el objeto paciente tiene una propiedad Apellido
        pacienteOption.textContent = paciente.Nombre + ' ' + paciente.Apellido;
        pacienteIncidenciaSelector.appendChild(pacienteOption);
      });
    })
    .catch((error) => console.error("Error:", error));


    var pacienteIncidenciaViewSelector = document.querySelector("#pacienteIncidenciaViewSelector");
    fetch("/api/v1/paciente/all")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((paciente) => {
          var pacienteOption = document.createElement("option");
          pacienteOption.value = paciente.Nombre + ' ' + paciente.Apellido; // Asume que el objeto paciente tiene una propiedad Apellido
          pacienteOption.textContent = paciente.Nombre + ' ' + paciente.Apellido;
          pacienteIncidenciaViewSelector.appendChild(pacienteOption);
        });
      })
      .catch((error) => console.error("Error:", error));
});