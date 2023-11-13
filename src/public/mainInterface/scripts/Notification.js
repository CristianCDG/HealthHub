document.getElementById('submit-regs').addEventListener('click', function(event) {
    event.preventDefault();
  
    var email = document.getElementById('email').value;
  
    fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ toEmail: email }),
    })
    .then(response => response.text())  
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
  });