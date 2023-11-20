document.addEventListener("DOMContentLoaded", function () {
  var insertFoodBtn = document.getElementById("insertFoodBtn");
  var delFoodBtn = document.getElementById("deleteFoodBtn");
  var listFoodBtn = document.getElementById("listFoodBtn");
  var updateFoodBtn = document.getElementById("updateFoodBtn");
  var insertGroupBtn = document.getElementById("insertFoodGroupBtn");
  var modificarGrupoBtn = document.getElementById("modificarGrupoBtn");

  insertFoodBtn.addEventListener('click', function (event) {
    event.preventDefault();
    // Aquí va tu código para manejar el click
    console.log('El enlace fue clickeado');
    showInsertFoodWindow();
  });

  delFoodBtn.addEventListener('click', function (event) {
    event.preventDefault();
    // Aquí va tu código para manejar el click
    console.log('El enlace fue clickeado');
    showDeleteFoodWindow();
  });

  listFoodBtn.addEventListener('click', function (event) {
    event.preventDefault();
    // Aquí va tu código para manejar el click
    console.log('El enlace fue clickeado');
    showListFoodWindow();
  });

  updateFoodBtn.addEventListener('click', function (event) {
    event.preventDefault();
    // Aquí va tu código para manejar el click
    console.log('El enlace fue clickeado');
    showUpdateFoodWindow();
  });

  insertGroupBtn.addEventListener('click', function (event) {
    event.preventDefault();
    // Aquí va tu código para manejar el click
    console.log('El enlace fue clickeado');
    showCreateGroupWindow();
  });

  modificarGrupoBtn.addEventListener('click', function (event) {
    event.preventDefault();
    // Aquí va tu código para manejar el click
    console.log('El enlace fue clickeado');
    showUpdateGroupWindow();
  });
});

function showInsertFoodWindow() {
  var addFoodCont = document.getElementById("insertarAlimentoContainer");
  var delFoodCont = document.getElementById("deleteAlimentoContainer");
  var listFoodCont = document.getElementById("viewAlimentoContainer");
  var updateFoodCont = document.getElementById("actualizarAlimentoContainer");
  // Grupo Alimentario
  var createGroupCont = document.getElementById("insertarGrupoContainer");
  var updateGroupCont = document.getElementById("modificarGrupoContainer");
  var createGroupCont = document.getElementById("insertarGrupoContainer");
  var updateGroupCont = document.getElementById("modificarGrupoContainer");

  if (delFoodCont.classList.contains("showAlimentoContainer")) {
    delFoodCont.classList.remove("showAlimentoContainer");
  }

  if (listFoodCont.classList.contains("showAlimentoContainer")) {
    listFoodCont.classList.remove("showAlimentoContainer");
  }

  if (updateFoodCont.classList.contains("showAlimentoContainer")) {
    updateFoodCont.classList.remove("showAlimentoContainer");
  }

  if (createGroupCont.classList.contains("showAlimentoContainer")) {
    createGroupCont.classList.remove("showAlimentoContainer");
  }

  if (updateGroupCont.classList.contains("showAlimentoContainer")) {
    updateGroupCont.classList.remove("showAlimentoContainer");
  }

  addFoodCont.classList.add("showAlimentoContainer");
}

function showDeleteFoodWindow() {
  var delFoodCont = document.getElementById("deleteAlimentoContainer");
  var addFoodCont = document.getElementById("insertarAlimentoContainer");
  var listFoodCont = document.getElementById("viewAlimentoContainer");
  var updateFoodCont = document.getElementById("actualizarAlimentoContainer");
  var createGroupCont = document.getElementById("insertarGrupoContainer");
  var updateGroupCont = document.getElementById("modificarGrupoContainer");

  if (addFoodCont.classList.contains("showAlimentoContainer")) {
    addFoodCont.classList.remove("showAlimentoContainer");
  }

  if (listFoodCont.classList.contains("showAlimentoContainer")) {
    listFoodCont.classList.remove("showAlimentoContainer");
  }

  if (updateFoodCont.classList.contains("showAlimentoContainer")) {
    updateFoodCont.classList.remove("showAlimentoContainer");
  }

  if (createGroupCont.classList.contains("showAlimentoContainer")) {
    createGroupCont.classList.remove("showAlimentoContainer");
  }

  if (updateGroupCont.classList.contains("showAlimentoContainer")) {
    updateGroupCont.classList.remove("showAlimentoContainer");
  }

  delFoodCont.classList.add("showAlimentoContainer");
}

function showListFoodWindow() {
  var listFoodCont = document.getElementById("viewAlimentoContainer");
  var delFoodCont = document.getElementById("deleteAlimentoContainer");
  var addFoodCont = document.getElementById("insertarAlimentoContainer");
  var updateFoodCont = document.getElementById("actualizarAlimentoContainer");
  var createGroupCont = document.getElementById("insertarGrupoContainer");

  var updateGroupCont = document.getElementById("modificarGrupoContainer");

  if (addFoodCont.classList.contains("showAlimentoContainer")) {
    addFoodCont.classList.remove("showAlimentoContainer");
  }

  if (delFoodCont.classList.contains("showAlimentoContainer")) {
    delFoodCont.classList.remove("showAlimentoContainer");
  }

  if (updateFoodCont.classList.contains("showAlimentoContainer")) {
    updateFoodCont.classList.remove("showAlimentoContainer");
  }

  if (createGroupCont.classList.contains("showAlimentoContainer")) {
    createGroupCont.classList.remove("showAlimentoContainer");
  }

  if (updateGroupCont.classList.contains("showAlimentoContainer")) {
    updateGroupCont.classList.remove("showAlimentoContainer");
  }

  listFoodCont.classList.add("showAlimentoContainer");
}

function showUpdateFoodWindow() {
  var updateFoodCont = document.getElementById("actualizarAlimentoContainer");
  var listFoodCont = document.getElementById("viewAlimentoContainer");
  var delFoodCont = document.getElementById("deleteAlimentoContainer");
  var addFoodCont = document.getElementById("insertarAlimentoContainer");
  var createGroupCont = document.getElementById("insertarGrupoContainer");

  var updateGroupCont = document.getElementById("modificarGrupoContainer");

  if (addFoodCont.classList.contains("showAlimentoContainer")) {
    addFoodCont.classList.remove("showAlimentoContainer");
  }

  if (delFoodCont.classList.contains("showAlimentoContainer")) {
    delFoodCont.classList.remove("showAlimentoContainer");
  }

  if (listFoodCont.classList.contains("showAlimentoContainer")) {
    listFoodCont.classList.remove("showAlimentoContainer");
  }

  if (createGroupCont.classList.contains("showAlimentoContainer")) {
    createGroupCont.classList.remove("showAlimentoContainer");
  }

  if (updateGroupCont.classList.contains("showAlimentoContainer")) {
    updateGroupCont.classList.remove("showAlimentoContainer");
  }

  updateFoodCont.classList.add("showAlimentoContainer");
}

function showCreateGroupWindow() {
  var createGroupCont = document.getElementById("insertarGrupoContainer");
  var updateFoodCont = document.getElementById("actualizarAlimentoContainer");
  var listFoodCont = document.getElementById("viewAlimentoContainer");
  var delFoodCont = document.getElementById("deleteAlimentoContainer");
  var addFoodCont = document.getElementById("insertarAlimentoContainer");

  var updateGroupCont = document.getElementById("modificarGrupoContainer");

  if (addFoodCont.classList.contains("showAlimentoContainer")) {
    addFoodCont.classList.remove("showAlimentoContainer");
  }

  if (delFoodCont.classList.contains("showAlimentoContainer")) {
    delFoodCont.classList.remove("showAlimentoContainer");
  }

  if (listFoodCont.classList.contains("showAlimentoContainer")) {
    listFoodCont.classList.remove("showAlimentoContainer");
  }

  if (updateFoodCont.classList.contains("showAlimentoContainer")) {
    updateFoodCont.classList.remove("showAlimentoContainer");
  }

  if (updateGroupCont.classList.contains("showAlimentoContainer")) {
    updateGroupCont.classList.remove("showAlimentoContainer");
  }

  createGroupCont.classList.add("showAlimentoContainer");
}

function showUpdateGroupWindow() {
  var updateGroupCont = document.getElementById("modificarGrupoContainer");
  var createGroupCont = document.getElementById("insertarGrupoContainer");
  var updateFoodCont = document.getElementById("actualizarAlimentoContainer");
  var listFoodCont = document.getElementById("viewAlimentoContainer");
  var delFoodCont = document.getElementById("deleteAlimentoContainer");
  var addFoodCont = document.getElementById("insertarAlimentoContainer");

  if (addFoodCont.classList.contains("showAlimentoContainer")) {
    addFoodCont.classList.remove("showAlimentoContainer");
  }

  if (createGroupCont.classList.contains("showAlimentoContainer")) {
    createGroupCont.classList.remove("showAlimentoContainer");
  }

  if (delFoodCont.classList.contains("showAlimentoContainer")) {
    delFoodCont.classList.remove("showAlimentoContainer");
  }

  if (listFoodCont.classList.contains("showAlimentoContainer")) {
    listFoodCont.classList.remove("showAlimentoContainer");
  }

  if (updateFoodCont.classList.contains("showAlimentoContainer")) {
    updateFoodCont.classList.remove("showAlimentoContainer");
  }

  updateGroupCont.classList.add("showAlimentoContainer");
}
