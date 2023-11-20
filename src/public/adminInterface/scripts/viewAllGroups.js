document.addEventListener('DOMContentLoaded', function() {
    var grupoVisualizer = document.getElementsByClassName('grupoVisualizer')[0];
    var refreshButton = document.getElementById('refreshGroup');

    function refreshGrupos() {
        grupoVisualizer.innerHTML = ''; // Clear the visualizer
        fetch('/api/v1/grupo')
        .then(response => response.json())
        .then(grupos => {
            console.log(grupos);
            for (var key in grupos) {
                if (grupos.hasOwnProperty(key)) {
                    var grupo = grupos[key];
                    var grupoElement = document.createElement('p');
                    grupoElement.textContent = grupo.Nombre;
                    grupoElement.className = 'grupo'; // Add a class to each grupo
                    grupoVisualizer.appendChild(grupoElement);
                }
            }
        });
    }

    refreshButton.addEventListener('click', refreshGrupos);

    refreshGrupos(); // Refresh grupos on page load
});