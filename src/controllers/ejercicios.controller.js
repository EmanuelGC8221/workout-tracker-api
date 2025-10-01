// Estado en memoria (simulación de base de datos)
let ejercicios = [
  {
    id: "1",
    nombre: "Press de banca",
    descripcion: "Ejercicio de fuerza para trabajar el pecho y tríceps.",
    categoria: "Fuerza",
    grupoMuscular: "Pecho"
  }
];

// GET /ejercicios
const getEjercicios = (req, res) => {
  const { categoria, search } = req.query;
  let result = ejercicios;

  if (categoria) {
    result = result.filter(e => e.categoria.toLowerCase() === categoria.toLowerCase());
  }

  if (search) {
    result = result.filter(e =>
      e.nombre.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.status(200).json(result);
};

// GET /ejercicios/:id
const getEjercicioById = (req, res) => {
  const { id } = req.params;
  const ejercicio = ejercicios.find(e => e.id === id);

  if (!ejercicio) {
    return res.status(404).json({ error: 'Ejercicio no encontrado' });
  }

  res.status(200).json(ejercicio);
};


// POST /ejercicios
const createEjercicio = (req, res) => {
  const { nombre, descripcion, categoria, grupoMuscular } = req.body;

  if (!nombre || !descripcion) {
    return res.status(400).json({ error: 'Nombre y descripción son requeridos' });
  }

  const nuevoEjercicio = {
    id: `${Date.now()}`,
    nombre,
    descripcion,
    categoria,
    grupoMuscular
  };

  ejercicios.push(nuevoEjercicio);

  res.status(201).json(nuevoEjercicio);
};


// PUT /ejercicios/:id
const updateEjercicio = (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, categoria, grupoMuscular } = req.body;

  const index = ejercicios.findIndex(e => e.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Ejercicio no encontrado' });
  }

  if (!nombre || !descripcion) {
    return res.status(400).json({ error: 'Nombre y descripción son requeridos' });
  }

  ejercicios[index] = {
    ...ejercicios[index],
    nombre,
    descripcion,
    categoria,
    grupoMuscular
  };

  res.status(200).json(ejercicios[index]);
};