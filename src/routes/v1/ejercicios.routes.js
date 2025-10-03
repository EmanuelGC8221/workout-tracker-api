const express = require('express');
const router = express.Router();
const {
  getEjercicios,
  getEjercicioById,
  createEjercicio,
  updateEjercicio,
  patchEjercicio,
  deleteEjercicio
} = require('../../controllers/ejercicios.controller');

// Definición de rutas
router.get('/', getEjercicios);          // GET /api/v1/ejercicios
router.get('/:id', getEjercicioById);    // GET /api/v1/ejercicios/:id
router.post('/', createEjercicio);       // POST /api/v1/ejercicios
router.put('/:id', updateEjercicio);     // PUT /api/v1/ejercicios/:id
router.patch("/:id", patchEjercicio);   // PATCH /api/v1/ejercicios/:id
router.delete('/:id', deleteEjercicio);  // DELETE /api/v1/ejercicios/:id

module.exports = router;
