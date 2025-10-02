// src/controllers/users.controller.js

// Estado en memoria (simulación de base de datos)
let users = [
  {
    id: "1",
    nombre: "Emanuel Giraldo",
    email: "Emanuelgiraldo@gmail.com",
    creadoEn: "2025-09-12T12:00:00Z",
    fechaUltimaActualización : "2025-09-26",
    edad: 17,
    alturaCm: 180,
    pesoKg: 75,
    rol: "user"
  }
];

// GET /users
const getUsers = (req, res) => {
  const { rol, nombre } = req.query;
  let result = users;

  if (rol) {
    result = result.filter(u => u.rol === rol);
  }

  if (nombre) {
    result = result.filter(u =>
      u.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
  }

  res.status(200).json(result);
};

// GET /users/:id
const getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  res.status(200).json(user);
};

// POST /users
const createUser = (req, res) => {
  const { nombre, email, edad, alturaCm, pesoKg, rol } = req.body;

  if (!nombre || !email) {
    return res.status(400).json({ error: 'Nombre y email son requeridos' });
  }

  const nuevoUsuario = {
    id: `${Date.now()}`,
    nombre,
    email,
    fechaUltimaActualización: new Date().toISOString(),
    edad,
    alturaCm,
    pesoKg,
    rol: rol || 'user',
    creadoEn: new Date().toISOString()
  };

  users.push(nuevoUsuario);

  res.status(201).json(nuevoUsuario);
};

// PUT /users/:id
const updateUser = (req, res) => {
  const { id } = req.params;
  const { nombre, email, rol, pesoKg, edad } = req.body;

  const index = users.findIndex(u => u.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  if (!nombre || !email) {
    return res.status(400).json({ error: 'Nombre y email son requeridos' });
  }

  users[index] = {
    ...users[index],
    nombre,
    email,
    rol,
    pesoKg,
    edad,
    fechaUltimaActualización: new Date().toISOString()
  };

  res.status(200).json(users[index]);
};

// PATCH /users/:id
const patchUser = (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  // Actualizar solo campos enviados en el body
  const camposActualizables = ['nombre', 'email', 'rol', 'pesoKg', 'edad', 'alturaCm'];
  camposActualizables.forEach(campo => {
    if (req.body[campo] !== undefined) {
      user[campo] = req.body[campo];
    }
  });

  user.fechaUltimaActualización = new Date().toISOString();

  res.status(200).json(user);
};


// DELETE /users/:id
const deleteUser = (req, res) => {
  const { id } = req.params;
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  const deletedUser = users.splice(index, 1);
  res.status(200).json({ deleted: deletedUser[0].id });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  patchUser,
  deleteUser
};
