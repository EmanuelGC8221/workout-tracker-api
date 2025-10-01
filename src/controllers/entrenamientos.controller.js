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
  const { fecha, nombre } = req.query;
  let result = entrenamientos;

  if (fecha) {
    result = result.filter(e => e.fecha === fecha);
  }

  if (nombre) {
    result = result.filter(e =>
      e.nombre.toLowerCase().includes(nombre.toLowerCase())
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

// POST /entrenamientos
const createEntrenamiento = (req, res) => {
  const { nombre, fecha, hora, comentarios } = req.body;

  if (!nombre || !fecha || !hora) {
    return res.status(400).json({ error: 'Nombre, fecha y hora son requeridos' });
  }

  const nuevoEntrenamiento = {
    id: `${Date.now()}`,
    nombre,
    fecha,
    hora,
    comentarios
  };

  entrenamientos.push(nuevoEntrenamiento);

  res.status(201).json(nuevoEntrenamiento);
};

// PUT /entrenamientos/:id
const updateEntrenamiento = (req, res) => {
  const { id } = req.params;
  const { nombre, fecha, hora, comentarios } = req.body;

  const index = entrenamientos.findIndex(e => e.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Entrenamiento no encontrado' });
  }

  if (!nombre || !fecha || !hora) {
    return res.status(400).json({ error: 'Nombre, fecha y hora son requeridos' });
  }

  entrenamientos[index] = {
    ...entrenamientos[index],
    nombre,
    fecha,
    hora,
    comentarios
  };

  res.status(200).json(entrenamientos[index]);
};