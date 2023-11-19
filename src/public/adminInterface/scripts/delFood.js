document.addEventListener('DOMContentLoaded', function() {
    var foodDeletionSelector = document.getElementById('foodDeletionSelector');
    var submitButton = document.getElementById('SubmitfoodDeletion');

    function fillSelector() {
        foodDeletionSelector.innerHTML = ''; // Clear the selector
        fetch('/api/v1/alimento/all')
        .then(response => response.json())
        .then(alimentos => {
            for (var alimento of alimentos) {
                var optionElement = document.createElement('option');
                optionElement.textContent = alimento.Nombre;
                optionElement.value = alimento.Nombre;
                foodDeletionSelector.appendChild(optionElement);
            }
        });
    }

    submitButton.addEventListener('click', function() {
        var selectedFood = document.getElementById('foodDeletionSelector').value;
        fetch('/api/v1/alimento/name/' + selectedFood)
        .then(response => response.json())
        .then(data => {
            fetch('/api/v1/alimento/' + data.Id, {
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                fillSelector(); // Refill the selector after deleting an item
            })
            .catch(error => console.error('Error:', error));
        })
        .catch(error => console.error('Error:', error));
    });

    fillSelector(); // Fill the selector on page load
});