document.getElementById('SubmitGroup').addEventListener('click', function(event) {
    event.preventDefault();

    var groupName = document.getElementById('groupName').value;
    var groupDesc = document.getElementById('groupDesc').value;

    fetch('/api/v1/grupo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Nombre: groupName,
            Descripcion: groupDesc
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});