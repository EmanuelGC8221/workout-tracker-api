const express = require ('express');
const router = express.Router();

//Importar rutas específicas.
const usersRoutes = require('./users.routes');


// Aquí agrupas todos los módulos de la versión v1
router.use('/users', usersRoutes);


//exportar el router principal para ser usado en app.js
module.exports = router;


