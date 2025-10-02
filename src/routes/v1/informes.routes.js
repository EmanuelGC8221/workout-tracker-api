const express = require("express");
const router = express.Router();
const {
  getInformesByUsuario,
  createInformeForUsuario,
  deleteInforme
} = require("../../controllers/informes.controller");

// Endpoints definidos
router.get("/usuarios/:usuarioId/informes", getInformesByUsuario);    // GET /usuarios/{usuarioId}/informes
router.post("/usuarios/:usuarioId/informes", createInformeForUsuario); // POST /usuarios/{usuarioId}/informes
router.delete("/informes/:id", deleteInforme);                         // DELETE /informes/{id}

module.exports = router;
