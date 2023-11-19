document.addEventListener('DOMContentLoaded', function() {
    var alimentoVisualizer = document.getElementsByClassName('alimentoVisualizer')[0];
    var refreshButton = document.getElementById('refresh');

    function refreshAlimentos() {
        alimentoVisualizer.innerHTML = ''; // Clear the visualizer
        fetch('/api/v1/alimento/all')
        .then(response => response.json())
        .then(alimentos => {
            for (var alimento of alimentos) {
                var alimentoElement = document.createElement('p');
                alimentoElement.textContent = alimento.Nombre;
                alimentoElement.className = 'alimento'; // Add a class to each alimento
                alimentoVisualizer.appendChild(alimentoElement);
            }
        });
    }

    refreshButton.addEventListener('click', refreshAlimentos);

    refreshAlimentos(); // Refresh alimentos on page load
});