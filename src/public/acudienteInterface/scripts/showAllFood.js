document.addEventListener("DOMContentLoaded", (event) => {
  var alimentosContainer = document.querySelector(".AlimentosContainer");

  fetch("/api/v1/alimento/all")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((alimento) => {
        var alimentoElement = document.createElement("p");
        alimentoElement.textContent = alimento.Nombre;
        alimentoElement.draggable = true;

        if (alimento.Alergenico) {
          alimentoElement.classList.add("alergenico");
        } else {
          alimentoElement.classList.add("no-alergenico");
        }

        alimentoElement.addEventListener("dragstart", function (event) {
          event.dataTransfer.setData("text/plain", alimento.Nombre);
        });

        alimentosContainer.appendChild(alimentoElement);
      });
    })
    .catch((error) => console.error("Error:", error));

  var planAlimentarioContainer = document.querySelector(
    ".alimentosPlanContainer"
  );
  planAlimentarioContainer.addEventListener("dragover", function (event) {
    event.preventDefault();
  });

  alimentosContainer.addEventListener("dragover", function (event) {
    event.preventDefault();
  });

  alimentosContainer.addEventListener("drop", function (event) {
    event.preventDefault();

    var nombreAlimento = event.dataTransfer.getData("text/plain");

    var alimentoElements = Array.from(
      planAlimentarioContainer.querySelectorAll("p")
    );
    var alimentoElement = alimentoElements.find(
      (element) => element.textContent === nombreAlimento
    );
    if (alimentoElement) {
      planAlimentarioContainer.removeChild(alimentoElement);
    }
  });

  var timeSelector = document.querySelector("#timeSelector");
  var alimentosPlanContainer = document.querySelector(
    ".alimentosPlanContainer"
  );

  timeSelector.addEventListener("change", function (event) {
    var selectedValue = event.target.value;

    while (alimentosPlanContainer.firstChild) {
      alimentosPlanContainer.removeChild(alimentosPlanContainer.firstChild);
    }
  

    if (selectedValue === "Semanal") {
      alimentosPlanContainer.className = "alimentosPlanContainer semanal";
      alimentosPlanContainer.innerHTML = "";
      var dias = [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo",
      ];
      dias.forEach((dia) => {
        var diaContainer = document.createElement("div");
        diaContainer.style.display = "block";
        diaContainer.style.position = "relative"; // Añade esta línea
      
        var diaTitle = document.createElement("h3");
        diaTitle.classList.add("day-title");
        diaTitle.textContent = dia;
        diaTitle.style.position = "absolute"; // Añade esta línea
        diaTitle.style.top = ".3vw"; // Añade esta línea
        diaTitle.style.left = "1vw"; // Añade esta línea
        diaContainer.appendChild(diaTitle);
      
        var diaElement = document.createElement("div");
        diaElement.className = "dia";
        diaElement.dataset.dia = dia;
      
        var alimentosContainer = document.createElement("div");
        alimentosContainer.style.display = "block";
        diaElement.appendChild(alimentosContainer);
      
        diaContainer.appendChild(diaElement);
        alimentosPlanContainer.appendChild(diaContainer);

      
        diaElement.addEventListener("dragover", function (event) {
          event.preventDefault();
        });
      
        diaElement.addEventListener("drop", function (event) {
          event.preventDefault();
      
          var nombreAlimento = event.dataTransfer.getData("text/plain");
      
          var alimentoElement = document.createElement("p");
          alimentoElement.textContent = nombreAlimento;
          alimentoElement.draggable = true;
      
          alimentoElement.addEventListener("dragstart", function (event) {
            event.dataTransfer.setData("text/plain", nombreAlimento);
          });

          alimentoElement.addEventListener("dragend", function (event) {
            var diaElement = event.target.closest(".dia");
            if (!diaElement) {
              event.target.remove();
            }
          });
          
      
          alimentosContainer.appendChild(alimentoElement);
        });
      
        alimentosPlanContainer.appendChild(diaElement);
      });
    } else if (selectedValue === "Mensual") {
      alimentosPlanContainer.className = "alimentosPlanContainer mensual";
    }
  });
});