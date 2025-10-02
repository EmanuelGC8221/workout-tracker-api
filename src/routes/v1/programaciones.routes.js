const express = require("express");
const router = express.Router();
const {
  getProgramaciones,
  getProgramacionById,
  createProgramacion,
  updateProgramacion,
  patchProgramacion,
  deleteProgramacion
} = require("../../controllers/programaciones.controller");

// Definición de rutas
router.get("/", getProgramaciones);           // GET /api/v1/programaciones
router.get("/:id", getProgramacionById);      // GET /api/v1/programaciones/:id
router.post("/", createProgramacion);         // POST /api/v1/programaciones
router.put("/:id", updateProgramacion);       // PUT /api/v1/programaciones/:id
router.patch('/:id', patchProgramacion);    // PATCH /api/v1/programaciones/:id
router.delete("/:id", deleteProgramacion);    // DELETE /api/v1/programaciones/:id

module.exports = router;
