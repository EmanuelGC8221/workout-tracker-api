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

// POST /ejercicios-entrenamientos
const createPlan = (req, res) => {
  const { nombre, descripcion, fechaInicio, fechaFin, entrenamientos } = req.body;

  if (!nombre || !descripcion || !fechaInicio || !fechaFin) {
    return res.status(400).json({ error: 'Nombre, descripción, fechaInicio y fechaFin son requeridos' });
  }

  const nuevoPlan = {
    id: `${Date.now()}`,
    nombre,
    descripcion,
    fechaInicio,
    fechaFin,
    entrenamientos: entrenamientos || []
  };

  planes.push(nuevoPlan);

  res.status(201).json(nuevoPlan);
};

// PUT /ejercicios-entrenamientos/:id
const updatePlan = (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, fechaInicio, fechaFin, entrenamientos } = req.body;

  const index = planes.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Plan no encontrado' });
  }

  if (!nombre || !descripcion || !fechaInicio || !fechaFin) {
    return res.status(400).json({ error: 'Nombre, descripción, fechaInicio y fechaFin son requeridos' });
  }

  planes[index] = {
    ...planes[index],
    nombre,
    descripcion,
    fechaInicio,
    fechaFin,
    entrenamientos: entrenamientos || planes[index].entrenamientos
  };

  res.status(200).json(planes[index]);
};

// PATCH /ejerciciosentrenamientos/:id
const patchEjercicioEntrenamiento = (req, res) => {
  const { id } = req.params;
  const plan = planes.find(p => p.id === id);

  if (!plan) {
    return res.status(404).json({ error: "Plan no encontrado" });
  }

  const camposActualizables = ["nombre", "descripcion", "fechaInicio", "fechaFin"];
  camposActualizables.forEach(campo => {
    if (req.body[campo] !== undefined) {
      plan[campo] = req.body[campo];
    }
  });

  res.status(200).json(plan);
};


// DELETE /ejercicios-entrenamientos/:id
const deletePlan = (req, res) => {
  const { id } = req.params;
  const index = planes.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Plan no encontrado' });
  }

  const deletedPlan = planes.splice(index, 1);
  res.status(200).json({ deleted: deletedPlan[0].id });
};

module.exports = {
  getPlanes,
  getPlanById,
  createPlan,
  updatePlan,
  patchEjercicioEntrenamiento,
  deletePlan
};
