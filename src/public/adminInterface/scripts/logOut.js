document
  .getElementById("logOut")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Elimina los datos de autenticación del localStorage
    localStorage.removeItem("usuarioAutenticado");
    localStorage.removeItem("rolUsuario");

    // Redirige al usuario a la página principal
    window.location.href = "../../mainInterface/index.html";
  });