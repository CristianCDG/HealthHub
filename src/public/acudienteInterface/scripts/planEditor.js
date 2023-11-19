document.querySelector("#planSelector").addEventListener("change", function () {
    var selectedPlanId = this.value;
  
    fetch(`/api/v1/planes/${encodeURIComponent(selectedPlanId)}/alimentos`)
      .then((response) => response.json())
      .then((data) => {
        var showActualPlanDiv = document.querySelector(".showActualPlan");
        showActualPlanDiv.innerHTML = "";
  
        data.forEach((item) => {
          var p = document.createElement("p");
          p.textContent = item.dia + ": " + item.alimento;
          showActualPlanDiv.appendChild(p);
        });
      })
      .catch((error) => console.error("Error:", error));
  });