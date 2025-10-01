// Estado en memoria (simulación de base de datos)
let comentarios = [
  {
    id: "405",
    entrenamientoId: "10",
    texto: "Subir el peso en press de banca la próxima vez.",
    fechaCreacion: "2025-09-18",
    fechaActualizacion: "2025-09-19"
  }
];

// GET /comentarios
const getComentarios = (req, res) => {
  const { entrenamientoId } = req.query;
  let result = comentarios;

  if (entrenamientoId) {
    result = result.filter(c => c.entrenamientoId === entrenamientoId);
  }

  res.status(200).json(result);
};

// GET /comentarios/:id
const getComentarioById = (req, res) => {
  const { id } = req.params;
  const comentario = comentarios.find(c => c.id === id);

  if (!comentario) {
    return res.status(404).json({ error: "Comentario no encontrado" });
  }

  res.status(200).json(comentario);
};

// POST /comentarios
const createComentario = (req, res) => {
  const { entrenamientoId, texto } = req.body;

  if (!entrenamientoId || !texto) {
    return res.status(400).json({ error: "entrenamientoId y texto son requeridos" });
  }

  const nuevoComentario = {
    id: `${Date.now()}`,
    entrenamientoId,
    texto,
    fechaCreacion: new Date().toISOString().split("T")[0], // YYYY-MM-DD
    fechaActualizacion: new Date().toISOString().split("T")[0]
  };

  comentarios.push(nuevoComentario);

  res.status(201).json(nuevoComentario);
};


