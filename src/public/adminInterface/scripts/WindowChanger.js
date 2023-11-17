document.addEventListener("DOMContentLoaded", function() {

    var insertFoodBtn = document.getElementById("insertFoodBtn");
    var delFoodBtn = document.getElementById("deleteFoodBtn");


    insertFoodBtn.addEventListener('click', function(event) {
      event.preventDefault();
      // Aquí va tu código para manejar el click
      console.log('El enlace fue clickeado');
      showInsertFoodWindow();
    });

    delFoodBtn.addEventListener('click', function(event) {
      event.preventDefault();
      // Aquí va tu código para manejar el click
      console.log('El enlace fue clickeado');
      showDeleteFoodWindow();
    });
  });

  function showInsertFoodWindow() {
    var addFoodCont = document.getElementById("insertarAlimentoContainer");
    var delFoodCont = document.getElementById("deleteAlimentoContainer");
  
    if (delFoodCont.classList.contains("showAlimentoContainer")) {
      delFoodCont.classList.remove("showAlimentoContainer");
    }
  
    addFoodCont.classList.add("showAlimentoContainer");
  }
  
  function showDeleteFoodWindow() {
    var delFoodCont = document.getElementById("deleteAlimentoContainer");
    var addFoodCont = document.getElementById("insertarAlimentoContainer");

    if (addFoodCont.classList.contains("showAlimentoContainer")) {
        addFoodCont.classList.remove("showAlimentoContainer");
      }

    delFoodCont.classList.add("showAlimentoContainer");
  }