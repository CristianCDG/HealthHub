window.addEventListener("pageshow", function (event) {
    // Comprueba si el usuario está autenticado
    var usuarioAutenticado = localStorage.getItem("usuarioAutenticado");
    var rolUsuario = localStorage.getItem("rolUsuario");
  
    // Si el usuario no está autenticado o su rol no es 'acudiente', redirige a la página principal
    if (!usuarioAutenticado || rolUsuario !== "acudiente") {
      window.location.href = "../../mainInterface/index.html";
    }
  });