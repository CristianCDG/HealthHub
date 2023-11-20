document.getElementById('pacienteIncidenciaViewSelector').addEventListener('change', function () {
  var nombreApellido = this.value.split(' '); // Assuming the value is 'nombre apellido'
  var nombre = nombreApellido[0];
  var apellido = nombreApellido[1];

  fetch(`/api/v1/paciente/id/${encodeURIComponent(nombre)}/${encodeURIComponent(apellido)}`)
    .then(response => response.json())
    .then(paciente => {
      var idPaciente = paciente.ID; // Change this line
      return fetch(`/api/v1/incidencia/paciente/${encodeURIComponent(idPaciente)}`); // Change this line
    })
    .then(response => response.json())
    .then(incidencias => {
      var incidenciasViewer = document.getElementById('incidenciasViewer');
      incidenciasViewer.innerHTML = ''; // Clear the incidenciasViewer

      for (var incidencia of incidencias) {
        var incidenciaElement = document.createElement('div');
        incidenciaElement.textContent = incidencia.Descripcion; // Replace this with the actual property name
        incidenciaElement.style.marginBottom = '10px'; // Add a line of space between each incidencia
        incidenciaElement.style.textAlign = 'center'; // Center the text in the div
        incidenciasViewer.appendChild(incidenciaElement);
      }
    });
});