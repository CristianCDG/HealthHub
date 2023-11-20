document.addEventListener("DOMContentLoaded", function() {

  fetch('/api/v1/grupo')
    .then(response => response.json())
    .then(data => {
        var select = document.getElementById('foodGroup');
        data.forEach(function(grupo) {
            var option = document.createElement('option');
            option.value = grupo.ID;
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
      var grupo = document.getElementById('foodGroup').value;
      var alergenico = document.getElementById('Alergenic').value;
  
      if (!nombre || !grupo || !alergenico) {
          console.log("Todos los campos deben estar llenos");
          showErrorMessageEmptyFields();
          return;
        }
  
      // Primero, verifica si ya existe un alimento con el mismo nombre
      fetch(`/api/v1/alimento/name/${nombre}`)
        .then(response => {
          if (!response.ok) {
            // Si la respuesta es 404, significa que el alimento no existe y podemos continuar
            if (response.status === 404) {
              return;
            }
            // Para cualquier otro error, lanzamos un error
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          // Si la respuesta es OK, significa que el alimento existe y lanzamos un error
          duplicatedFoodErr();
          throw new Error('Ya existe un alimento con este nombre');
        })
        // Si el alimento no existe, procede a crearlo
        .then(() => {
          return fetch("/api/v1/alimento", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ Nombre: nombre, Alergenico: alergenico, Id_GrupoAlimentario: grupo }),
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

