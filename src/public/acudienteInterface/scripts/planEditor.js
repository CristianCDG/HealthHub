document
  .querySelector("#pacienteSelectorFPE")
  .addEventListener("change", function () {
    var selectedPatient = this.value;
    var [nombre, apellido] = selectedPatient.split(" ");
    var plan;

    fetch(
      `/api/v1/paciente/id/${encodeURIComponent(nombre)}/${encodeURIComponent(
        apellido
      )}`
    )
      .then((response) => response.json())
      .then((idPaciente) => {
        return fetch(`/api/v1/planes`)
          .then((response) => response.json())
          .then((planes) => {
            plan = planes.find((plan) => plan.ID_Paciente === idPaciente);
            

            // Define los días basado en el tipo de plan
            var dias;
            if (plan.Tipo === "Semanal") {
              dias = [
                "Lunes",
                "Martes",
                "Miércoles",
                "Jueves",
                "Viernes",
                "Sábado",
                "Domingo",
              ];
            } else if (plan.Tipo === "Mensual") {
              dias = Array.from({ length: 30 }, (_, i) => "Día " + (i + 1));
            }

            const selectDias = document.getElementById("dayAvailable");
            selectDias.innerHTML = ""; // Clear the select
            dias.forEach((dia) => {
              const option = document.createElement("option");
              option.value = dia;
              option.text = dia;
              selectDias.appendChild(option);
            });

            // Obtén los alimentos desde el servidor
            fetch("/api/v1/alimento/all")
              .then((response) => response.json())
              .then((alimentos) => {
                const selectAlimentos =
                  document.getElementById("alimentosAvailable");
                selectAlimentos.innerHTML = ""; // Clear the select
                alimentos.forEach((alimento) => {
                  const option = document.createElement("option");
                  option.value = alimento.Nombre;
                  option.text = alimento.Nombre;
                  selectAlimentos.appendChild(option);
                });
              });

            return fetch(
              `/api/v1/alimentos/${encodeURIComponent(plan.Id)}`
            ).then((response) => response.json());
          });
      })
      .then((alimentos) => {
        var showActualPlanDiv = document.querySelector(".showActualPlan");
        showActualPlanDiv.innerHTML = "";

        if (alimentos) {
          var alimentosByDia = alimentos.reduce((groups, item) => {
            var dia = item.Dia;
            if (!groups[dia]) {
              groups[dia] = [];
            }
            groups[dia].push(item);
            return groups;
          }, {});

          Object.keys(alimentosByDia).forEach((dia) => {
            var diaDiv = document.createElement("div");
            diaDiv.className = "column";
            var diaHeader = document.createElement("h2");
            diaHeader.textContent = dia;
            diaDiv.appendChild(diaHeader);

            alimentosByDia[dia].forEach((item) => {
              fetch(`/api/v1/alimento/${encodeURIComponent(item.ID_Alimento)}`)
                .then((response) => response.json())
                .then((alimento) => {
                  var p = document.createElement("p");
                  console.log(alimento);
                  p.textContent = alimento.Nombre;
                  p.addEventListener("click", function () {
                    fetch(
                      `/api/v1/alimentos/${encodeURIComponent(
                        plan.Id
                      )}/${encodeURIComponent(
                        alimento.Id
                      )}/${encodeURIComponent(dia)}`,
                      {
                        method: "DELETE",
                      }
                    )
                      .then((response) => {
                        if (response.ok) {
                          console.log("Alimento was deleted successfully");
                          p.remove();
                        } else {
                          console.log("Error deleting alimento");
                        }
                      })
                      .catch((error) => console.error("Error:", error));
                  });
                  diaDiv.appendChild(p);
                });
            });

            showActualPlanDiv.appendChild(diaDiv);
          });
        } else {
          console.log("alimentos es undefined");
        }
      })
      .catch((error) => console.error("Error:", error));
  });

document.querySelector("#addFood").addEventListener("click", function () {
  var nombreAlimento = document.getElementById("alimentosAvailable").value;
  var diaAlimento = document.getElementById("dayAvailable").value;

  var selectedPatient = document.querySelector("#pacienteSelectorFPE").value;
  var [nombre, apellido] = selectedPatient.split(" ");
  var plan;

  fetch(
    `/api/v1/paciente/id/${encodeURIComponent(nombre)}/${encodeURIComponent(
      apellido
    )}`
  )
    .then((response) => response.json())
    .then((idPaciente) => {
      return fetch(`/api/v1/planes`)
        .then((response) => response.json())
        .then((planes) => {
          plan = planes.find((plan) => plan.ID_Paciente === idPaciente);
          if (!plan) {
            console.error('No se encontró ningún plan para el paciente con id:', idPaciente);
            return;
          }
          return fetch(`/api/v1/alimentos/${plan.Id}/add`, {
            // Change this line
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              idPlan: plan.Id,
              nombreAlimento: nombreAlimento,
              diaAlimento: diaAlimento,
            }),
          });
        });
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("Alimento was added successfully:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
