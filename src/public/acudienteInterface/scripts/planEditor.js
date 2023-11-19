document.querySelector("#pacienteSelectorFPE").addEventListener("change", function () {
    var selectedPatient = this.value;
    var [nombre, apellido] = selectedPatient.split(" ");
    var plan;
  
    fetch(`/api/v1/paciente/id/${encodeURIComponent(nombre)}/${encodeURIComponent(apellido)}`)
      .then((response) => response.json())
      .then((idPaciente) => {
        return fetch(`/api/v1/planes`)
          .then((response) => response.json())
          .then((planes) => {
            plan = planes.find(plan => plan.ID_Paciente === idPaciente);
            return fetch(`/api/v1/alimentos/${encodeURIComponent(plan.Id)}`)
              .then((response) => response.json());
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
                    fetch(`/api/v1/alimentos/${encodeURIComponent(plan.Id)}/${encodeURIComponent(alimento.Id)}/${encodeURIComponent(dia)}`, {
                      method: 'DELETE',
                    })
                    .then((response) => {
                      if (response.ok) {
                        console.log('Alimento was deleted successfully');
                        p.remove();
                      } else {
                        console.log('Error deleting alimento');
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
          console.log('alimentos es undefined');
        }
      })
      .catch((error) => console.error("Error:", error));
  });