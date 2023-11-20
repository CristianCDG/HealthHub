function fillSelector() {
    fetch("/api/v1/grupo")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(grupos => {
            const selector = document.getElementById('groupDeletionSelector');
            selector.innerHTML = ''; // Limpiar el selector

            // Llenar el selector con los nombres de los grupos
            grupos.forEach(grupo => {
                const option = document.createElement('option');
                option.value = grupo.Nombre;
                option.text = grupo.Nombre;
                selector.appendChild(option);
            });
        })
        .catch(error => {
            console.log('There was a problem filling the selector: ' + error.message);
        });
}

document.addEventListener('DOMContentLoaded', fillSelector);

document
    .getElementById("SubmitgroupDeletion")
    .addEventListener("click", function (event) {
      event.preventDefault();

      var nombreGrupo = document.getElementById('groupDeletionSelector').value; // El valor seleccionado es el nombre del grupo

      if (!nombreGrupo) {
          console.log("Debe seleccionar un grupo para eliminar");
          return;
        }

        fetch("/api/v1/grupo/nombre/" + nombreGrupo)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(grupoId => {
        fetch("/api/v1/grupo/" + grupoId, { // Use grupoId directly
            method: "DELETE",
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log("Se ha eliminado el grupo alimenticio correctamente");
            // Actualizar el selector después de la eliminación
            fillSelector();
        })
        .catch((error) => {
            console.log(
                "There was a problem with the fetch operation: " + error.message
            );
        });
    })
    .catch(error => {
        console.log('There was a problem getting the group ID: ' + error.message);
    });
      });