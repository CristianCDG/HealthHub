document.getElementById("submit-login").addEventListener("click", function (event) {
    event.preventDefault();
  
    var username = document.getElementById("logUserName").value;
    var password = document.getElementById("logPassword").value;
  
    // Check if any of the fields is empty
    if (!username || !password) {
      console.log("Todos los campos deben estar llenos");
      showErrorMessageEmptyFields();
      return;
    }
  
    fetch("/api/v1/userlogin", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          if (data.valid) {
            console.log("El usuario ha iniciado sesión correctamente");
            showGoodLogin();
          } else {
            console.log("El nombre de usuario o la contraseña son incorrectos");
            showErrorMessage();
          }
        })
        .catch((error) => {
          console.log('There was a problem with the fetch operation: ' + error.message);
        });
  });

  //MENSAJES DE EXITO
function showGoodLogin() {
    var Message = document.getElementById("goodLogin");
    Message.classList.add("show");
  
    // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
    setTimeout(function() {
      Message.classList.remove("show");
    }, 10000); // 3000 milisegundos (3 segundos)
  }

//MENSAJES DE ERROR

//Contraseña o username incorrecto
function showErrorMessage() {
    var errorMessage = document.getElementById("notMatchUserLog");
    errorMessage.classList.add("show");
  
    // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
    setTimeout(function() {
      errorMessage.classList.remove("show");
    }, 10000); // 3000 milisegundos (3 segundos)
  }

  //Campos vacios
  function showErrorMessageEmptyFields() {
    var errorMessage = document.getElementById("logEmptyFields");
    errorMessage.classList.add("show");
  
    // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
    setTimeout(function() {
      errorMessage.classList.remove("show");
    }, 10000); // 3000 milisegundos (3 segundos)
  }