document.addEventListener("DOMContentLoaded", function () {
  var insertFoodBtn = document.getElementById("insertFoodBtn");
  var delFoodBtn = document.getElementById("deleteFoodBtn");
  var listFoodBtn = document.getElementById("listFoodBtn");
  var updateFoodBtn = document.getElementById("updateFoodBtn");
  var insertGroupBtn = document.getElementById("insertFoodGroupBtn");
  var modificarGrupoBtn = document.getElementById("modificarGrupoBtn");
  var deleteGroupBtn = document.getElementById("eliminarGrupoBtn");
  var consultarGroupBtn = document.getElementById("consultarGrupoBtn");

  insertFoodBtn.addEventListener("click", function (event) {
    event.preventDefault();
    // Aquí va tu código para manejar el click
    console.log("El enlace fue clickeado");
    showInsertFoodWindow();
  });

  delFoodBtn.addEventListener("click", function (event) {
    event.preventDefault();
    // Aquí va tu código para manejar el click
    console.log("El enlace fue clickeado");
    showDeleteFoodWindow();
  });

  listFoodBtn.addEventListener("click", function (event) {
    event.preventDefault();
    // Aquí va tu código para manejar el click
    console.log("El enlace fue clickeado");
    showListFoodWindow();
  });

  updateFoodBtn.addEventListener("click", function (event) {
    event.preventDefault();
    // Aquí va tu código para manejar el click
    console.log("El enlace fue clickeado");
    showUpdateFoodWindow();
  });

  insertGroupBtn.addEventListener("click", function (event) {
    event.preventDefault();
    // Aquí va tu código para manejar el click
    console.log("El enlace fue clickeado");
    showCreateGroupWindow();
  });

  modificarGrupoBtn.addEventListener("click", function (event) {
    event.preventDefault();
    // Aquí va tu código para manejar el click
    console.log("El enlace fue clickeado");
    showUpdateGroupWindow();
  });

  deleteGroupBtn.addEventListener("click", function (event) {
    event.preventDefault();
    // Aquí va tu código para manejar el click
    console.log("El enlace fue clickeado");
    showDeleteGroupWindow();
  });

  consultarGroupBtn.addEventListener("click", function (event) {
    event.preventDefault();
    // Aquí va tu código para manejar el click
    console.log("El enlace fue clickeado");
    showViewGroupWindow();
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
  var deleteGroupCont = document.getElementById("deleteGrupoContainer");
  var viewGroupCont = document.getElementById("viewGroupContainer");

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

  if (deleteGroupCont.classList.contains("showAlimentoContainer")) {
    deleteGroupCont.classList.remove("showAlimentoContainer");
  }

  if (viewGroupCont.classList.contains("showAlimentoContainer")) {
    viewGroupCont.classList.remove("showAlimentoContainer");
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
  var deleteGroupCont = document.getElementById("deleteGrupoContainer");
  var viewGroupCont = document.getElementById("viewGroupContainer");

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

  if (deleteGroupCont.classList.contains("showAlimentoContainer")) {
    deleteGroupCont.classList.remove("showAlimentoContainer");
  }

  if (viewGroupCont.classList.contains("showAlimentoContainer")) {
    viewGroupCont.classList.remove("showAlimentoContainer");
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
  var deleteGroupCont = document.getElementById("deleteGrupoContainer");
  var viewGroupCont = document.getElementById("viewGroupContainer");

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

  if (deleteGroupCont.classList.contains("showAlimentoContainer")) {
    deleteGroupCont.classList.remove("showAlimentoContainer");
  }

  if (viewGroupCont.classList.contains("showAlimentoContainer")) {
    viewGroupCont.classList.remove("showAlimentoContainer");
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
  var deleteGroupCont = document.getElementById("deleteGrupoContainer");
  var viewGroupCont = document.getElementById("viewGroupContainer");

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

  if (deleteGroupCont.classList.contains("showAlimentoContainer")) {
    deleteGroupCont.classList.remove("showAlimentoContainer");
  }

  if (viewGroupCont.classList.contains("showAlimentoContainer")) {
    viewGroupCont.classList.remove("showAlimentoContainer");
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
  var deleteGroupCont = document.getElementById("deleteGrupoContainer");
  var viewGroupCont = document.getElementById("viewGroupContainer");

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

  if (deleteGroupCont.classList.contains("showAlimentoContainer")) {
    deleteGroupCont.classList.remove("showAlimentoContainer");
  }

  if (viewGroupCont.classList.contains("showAlimentoContainer")) {
    viewGroupCont.classList.remove("showAlimentoContainer");
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
  var deleteGroupCont = document.getElementById("deleteGrupoContainer");
  var viewGroupCont = document.getElementById("viewGroupContainer");

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

  if (deleteGroupCont.classList.contains("showAlimentoContainer")) {
    deleteGroupCont.classList.remove("showAlimentoContainer");
  }

  if (viewGroupCont.classList.contains("showAlimentoContainer")) {
    viewGroupCont.classList.remove("showAlimentoContainer");
  }

  updateGroupCont.classList.add("showAlimentoContainer");
}

function showDeleteGroupWindow() {
  var deleteGroupCont = document.getElementById("deleteGrupoContainer");
  var updateGroupCont = document.getElementById("modificarGrupoContainer");
  var createGroupCont = document.getElementById("insertarGrupoContainer");
  var updateFoodCont = document.getElementById("actualizarAlimentoContainer");
  var listFoodCont = document.getElementById("viewAlimentoContainer");
  var delFoodCont = document.getElementById("deleteAlimentoContainer");
  var addFoodCont = document.getElementById("insertarAlimentoContainer");
  var viewGroupCont = document.getElementById("viewGroupContainer");

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

  if (updateGroupCont.classList.contains("showAlimentoContainer")) {
    updateGroupCont.classList.remove("showAlimentoContainer");
  }

  if (viewGroupCont.classList.contains("showAlimentoContainer")) {
    viewGroupCont.classList.remove("showAlimentoContainer");
  }

  deleteGroupCont.classList.add("showAlimentoContainer");
}


function showViewGroupWindow() {
  var viewGroupCont = document.getElementById("viewGroupContainer");
  var deleteGroupCont = document.getElementById("deleteGrupoContainer");
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

  if (updateGroupCont.classList.contains("showAlimentoContainer")) {
    updateGroupCont.classList.remove("showAlimentoContainer");
  }

  if (deleteGroupCont.classList.contains("showAlimentoContainer")) {
    deleteGroupCont.classList.remove("showAlimentoContainer");
  }

  if (viewGroupCont.classList.contains("showAlimentoContainer")) {
    viewGroupCont.classList.remove("showAlimentoContainer");
  }

  viewGroupCont.classList.add("showAlimentoContainer");
}