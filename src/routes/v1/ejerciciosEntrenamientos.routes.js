const express = require('express');
const router = express.Router();
const {
  getPlanes,
  getPlanById,
  createPlan,
  updatePlan,
  deletePlan
} = require('../../controllers/ejerciciosEntrenamientos.controller');

// Definición de rutas
router.get('/', getPlanes);          // GET /api/v1/ejercicios-entrenamientos
router.get('/:id', getPlanById);     // GET /api/v1/ejercicios-entrenamientos/:id
router.post('/', createPlan);        // POST /api/v1/ejercicios-entrenamientos
router.put('/:id', updatePlan);      // PUT /api/v1/ejercicios-entrenamientos/:id
router.delete('/:id', deletePlan);   // DELETE /api/v1/ejercicios-entrenamientos/:id

module.exports = router;
