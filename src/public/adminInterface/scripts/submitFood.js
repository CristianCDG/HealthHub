document.addEventListener("DOMContentLoaded", function() {
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

        fetch("/api/v1/alimento", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ Nombre: nombre, Alergenico: alergenico, Id_GrupoAlimentario: grupo }),
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

    function showGoodFoodReg() {
      var errorMessage = document.getElementById("goodFoodReg");
      errorMessage.classList.add("show");
    
      // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
      setTimeout(function () {
        errorMessage.classList.remove("show");
      }, 10000); // 3000 milisegundos (3 segundos)
    }