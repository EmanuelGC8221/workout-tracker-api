const express = require ('express');
const router = express.Router();

//Importar rutas específicas.
const usersRoutes = require('./users.routes');
const ejerciciosRoutes = require ('./ejercicios.routes');
const entrenamientosRoutes = require('./entrenamientos.routes');
const ejerciciosEntrenamientosRoutes = require('./ejerciciosEntrenamientos.routes');
const programacionesRoutes = require('./programaciones.routes')
const comentariosRoutes = require("./comentarios.routes");
const informesRoutes = require("./informes.routes");

// Aquí agrupas todos los módulos de la versión v1
router.use('/users', usersRoutes);
router.use('/ejercicios', ejerciciosRoutes);
router.use('/entrenamientos', entrenamientosRoutes);
router.use('/ejercicios-entrenamientos', ejerciciosEntrenamientosRoutes);
router.use('/programaciones', programacionesRoutes);
router.use("/comentarios", comentariosRoutes);
router.use("/", informesRoutes); // monta directamente las rutas de informes porque ya están declaradas en routers

//exportar el router principal para ser usado en app.js
module.exports = router;


