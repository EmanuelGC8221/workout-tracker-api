// Estado en memoria (simulación de base de datos)
let entrenamientos = [
  {
    id: "25",
    nombre: "Rutina de piernas",
    fecha: "2025-09-25",
    hora: "17:00",
    comentarios: "Incluir sentadillas y prensa"
  }
];

// GET /entrenamientos
const getEntrenamientos = (req, res) => {
  const { fecha, search } = req.query;
  let result = entrenamientos;

  if (fecha) {
    result = result.filter(e => e.fecha === fecha);
  }

  if (search) {
    result = result.filter(e =>
      e.nombre.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.status(200).json(result);
};

// GET /entrenamientos/:id
const getEntrenamientoById = (req, res) => {
  const { id } = req.params;
  const entrenamiento = entrenamientos.find(e => e.id === id);

  if (!entrenamiento) {
    return res.status(404).json({ error: 'Entrenamiento no encontrado' });
  }

  res.status(200).json(entrenamiento);
};

