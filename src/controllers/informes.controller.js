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
