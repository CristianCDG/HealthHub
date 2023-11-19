document.addEventListener("DOMContentLoaded", (event) => {
  var alimentoSelector = document.querySelector("#alimentoIncidenciaSelector");

  fetch("/api/v1/alimento/all")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((paciente) => {
        var pacienteOption = document.createElement("option");
        pacienteOption.value = paciente.Nombre; // Asume que el objeto paciente tiene una propiedad Apellido
        pacienteOption.textContent = paciente.Nombre;
        alimentoSelector.appendChild(pacienteOption);
      });
    })
    .catch((error) => console.error("Error:", error));
});

document
  .getElementById("regIncidencia")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const nombrePaciente = document.getElementById(
      "pacienteIncidenciaSelector"
    ).value;
    const nombreAlimento = document.getElementById(
      "alimentoIncidenciaSelector"
    ).value;
    const Descripcion = document.getElementById("descIncidencia").value;
    var [nombre, apellido] = nombrePaciente.split(" ");

    fetch(
      `/api/v1/paciente/id/${encodeURIComponent(nombre)}/${encodeURIComponent(
        apellido
      )}`
    )
      .then((response) => response.json())
      .then((idPaciente) => {
        console.log(idPaciente); // Add this line to log the idPaciente
        return fetch(
          `/api/v1/alimento/name/${encodeURIComponent(nombreAlimento)}`
        )
          .then((response) => response.json())
          .then((alimento) => {
            fetch("/api/v1/incidencia", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                Id_paciente: idPaciente, // Use idPaciente directly
                Id_Alimento: alimento.Id,
                Descripcion: Descripcion,
              }),
            })
              .then((response) => response.json())
              .then((data) => console.log(data))
              .catch((error) => console.error("Error:", error));
          });
      });
  });
