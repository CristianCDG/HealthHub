document.getElementById('submit-regs').addEventListener('click', function(event) {
  event.preventDefault();

  var nombre = document.getElementById('Firstname').value;
  var apellido = document.getElementById('LastName').value;
  var correo = document.getElementById('email').value;
  var contrasena = document.getElementById('password').value;
  console.log({ Nombre: nombre, Apellido: apellido, Correo: correo, Contrasena: contrasena });

  fetch('/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ Nombre: nombre, Apellido: apellido, Correo: correo, Contrasena: contrasena }),
  })
  .then(response => response.text())  
  .then(data => console.log(data))
  .catch((error) => {
    console.error('Error:', error);
  });
});