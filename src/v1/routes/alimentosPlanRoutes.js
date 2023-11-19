const express = require('express');
const router = express.Router();
const AlimentosPlanController = require('../../controllers/alimentosPlanController');

// Ruta para obtener los alimentos de un plan alimentario
router.get('/:idPlan', AlimentosPlanController.getAlimentosPlan);

router.get('/name/:name', AlimentosPlanController.getAlimentoByName);

// Ruta para eliminar un alimento de un plan alimentario
router.delete('/:idPlan/:idAlimento/:dia', AlimentosPlanController.deleteAlimentoPlan); // Add :dia

// Ruta para agregar un alimento a un plan alimentario
router.post('/:idPlan/add', AlimentosPlanController.addAlimentoPlan); // Add this line

module.exports = router;