document.addEventListener("DOMContentLoaded", function() {

    var createFoodPlanBtn = document.getElementById("createFoodPlan");


    createFoodPlanBtn.addEventListener('click', function(event) {
      event.preventDefault();
      showCreateFoodPlanWindow();
    });
  });

  function showCreateFoodPlanWindow() {
    var createFoodPlanCont = document.getElementById("PlanAlimentarioContainer");
    var foodListPlan = document.getElementById("AlimentosContainer");
  
    createFoodPlanCont.classList.add("showContainer");
    foodListPlan.classList.add("showFoodList");
  }