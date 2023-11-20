document.addEventListener('DOMContentLoaded', (event) => {
    fetch('/api/v1/acudiente')
      .then(response => response.json())
      .then(data => {
        let select = document.getElementById('selectAcudiente');
        data.forEach(acudiente => {
          let option = document.createElement('option');
          option.value = acudiente.Id;
          option.text = acudiente.Nombre + ' ' + acudiente.Apellido;
          select.add(option);
        });
      })
      .catch(error => console.error('Error:', error));
  });