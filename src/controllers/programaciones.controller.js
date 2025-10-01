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