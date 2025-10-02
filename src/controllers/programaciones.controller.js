// Estado en memoria (simulación de base de datos)
let programaciones = [
  {
    id: "7",
    entrenamientoId: "10",
    fecha: "2025-09-20",
    hora: "19:30",
    estado: "Pendiente"
  }
];

// GET /programaciones
const getProgramaciones = (req, res) => {
  const { estado } = req.query;
  let result = programaciones;

  if (estado) {
    result = result.filter(p => p.estado.toLowerCase() === estado.toLowerCase());
  }

  res.status(200).json(result);
};

// GET /programaciones/:id
const getProgramacionById = (req, res) => {
  const { id } = req.params;
  const programacion = programaciones.find(p => p.id === id);

  if (!programacion) {
    return res.status(404).json({ error: "Programación no encontrada" });
  }

  res.status(200).json(programacion);
};

// POST /programaciones
const createProgramacion = (req, res) => {
  const { entrenamientoId, fecha, hora, estado } = req.body;

  if (!entrenamientoId || !fecha || !hora) {
    return res.status(400).json({ error: "entrenamientoId, fecha y hora son requeridos" });
  }

  const nuevaProgramacion = {
    id: `${Date.now()}`,
    entrenamientoId,
    fecha,
    hora,
    estado: estado || "Pendiente"
  };

  programaciones.push(nuevaProgramacion);

  res.status(201).json(nuevaProgramacion);
};

// PUT /programaciones/:id
const updateProgramacion = (req, res) => {
  const { id } = req.params;
  const { entrenamientoId, fecha, hora, estado } = req.body;

  const index = programaciones.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Programación no encontrada" });
  }

  if (!entrenamientoId || !fecha || !hora) {
    return res.status(400).json({ error: "entrenamientoId, fecha y hora son requeridos" });
  }

  programaciones[index] = {
    ...programaciones[index],
    entrenamientoId,
    fecha,
    hora,
    estado: estado || programaciones[index].estado
  };

  res.status(200).json(programaciones[index]);
};

// PATCH /programaciones/:id
const patchProgramacion = (req, res) => {
  const { id } = req.params;
  const p = programaciones.find(x => x.id === id);

  if (!p) return res.status(404).json({ error: 'Programación no encontrada' });

  const camposActualizables = ['entrenamientoId', 'fecha', 'hora', 'estado'];
  camposActualizables.forEach(c => {
    if (req.body[c] !== undefined) p[c] = req.body[c];
  });

  p.fechaUltimaActualización = new Date().toISOString();
  res.status(200).json(p);
};

// DELETE /programaciones/:id
const deleteProgramacion = (req, res) => {
  const { id } = req.params;
  const index = programaciones.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Programación no encontrada" });
  }

  const deleted = programaciones.splice(index, 1);
  res.status(200).json({ deleted: deleted[0].id });
};

module.exports = {
  getProgramaciones,
  getProgramacionById,
  createProgramacion,
  updateProgramacion,
  patchProgramacion,
  deleteProgramacion
};



