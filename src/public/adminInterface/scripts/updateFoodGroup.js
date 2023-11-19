document.addEventListener('DOMContentLoaded', (event) => {
    fetch("/api/v1/grupo")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const select = document.getElementById('foodGroupUpdate');
            data.forEach(grupo => {
                const option = document.createElement('option');
                option.value = grupo.ID; // El valor es el ID del grupo
                option.text = grupo.Nombre; // El texto es el nombre del grupo
                select.add(option);
            });
        })
        .catch(error => {
            console.log('There was a problem with the fetch operation: ' + error.message);
        });
});

document
    .getElementById("SubmitGroupUpdate")
    .addEventListener("click", function (event) {
      event.preventDefault();

      var idGrupo = document.getElementById('foodGroupUpdate').value; // El valor seleccionado es el ID del grupo
      var nuevoNombre = document.getElementById('groupNewNombre').value;
      var nuevaDesc = document.getElementById('groupNewDesc').value;

      if (!idGrupo || !nuevoNombre || !nuevaDesc) {
          console.log("Todos los campos deben estar llenos");
          return;
        }

        fetch("/api/v1/grupo/" + idGrupo, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ Nombre: nuevoNombre, Descripcion: nuevaDesc }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            console.log("Se ha actualizado el grupo alimenticio correctamente");
          })
          .catch((error) => {
            console.log(
              "There was a problem with the fetch operation: " + error.message
            );
          });
      });