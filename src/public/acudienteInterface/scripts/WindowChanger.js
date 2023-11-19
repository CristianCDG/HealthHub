document.addEventListener("DOMContentLoaded", function() {

    var createFoodPlanBtn = document.getElementById("createFoodPlan");
    var editFoodPlanBtn = document.getElementById("editFoodPlan");
    var createIncidencia = document.getElementById("regIncidenciaPlan");


    createFoodPlanBtn.addEventListener('click', function(event) {
      event.preventDefault();
      showCreateFoodPlanWindow();
    });

    editFoodPlanBtn.addEventListener('click', function(event) {
      event.preventDefault();
      console.log("click");
      showEditFoodPlanWindow();
    });

    createIncidencia.addEventListener('click', function(event) {
      event.preventDefault();
      console.log("click");
      showCreateIncidenciaWindow();
    });
  });





  function showCreateFoodPlanWindow() {
    var createFoodPlanCont = document.getElementById("PlanAlimentarioContainer");
    var foodListPlan = document.getElementById("AlimentosContainer");
    var editFoodPlanCont = document.getElementById("foodPlanEditorContainer");
    var foodEditorPanel = document.getElementById("foodEditorPanel");
    var regIncidenciaCont = document.getElementById("regIncidenciaContainer");

    if (editFoodPlanCont.classList.contains("showContainer")) {
      editFoodPlanCont.classList.remove("showContainer");
    }

    if (foodEditorPanel.classList.contains("showFoodEditorPanelCont")) {
      foodEditorPanel.classList.remove("showFoodEditorPanelCont");
    }

    if (regIncidenciaCont.classList.contains("showContainer")) {
      regIncidenciaCont.classList.remove("showContainer");
    }
  
    createFoodPlanCont.classList.add("showContainer");
    foodListPlan.classList.add("showFoodList");
  }

  function showEditFoodPlanWindow() {
    var editFoodPlanCont = document.getElementById("foodPlanEditorContainer");
    var createFoodPlanCont = document.getElementById("PlanAlimentarioContainer");
    var foodListPlan = document.getElementById("AlimentosContainer");
    var foodEditorPanel = document.getElementById("foodEditorPanel");
    var regIncidenciaCont = document.getElementById("regIncidenciaContainer");

    if (createFoodPlanCont.classList.contains("showContainer")) {
      createFoodPlanCont.classList.remove("showContainer");
    }

    if (foodListPlan.classList.contains("showFoodList")) {
      foodListPlan.classList.remove("showFoodList");
    }

    if (regIncidenciaCont.classList.contains("showContainer")) {
      regIncidenciaCont.classList.remove("showContainer");
    }

    if (foodEditorPanel.classList.contains("showFoodEditorPanelCont")) {
      foodEditorPanel.classList.remove("showFoodEditorPanelCont");
    }
  
    editFoodPlanCont.classList.add("showContainer");
    foodEditorPanel.classList.add("showFoodEditorPanelCont");
  }

  function showCreateIncidenciaWindow() {
    var regIncidenciaCont = document.getElementById("regIncidenciaContainer");
    var editFoodPlanCont = document.getElementById("foodPlanEditorContainer");
    var createFoodPlanCont = document.getElementById("PlanAlimentarioContainer");
    var foodListPlan = document.getElementById("AlimentosContainer");
    var foodEditorPanel = document.getElementById("foodEditorPanel");

    if (createFoodPlanCont.classList.contains("showContainer")) {
      createFoodPlanCont.classList.remove("showContainer");
    }

    if (foodListPlan.classList.contains("showFoodList")) {
      foodListPlan.classList.remove("showFoodList");
    }
    
    if (editFoodPlanCont.classList.contains("showContainer")) {
      editFoodPlanCont.classList.remove("showContainer");
    }

    if (foodEditorPanel.classList.contains("showFoodList")) {
      foodEditorPanel.classList.remove("showFoodList");
    }

    if (foodEditorPanel.classList.contains("showFoodEditorPanelCont")) {
      foodEditorPanel.classList.remove("showFoodEditorPanelCont");
    }

    regIncidenciaCont.classList.add("showContainer");
  }