function fillSelector() {
  fetch("/api/v1/grupo")
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          const select = document.getElementById('foodGroupUpdate');
          // Primero, limpiar las opciones existentes
          select.innerHTML = '';
          data.forEach(grupo => {
              const option = document.createElement('option');
              option.value = grupo.Nombre; // El valor es el nombre del grupo
              option.text = grupo.Nombre; // El texto es el nombre del grupo
              select.add(option);
          });
      })
      .catch(error => {
          console.log('There was a problem with the fetch operation: ' + error.message);
      });
}

document
  .getElementById("modificarGrupoBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    fillSelector(); // Refill the selector after deleting an item
  });

document.addEventListener('DOMContentLoaded', fillSelector);

document
  .getElementById("SubmitGroupUpdate")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var nombreGrupo = document.getElementById('foodGroupUpdate').value; // El valor seleccionado es el nombre del grupo
    var nuevoNombre = document.getElementById('groupNewNombre').value;
    var nuevaDesc = document.getElementById('groupNewDesc').value;

    if (!nombreGrupo || !nuevoNombre || !nuevaDesc) {
        console.log("Todos los campos deben estar llenos");
        emptyFields();
        return;
    }

    // Verificar si existe un grupo con el nuevo nombre
    fetch("/api/v1/grupo/nombre/" + nuevoNombre)
      .then(response => {
        if (response.ok) {
          anotherGroupSameName();
          throw new Error('Ya existe un grupo con este nombre');
        }
      })
      .then(() => {
        // Si no existe un grupo con el nuevo nombre, obtener el ID del grupo actual
        return fetch("/api/v1/grupo/nombre/" + nombreGrupo);
      })
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
      })
      .then(idGrupo => {
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
              niceGroupUpdate();
              document.getElementById('groupNewNombre').value = '';
              document.getElementById('groupNewDesc').value = '';

              // Actualizar el selector después de la actualización
              fillSelector();
            })
            .catch((error) => {
              console.log(
                "There was a problem with the fetch operation: " + error.message
              );
            });
      })
      .catch(error => {
          console.log('There was a problem: ' + error.message);
      });
  });

    function emptyFields() {
      var errorMessage = document.getElementById("emptyFieldsGroupUpdate");
      errorMessage.classList.add("show");
    
      // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
      setTimeout(function () {
        errorMessage.classList.remove("show");
      }, 10000); // 3000 milisegundos (3 segundos)
    }

    function anotherGroupSameName() {
      var errorMessage = document.getElementById("anotherGroupGroupUpdate");
      errorMessage.classList.add("show");
    
      // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
      setTimeout(function () {
        errorMessage.classList.remove("show");
      }, 10000); // 3000 milisegundos (3 segundos)
    }

    function niceGroupUpdate() {
      var errorMessage = document.getElementById("niceGroupUpdate");
      errorMessage.classList.add("show");
    
      // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
      setTimeout(function () {
        errorMessage.classList.remove("show");
      }, 10000); // 3000 milisegundos (3 segundos)
    }