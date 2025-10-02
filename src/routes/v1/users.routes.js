// src/routes/v1/users.routes.js
const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  patchUser,
  deleteUser
} = require('../../controllers/users.controller');

// Definición de rutas
router.get('/', getUsers);         // GET /api/v1/users
router.get('/:id', getUserById);   // GET /api/v1/users/:id
router.post('/', createUser);      // POST /api/v1/users
router.put('/:id', updateUser);    // PUT /api/v1/users/:id
router.patch('/:id', patchUser);   // PATCH /api/v1/users/:id
router.delete('/:id', deleteUser); // DELETE /api/v1/users/:id

module.exports = router;



















// const express = require('express');
// const router = express.Router();

// // Estado en memoria (simulación)
// let users = [
//   {
//     id: "1",
//     nombre: "Emanuel Giraldo",
//     email: "Emanuelgiraldo@gmail.com",
//     creadoEn: "2025-09-12T12:00:00Z",
//     fechaUltimaActualización : "2025-09-26",
//     edad: 17,
//     alturaCm: 180,
//     pesoKg: 75,
//     rol: "user"
    
//   }
// ];




// // GET /users/:id
// router.get('/:id', (req, res) => {
//   const { id } = req.params;   // 1
//   const user = users.find(u => u.id === id);   // 2

//   if (!user) {   // 3
//     return res.status(404).json({ error: 'Usuario no encontrado' });
//   }

//   res.status(200).json(user);   // 4
// });


// // POST /users
// router.post('/', (req, res) => {
//   const { nombre, email, edad, alturaCm, pesoKg, rol} = req.body;   // 1

//   if (!nombre || !email) {   // 2
//     return res.status(400).json({ error: 'Name y email son requeridos' });
//   }

//   const nuevoUsuario = {   // 3
//     id: `${Date.now()}`,  // identificador temporal
//     nombre,
//     email,
//     fechaUltimaActualización: new Date().toISOString(),
//     edad,
//     alturaCm,
//     pesoKg,
//     rol: rol || 'user',  // valor por defecto si no envían rol
//     creadoEn: new Date().toISOString()
//   };

//   users.push(nuevoUsuario);   // 4

//   res.status(201).json(nuevoUsuario);   // 5
// });

// // PUT /users/:id
// router.put('/:id', (req, res) => {
//   const { id } = req.params;              // 1
//   const { nombre, email, rol, pesoKg, edad } = req.body; // 2

//   const index = users.findIndex(u => u.id === id); // 3
//   if (index === -1) {                     // 4
//     return res.status(404).json({ error: 'Usuario no encontrado' });
//   }

//   if (!nombre || !email) {                  // 5
//     return res.status(400).json({ error: 'Name y email son requeridos' });
//   }

//   users[index] = {                        // 6
//     ...users[index], // conserva los datos previos
//     nombre,
//     email,
//     rol,
//     pesoKg,
//     edad,
//     fechaUltimaActualización: new Date().toISOString()
//   };

//   res.status(200).json(users[index]);     // 7
// });


// // DELETE /users/:id
// router.delete('/:id', (req, res) => {
//   const { id } = req.params;                            // 1
//   const index = users.findIndex(u => u.id === id);      // 2

//   if (index === -1) {                                   // 3
//     return res.status(404).json({ error: 'Usuario no encontrado' });
//   }

//   const deletedUser = users.splice(index, 1);           // 4
//   res.status(200).json({ deleted: deletedUser[0].id }); // 5
// });


// // GET /users?rol=user&search=Carlos
// router.get('/', (req, res) => {
//   const { rol, search } = req.query;  // 1
//   let result = users;                  // 2

//   if (rol) {                          // 3
//     result = result.filter(u => u.rol === rol);
//   }

//   if (search) {                        // 4
//     result = result.filter(u =>
//       u.nombre.toLowerCase().includes(search.toLowerCase())
//     );
//   }

//   res.status(200).json(result);        // 5
// });


// module.exports = router;