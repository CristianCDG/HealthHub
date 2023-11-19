document.addEventListener("DOMContentLoaded", (event) => {
    var pacienteSelector = document.querySelector("#pacienteSelector");
  
    fetch("/api/v1/paciente/all")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((paciente) => {
          var pacienteOption = document.createElement("option");
          pacienteOption.value = paciente.Nombre + ' ' + paciente.Apellido; // Asume que el objeto paciente tiene una propiedad Apellido
          pacienteOption.textContent = paciente.Nombre + ' ' + paciente.Apellido;
          pacienteSelector.appendChild(pacienteOption);
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

      var pacienteSelectorInc = document.querySelector("#pacienteIncidenciaSelector");
      fetch("/api/v1/paciente/all")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((paciente) => {
          var pacienteOption = document.createElement("option");
          pacienteOption.value = paciente.Nombre + ' ' + paciente.Apellido; // Asume que el objeto paciente tiene una propiedad Apellido
          pacienteOption.textContent = paciente.Nombre + ' ' + paciente.Apellido;
          pacienteSelectorInc.appendChild(pacienteOption);
        });
      })
      .catch((error) => console.error("Error:", error));
  });