document.addEventListener('DOMContentLoaded', function() {
    var selectFoodToUpdate = document.getElementById('selectFoodToUpdate');
    var submitUpdate = document.getElementById('submitUpdate');

    function fillUpdateSelector() {
        selectFoodToUpdate.innerHTML = ''; // Clear the selector
        fetch('/api/v1/alimento/all')
        .then(response => response.json())
        .then(alimentos => {
            for (var alimento of alimentos) {
                var optionElement = document.createElement('option');
                optionElement.textContent = alimento.Nombre;
                optionElement.value = alimento.Nombre;
                selectFoodToUpdate.appendChild(optionElement);
            }
        });
    }

    function fillGroupSelector() {
        var groupSelector = document.getElementById("updateFoodGroup");
        groupSelector.innerHTML = ""; // Clear the selector
        fetch("/api/v1/grupo")
          .then((response) => response.json())
          .then((grupos) => {
            for (var grupo of grupos) {
              var optionElement = document.createElement("option");
              optionElement.textContent = grupo.Nombre;
              optionElement.value = grupo.Nombre;
              groupSelector.appendChild(optionElement);
            }
          });
      }
      

    document
    .getElementById("updateFoodBtn")
    .addEventListener("click", function (event) {
      event.preventDefault();
      fillUpdateSelector(); // Refill the selector after deleting an item
      fillGroupSelector();
    });

    submitUpdate.addEventListener('click', function() {
        var selectedFood = selectFoodToUpdate.value;
        var newFoodName = document.getElementById('updateNewFoodName').value;
        var foodGroup = document.getElementById('updateFoodGroup').value;
        var alergenic = document.getElementById('updateAlergenic').value;

        if (!selectedFood || !foodGroup) {
            console.log('Por favor, selecciona un alimento y un grupo.');
            // Aquí puedes agregar la función para mostrar un mensaje de error
            return;
        }

        fetch('/api/v1/grupo/nombre/' + foodGroup)
        .then(response => response.text())
        .then(grupoId => {
            if (!grupoId) {
                throw new Error('Id de grupo no encontrado');
            }
            return fetch('/api/v1/alimento/name/' + selectedFood)
            .then(response => response.json())
            .then(data => {
                return fetch('/api/v1/alimento/' + data.Id, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        Nombre: newFoodName,
                        Id_GrupoAlimentario: grupoId,
                        Alergenico: alergenic === 'true'
                    }),
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                fillUpdateSelector(); // Refill the selector after updating an item
            })
            .catch(error => console.error('Error:', error));
        })
        .catch(error => console.error('Error:', error));
    });

    fillUpdateSelector(); // Fill the selector on page load
    fillGroupSelector();
});