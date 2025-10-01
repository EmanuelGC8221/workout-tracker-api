// Estado en memoria (simulación de base de datos)
let planes = [
  {
    id: "5",
    nombre: "Plan de fuerza intermedio",
    descripcion: "Plan de 4 semanas enfocado en fuerza y volumen.",
    fechaInicio: "2025-09-01",
    fechaFin: "2025-09-30",
    entrenamientos: [
      {
        id: "10",
        nombre: "Rutina de pecho y tríceps",
        fecha: "2025-09-16"
      },
      {
        id: "11",
        nombre: "Rutina de espalda y bíceps",
        fecha: "2025-09-18"
      }
    ]
  }
];

// GET /ejercicios-entrenamientos
const getPlanes = (req, res) => {
  const { nombre } = req.query;
  let result = planes;

  if (nombre) {
    result = result.filter(p =>
      p.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
  }

  res.status(200).json(result);
};

// GET /ejercicios-entrenamientos/:id
const getPlanById = (req, res) => {
  const { id } = req.params;
  const plan = planes.find(p => p.id === id);

  if (!plan) {
    return res.status(404).json({ error: 'Plan no encontrado' });
  }

  res.status(200).json(plan);
};