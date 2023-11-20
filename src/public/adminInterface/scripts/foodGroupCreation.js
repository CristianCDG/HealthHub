document.getElementById('SubmitGroup').addEventListener('click', async function(event) {
    event.preventDefault();

    var groupName = document.getElementById('groupName').value;
    var groupDesc = document.getElementById('groupDesc').value;

    if (!groupDesc || !groupName) {
        console.log("Todos los campos deben estar llenos");
        emptyFields();
        return;
    }

    try {
        // Primero, verifica si ya existe un grupo con el mismo nombre
        let response = await fetch(`/api/v1/grupo/name/${encodeURIComponent(groupName)}`)
        if (response.ok) {
            alreadyExistingGroup();
            // Si la respuesta es OK, significa que el grupo existe y lanzamos un error
            throw new Error('Ya existe un grupo con este nombre');
        } else if (response.status !== 404) {
            // Para cualquier otro error, lanzamos un error
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Si el grupo no existe, procede a crearlo
        response = await fetch("/api/v1/grupo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ Nombre: groupName, Descripcion: groupDesc }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Success:", data);
        document.getElementById('groupName').value = '';
        document.getElementById('groupDesc').value = '';
        niceGroupCreation();
    } catch (error) {
        console.error('Error:', error);
    }
});

function niceGroupCreation() {
    var errorMessage = document.getElementById("niceGroupCreation");
    errorMessage.classList.add("show");
  
    // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
    setTimeout(function () {
      errorMessage.classList.remove("show");
    }, 10000); // 3000 milisegundos (3 segundos)
  }

  function alreadyExistingGroup() {
    var errorMessage = document.getElementById("duplicatedGroupName");
    errorMessage.classList.add("show");
  
    // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
    setTimeout(function () {
      errorMessage.classList.remove("show");
    }, 10000); // 3000 milisegundos (3 segundos)
  }

  function emptyFields() {
    var errorMessage = document.getElementById("emptyFieldsGroupCreation");
    errorMessage.classList.add("show");
  
    // Después de un tiempo (por ejemplo, 3 segundos), oculta el mensaje
    setTimeout(function () {
      errorMessage.classList.remove("show");
    }, 10000); // 3000 milisegundos (3 segundos)
  }