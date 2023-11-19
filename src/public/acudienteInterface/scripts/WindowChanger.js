document.addEventListener("DOMContentLoaded", function() {

    var createFoodPlanBtn = document.getElementById("createFoodPlan");
    var editFoodPlanBtn = document.getElementById("editFoodPlan");


    createFoodPlanBtn.addEventListener('click', function(event) {
      event.preventDefault();
      showCreateFoodPlanWindow();
    });

    editFoodPlanBtn.addEventListener('click', function(event) {
      event.preventDefault();
      console.log("click");
      showEditFoodPlanWindow();
    });
  });



  function showCreateFoodPlanWindow() {
    var createFoodPlanCont = document.getElementById("PlanAlimentarioContainer");
    var foodListPlan = document.getElementById("AlimentosContainer");
    var editFoodPlanCont = document.getElementById("foodPlanEditorContainer");

    if (editFoodPlanCont.classList.contains("showContainer")) {
      editFoodPlanCont.classList.remove("showContainer");
    }
  
    createFoodPlanCont.classList.add("showContainer");
    foodListPlan.classList.add("showFoodList");
  }

  function showEditFoodPlanWindow() {
    var editFoodPlanCont = document.getElementById("foodPlanEditorContainer");
    var createFoodPlanCont = document.getElementById("PlanAlimentarioContainer");
    var foodListPlan = document.getElementById("AlimentosContainer");

    if (createFoodPlanCont.classList.contains("showContainer")) {
      createFoodPlanCont.classList.remove("showContainer");
    }

    if (foodListPlan.classList.contains("showFoodList")) {
      foodListPlan.classList.remove("showFoodList");
    }
  
    editFoodPlanCont.classList.add("showContainer");
  }