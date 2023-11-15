document.getElementById('submit-regs').addEventListener('click', function (event) {
    event.preventDefault();
  
    var email = document.getElementById('correo').value;
    var direccion = document.getElementById('Direccion').value;
    var telefono = document.getElementById('Telefono').value;
    var Fecha_nacimiento = document.getElementById('fnacimiento').value;
  
    if (!email || !direccion || !telefono || !Fecha_nacimiento) {
      console.log('Todos los campos deben estar llenos');
      showErrorMessage();
      return;
    }
  
    // Verifica si el correo ya existe en la base de datos
    fetch('/api/v1/acudiente/email/' + encodeURIComponent(email), {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Direccion: direccion,
        Telefono: telefono,
        Fecha_nacimiento: Fecha_nacimiento
      }),
      
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al actualizar los datos');
      }
      successfulRegistration();
      return response.json();
      
    })
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
  
  });

  function showErrorMessage() {
    var errorMessage = document.getElementById("regEmptyFields");
    errorMessage.classList.add("show");

    // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
    setTimeout(function () {
      errorMessage.classList.remove("show");
    }, 10000); // 10000 milisegundos (10 segundos)
  }

  function showErrorMessageNotFoundMail() {
    var errorMessage = document.getElementById("notFoundMail");
    errorMessage.classList.add("show");

    // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
    setTimeout(function () {
      errorMessage.classList.remove("show");
    }, 10000); // 10000 milisegundos (10 segundos)
  }

  function successfulRegistration(){
    var errorMessage = document.getElementById("successfulUpdate");
    errorMessage.classList.add("show");

    // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
    setTimeout(function () {
      errorMessage.classList.remove("show");
    }, 10000); // 10000 milisegundos (10 segundos)
  }