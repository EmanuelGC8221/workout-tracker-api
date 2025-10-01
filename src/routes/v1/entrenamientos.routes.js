const express = require('express');
const router = express.Router();
const {
  getEntrenamientos,
  getEntrenamientoById,
  createEntrenamiento,
  updateEntrenamiento,
  deleteEntrenamiento
} = require('../../controllers/entrenamientos.controller');

// Definición de rutas
router.get('/', getEntrenamientos);           // GET /api/v1/entrenamientos
router.get('/:id', getEntrenamientoById);     // GET /api/v1/entrenamientos/:id
router.post('/', createEntrenamiento);        // POST /api/v1/entrenamientos
router.put('/:id', updateEntrenamiento);      // PUT /api/v1/entrenamientos/:id
router.delete('/:id', deleteEntrenamiento);   // DELETE /api/v1/entrenamientos/:id

module.exports = router;
