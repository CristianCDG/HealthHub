document.addEventListener("DOMContentLoaded", function() {

  fetch('/api/v1/grupo')
    .then(response => response.json())
    .then(data => {
        var select = document.getElementById('foodGroup');
        data.forEach(function(grupo) {
            var option = document.createElement('option');
            option.value = grupo.Nombre;
            option.text = grupo.Nombre;
            select.add(option);
        });
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    document
    .getElementById("Submitfood")
    .addEventListener("click", function (event) {
      event.preventDefault();
  
      var nombre = document.getElementById('foodName').value;
      var grupoNombre = document.getElementById('foodGroup').value;
      var alergenico = document.getElementById('Alergenic').value;
  
      if (!nombre || !grupoNombre || !alergenico) {
          console.log("Todos los campos deben estar llenos");
          showErrorMessageEmptyFields();
          return;
        }

      fetch(`/api/v1/grupo/nombre/${grupoNombre}`)
        .then(response => {
          console.log('Response:', response);
          if (!response.ok || response.status === 204) {
            throw new Error('Grupo no encontrado');
          }
          return response.text();
        })
        .then(text => {
          console.log('Response text:', text);
          if (text.length === 0) {
            throw new Error('Grupo no encontrado');
          }
          return text;
        })
        .then(grupoId => {

          if (!grupoId) {
            throw new Error('Id de grupo no encontrado');
          }

          fetch(`/api/v1/alimento/name/${nombre}`)
            .then(response => {
              if (!response.ok) {
                if (response.status === 404) {
                  return;
                }
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              duplicatedFoodErr();
              throw new Error('Ya existe un alimento con este nombre');
            })
            .then(() => {
              return fetch("/api/v1/alimento", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ Nombre: nombre, Alergenico: alergenico, Id_GrupoAlimentario: grupoId }),
              });
            })
            .then((response) => {
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              return response.json();
            })
            .then((data) => {
              if (data.message) {
                console.log("Se ha creado el alimento correctamente");
                showGoodFoodReg();  
              }
            })
            .catch((error) => {
              console.log(
                "There was a problem with the fetch operation: " + error.message
              );
            });
        })
        .catch(error => {
          console.error('Error:', error);
        });
    });
});

    function showErrorMessageEmptyFields() {
      var errorMessage = document.getElementById("emptyFieldsFoodReg");
      errorMessage.classList.add("show");
    
      // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
      setTimeout(function () {
        errorMessage.classList.remove("show");
      }, 10000); // 3000 milisegundos (3 segundos)
    }

    function duplicatedFoodErr() {
      var errorMessage = document.getElementById("duplicatedFoodErr");
      errorMessage.classList.add("show");
    
      // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
      setTimeout(function () {
        errorMessage.classList.remove("show");
      }, 10000); // 3000 milisegundos (3 segundos)
    }

    function showGoodFoodReg() {
      var errorMessage = document.getElementById("goodFoodReg");
      errorMessage.classList.add("show");
    
      // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
      setTimeout(function () {
        errorMessage.classList.remove("show");
      }, 10000); // 3000 milisegundos (3 segundos)
    }

