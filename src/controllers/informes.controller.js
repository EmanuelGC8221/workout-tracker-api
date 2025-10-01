// Estado en memoria (simulación de base de datos)
let informes = [
  {
    id: "101",
    usuarioId: "1",
    titulo: "Informe semanal",
    fechaGeneracion: "2025-09-18",
    resumen: "Completaste 4 entrenamientos esta semana. Fuerza general +5%.",
    detalles: {
      seriesCompletadas: 50,
      repeticionesTotales: 480,
      pesoMovidoKg: 3500
    }
  }
];

// GET /usuarios/:usuarioId/informes
const getInformesByUsuario = (req, res) => {
  const { usuarioId } = req.params;
  const result = informes.filter(i => i.usuarioId === usuarioId);

  if (result.length === 0) {
    return res.status(404).json({ error: "No hay informes para este usuario" });
  }

  res.status(200).json(result);
};

// POST /usuarios/:usuarioId/informes
const createInformeForUsuario = (req, res) => {
  const { usuarioId } = req.params;
  const { titulo, resumen, detalles } = req.body;

  if (!titulo || !resumen || !detalles) {
    return res.status(400).json({ error: "titulo, resumen y detalles son requeridos" });
  }

  const nuevoInforme = {
    id: `${Date.now()}`,
    usuarioId,
    titulo,
    fechaGeneracion: new Date().toISOString().split("T")[0], // YYYY-MM-DD
    resumen,
    detalles
  };

  informes.push(nuevoInforme);

  res.status(201).json(nuevoInforme);
};

// DELETE /informes/:id
const deleteInforme = (req, res) => {
  const { id } = req.params;
  const index = informes.findIndex(i => i.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Informe no encontrado" });
  }

  const deletedInforme = informes.splice(index, 1);
  res.status(200).json({ deleted: deletedInforme[0].id });
};

module.exports = {
  getInformesByUsuario,
  createInformeForUsuario,
  deleteInforme
};


