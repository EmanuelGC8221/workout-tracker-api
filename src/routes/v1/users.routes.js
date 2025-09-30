const express = require('express');
const router = express.Router();

// Estado en memoria (simulación)
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


// GET /api/v1/users
router.get('/', (req, res) => { 
    res.status(200).json(users);
});

// GET /users/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;   // 1
  const user = users.find(u => u.id === id);   // 2

  if (!user) {   // 3
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  res.status(200).json(user);   // 4
});


// POST /users
router.post('/', (req, res) => {
  const { nombre, email, edad, alturaCm, pesoKg, rol} = req.body;   // 1

  if (!nombre || !email) {   // 2
    return res.status(400).json({ error: 'Name y email son requeridos' });
  }

  const nuevoUsuario = {   // 3
    id: `${Date.now()}`,  // identificador temporal
    nombre,
    email,
    fechaUltimaActualización: new Date().toISOString(),
    edad,
    alturaCm,
    pesoKg,
    rol: rol || 'user',  // valor por defecto si no envían rol
    creadoEn: new Date().toISOString()
  };

  users.push(nuevoUsuario);   // 4

  res.status(201).json(nuevoUsuario);   // 5
});


module.exports = router;