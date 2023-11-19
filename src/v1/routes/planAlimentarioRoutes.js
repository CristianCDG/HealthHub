const router = require('express').Router();

const PlanAlimentarioController = require('../../controllers/planAlimentarioController');


// Obtener todos los Pacientes
router.get('/', PlanAlimentarioController.getAllPlanes);

// Obtener un solo Paciente por su ID
router.get('/:id', PlanAlimentarioController.getOnePlan);

// Agregar un nuevo Paciente
router.post('/', PlanAlimentarioController.createOnePlan);

// Actualizar un Paciente
router.patch('/:id', PlanAlimentarioController.updateOnePlan);

// Eliminar un Paciente
router.delete('/:id', PlanAlimentarioController.deleteOnePlan);

// Obtener todos los planes alimentarios para un paciente específico
router.get('/:nombreBebe/:apellidoBebe', PlanAlimentarioController.getPlanesForPaciente);

// Obtener todos los alimentos para un plan alimentario específico
router.get('/:id/alimentos', PlanAlimentarioController.getAlimentosForPlan);

// Actualizar un alimento en un plan alimentario
router.patch('/:idPlan/alimentos/:idAlimento', PlanAlimentarioController.updateAlimentoInPlan);

module.exports = router;