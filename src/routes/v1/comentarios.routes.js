const express = require("express");
const router = express.Router();
const {
  getComentarios,
  getComentarioById,
  createComentario,
  updateComentario,
  deleteComentario
} = require("../../controllers/comentarios.controller");

// Definición de rutas
router.get("/", getComentarios);          // GET /api/v1/comentarios
router.get("/:id", getComentarioById);    // GET /api/v1/comentarios/:id
router.post("/", createComentario);       // POST /api/v1/comentarios
router.put("/:id", updateComentario);     // PUT /api/v1/comentarios/:id
router.delete("/:id", deleteComentario);  // DELETE /api/v1/comentarios/:id

module.exports = router;
