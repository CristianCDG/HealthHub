document.getElementById('submit-regs').addEventListener('click', function (event) {
  event.preventDefault();

  var nombre = document.getElementById('Firstname').value;
  var apellido = document.getElementById('LastName').value;
  var correo = document.getElementById('email').value;
  var contrasena = document.getElementById('password').value;
  var contrasenaConf = document.getElementById('confirmPassword').value;
  var rol = document.getElementById('roleSelector').value;

  // Check if any of the fields is empty
  if (!nombre || !apellido || !correo || !contrasena || !contrasenaConf) {
    console.log('Todos los campos deben estar llenos');
    showErrorMessage();
    return;
  }

  if (contrasenaConf != contrasena) {
    console.log('Las contraseñas no coinciden');
    showErrorMessageCoin()
    return;
  }

  // Check if email already exists
  fetch('/api/v1/usercreation/' + encodeURIComponent(correo))
    .then(response => response.json())
    .then(data => {
      if (data.Correo) {
        console.log('El correo ya existe');
        showErrorMessageExistingMail()
        return;
      }
      showGoodRegistration();

      document.getElementById('Firstname').value = '';
      document.getElementById('LastName').value = '';
      document.getElementById('email').value = '';
      document.getElementById('password').value = '';
      document.getElementById('confirmPassword').value = '';

      fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Nombre: nombre, Apellido: apellido, Correo: correo, Contrasena: contrasena, Rol: rol }),
      })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch((error) => {
          console.error('Error:', error);
        });

        if (rol == 'Acudiente') {
          fetch('/api/v1/acudiente', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              Nombre: nombre,
              Apellido: apellido,
              E_mail: correo,
              Contrasena: contrasena,
              Telefono: 0,
              Direccion: 'Uncompleted registration',
              Fecha_nacimiento: '2000-01-01'
            }),
          })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch((error) => {
            console.error('Error:', error);
          });
        }
    }) 
    .catch((error) => {
      console.error('Error:', error);
    });
});

//MENSAJES DE ERROR

//Campos de registro vacios
function showErrorMessage() {
  var errorMessage = document.getElementById("regEmptyFields");
  errorMessage.classList.add("show");

  // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
  setTimeout(function () {
    errorMessage.classList.remove("show");
  }, 10000); // 3000 milisegundos (3 segundos)
}

//La contraseñas no coinciden en el registro
function showErrorMessageCoin() {
  var errorMessage = document.getElementById("notMatchPasswordsReg");
  errorMessage.classList.add("show");

  // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
  setTimeout(function () {
    errorMessage.classList.remove("show");
  }, 10000); // 3000 milisegundos (3 segundos)
}

//Correo existente
function showErrorMessageExistingMail() {
  var errorMessage = document.getElementById("existingMail");
  errorMessage.classList.add("show");

  // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
  setTimeout(function () {
    errorMessage.classList.remove("show");
  }, 10000); // 3000 milisegundos (3 segundos)
}

//MENSAJES DE EXITO
function showGoodRegistration() {
  var Message = document.getElementById("goodRegistration");
  Message.classList.add("show");

  // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
  setTimeout(function () {
    Message.classList.remove("show");
  }, 10000); // 3000 milisegundos (3 segundos)
}
