document.addEventListener("DOMContentLoaded", function() {

    var insertFoodBtn = document.getElementById("insertFoodBtn");
    var delFoodBtn = document.getElementById("deleteFoodBtn");
    var listFoodBtn = document.getElementById("listFoodBtn");
    var updateFoodBtn = document.getElementById("updateFoodBtn");


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

    listFoodBtn.addEventListener('click', function(event) {
      event.preventDefault();
      // Aquí va tu código para manejar el click
      console.log('El enlace fue clickeado');
      showListFoodWindow();
    });

    updateFoodBtn.addEventListener('click', function(event) {
      event.preventDefault();
      // Aquí va tu código para manejar el click
      console.log('El enlace fue clickeado');
      showUpdateFoodWindow();
    });
  });

  function showInsertFoodWindow() {
    var addFoodCont = document.getElementById("insertarAlimentoContainer");
    var delFoodCont = document.getElementById("deleteAlimentoContainer");
    var listFoodCont = document.getElementById("viewAlimentoContainer");
    var updateFoodCont = document.getElementById("actualizarAlimentoContainer");
  
    if (delFoodCont.classList.contains("showAlimentoContainer")) {
      delFoodCont.classList.remove("showAlimentoContainer");
    }

    if (listFoodCont.classList.contains("showAlimentoContainer")) {
      listFoodCont.classList.remove("showAlimentoContainer");
    }

    if (updateFoodCont.classList.contains("showAlimentoContainer")) {
      updateFoodCont.classList.remove("showAlimentoContainer");
    }
  
    addFoodCont.classList.add("showAlimentoContainer");
  }
  
  function showDeleteFoodWindow() {
    var delFoodCont = document.getElementById("deleteAlimentoContainer");
    var addFoodCont = document.getElementById("insertarAlimentoContainer");
    var listFoodCont = document.getElementById("viewAlimentoContainer");
    var updateFoodCont = document.getElementById("actualizarAlimentoContainer");

    if (addFoodCont.classList.contains("showAlimentoContainer")) {
        addFoodCont.classList.remove("showAlimentoContainer");
      }

      if (listFoodCont.classList.contains("showAlimentoContainer")) {
        listFoodCont.classList.remove("showAlimentoContainer");
      }

      if (updateFoodCont.classList.contains("showAlimentoContainer")) {
        updateFoodCont.classList.remove("showAlimentoContainer");
      }

    delFoodCont.classList.add("showAlimentoContainer");
  }

  function showListFoodWindow() {
    var listFoodCont = document.getElementById("viewAlimentoContainer");
    var delFoodCont = document.getElementById("deleteAlimentoContainer");
    var addFoodCont = document.getElementById("insertarAlimentoContainer");
    var updateFoodCont = document.getElementById("actualizarAlimentoContainer");

    if (addFoodCont.classList.contains("showAlimentoContainer")) {
        addFoodCont.classList.remove("showAlimentoContainer");
      }

      if (delFoodCont.classList.contains("showAlimentoContainer")) {
        delFoodCont.classList.remove("showAlimentoContainer");
      }

      if (updateFoodCont.classList.contains("showAlimentoContainer")) {
        updateFoodCont.classList.remove("showAlimentoContainer");
      }

      listFoodCont.classList.add("showAlimentoContainer");
  }

  function showUpdateFoodWindow() {
    var updateFoodCont = document.getElementById("actualizarAlimentoContainer");
    var listFoodCont = document.getElementById("viewAlimentoContainer");
    var delFoodCont = document.getElementById("deleteAlimentoContainer");
    var addFoodCont = document.getElementById("insertarAlimentoContainer");

    if (addFoodCont.classList.contains("showAlimentoContainer")) {
        addFoodCont.classList.remove("showAlimentoContainer");
      }

      if (delFoodCont.classList.contains("showAlimentoContainer")) {
        delFoodCont.classList.remove("showAlimentoContainer");
      }

      if (listFoodCont.classList.contains("showAlimentoContainer")) {
        listFoodCont.classList.remove("showAlimentoContainer");
      }

      updateFoodCont.classList.add("showAlimentoContainer");
  }