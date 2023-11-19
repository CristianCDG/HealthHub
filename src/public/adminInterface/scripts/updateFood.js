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

    submitUpdate.addEventListener('click', function() {
        var selectedFood = selectFoodToUpdate.value;
        var newFoodName = document.getElementById('updateNewFoodName').value;
        var foodGroup = document.getElementById('updateFoodGroup').value;
        var alergenic = document.getElementById('updateAlergenic').value;

        fetch('/api/v1/alimento/name/' + selectedFood)
        .then(response => response.json())
        .then(data => {
            fetch('/api/v1/alimento/' + data.Id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Nombre: newFoodName,
                    Id_GrupoAlimentario: foodGroup,
                    Alergenico: alergenic === 'true'
                }),
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
});