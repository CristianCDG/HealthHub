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

        var diaAlimentosContainer = document.createElement("div");
        diaAlimentosContainer.style.display = "block";
        diaElement.appendChild(diaAlimentosContainer);

        diaAlimentosContainer.addEventListener("drop", function (event) {
          event.preventDefault();

          var nombreAlimento = event.dataTransfer.getData("text/plain");

          var alimentoElements = Array.from(
            planAlimentarioContainer.querySelectorAll("p")
          );
          var alimentoElement = alimentoElements.find(
            (element) => element.textContent === nombreAlimento
          );
          if (alimentoElement) {
            alimentoElement.parentNode.removeChild(alimentoElement);
          }
        });

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

          // Añadir evento de clic para eliminar el alimento
          alimentoElement.addEventListener("click", function () {
            alimentoElement.remove();
          });

          diaAlimentosContainer.appendChild(alimentoElement);
        });

        alimentosPlanContainer.appendChild(diaElement);
      });
    } else if (selectedValue === "Mensual") {
      alimentosPlanContainer.className = "alimentosPlanContainer mensual";
      alimentosPlanContainer.innerHTML = "";
      var dias = Array.from({ length: 30 }, (_, i) => i + 1); // Cambia 30 a 31 para meses con 31 días
      dias.forEach((dia) => {
        var diaContainer = document.createElement("div");
        diaContainer.style.display = "block";
        diaContainer.style.position = "relative";

        var diaTitle = document.createElement("h3");
        diaTitle.classList.add("day-title");
        diaTitle.textContent = "Día " + dia;
        diaTitle.style.position = "absolute";
        diaTitle.style.top = ".3vw";
        diaTitle.style.left = "1vw";
        diaContainer.appendChild(diaTitle);

        var diaElement = document.createElement("div");
        diaElement.className = "dia";
        diaElement.dataset.dia = dia;

        var diaAlimentosContainer = document.createElement("div");
        diaAlimentosContainer.style.display = "block";
        diaElement.appendChild(diaAlimentosContainer);

        diaAlimentosContainer.addEventListener("drop", function (event) {
          event.preventDefault();

          var nombreAlimento = event.dataTransfer.getData("text/plain");

          var alimentoElements = Array.from(
            planAlimentarioContainer.querySelectorAll("p")
          );
          var alimentoElement = alimentoElements.find(
            (element) => element.textContent === nombreAlimento
          );
          if (alimentoElement) {
            alimentoElement.parentNode.removeChild(alimentoElement);
          }
        });

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

          // Añadir evento de clic para eliminar el alimento
          alimentoElement.addEventListener("click", function () {
            alimentoElement.remove();
          });

          diaAlimentosContainer.appendChild(alimentoElement);
        });

        diaContainer.appendChild(diaElement);
        alimentosPlanContainer.appendChild(diaContainer);
        diaContainer.style.width = "100%";
        diaContainer.style.height = "auto";
        diaContainer.style.marginBottom = "20px";
        diaContainer.style.border = "1px solid #000";
        diaContainer.style.padding = "10px";
      });
    }
  });

  document.querySelector("#regPlanBtn").addEventListener("click", function () {
    var bebeSeleccionado = document.querySelector("#pacienteSelector").value;
    var [nombreBebe, apellidoBebe] = bebeSeleccionado.split(" "); // Divide el valor seleccionado en nombre y apellido
    var dias = document.querySelectorAll(".dia");
    var planAlimentario = Array.from(dias).map((dia) => {
      var alimentos = Array.from(dia.querySelectorAll("p")).map(
        (p) => p.textContent
      );
      return {
        dia: dia.dataset.dia,
        alimentos: alimentos,
      };
    });

    fetch("/api/v1/planes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombreBebe: nombreBebe,
        apellidoBebe: apellidoBebe,
        planAlimentario: planAlimentario,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  });
});
