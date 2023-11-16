// Obtén el contenedor de alimentos
var alimentosContainer = document.querySelector(".AlimentosContainer");

// Haz una solicitud a tu API para obtener la lista de alimentos
fetch("/api/v1/alimento/all")
  .then(response => response.json())
  .then(data => {
    // Por cada alimento en la respuesta, crea un nuevo elemento DOM y añádelo al contenedor
    data.forEach(alimento => {
      var alimentoElement = document.createElement("p");
      alimentoElement.textContent = alimento.Nombre; // Cambia 'nombre' al nombre del campo que contiene el nombre del alimento

      if (alimento.Alergenico) { // Cambia 'alergenico' al nombre del campo que indica si el alimento es alergénico
        alimentoElement.classList.add('alergenico');
      } else {
        alimentoElement.classList.add('no-alergenico');
      }

      alimentosContainer.appendChild(alimentoElement);
    });
  })
  .catch(error => console.error('Error:', error));