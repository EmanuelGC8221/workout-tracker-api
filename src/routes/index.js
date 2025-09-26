const express = require('express');
const router = express.Router();

// Importar versiones de rutas
const v1Routes = require('./v1');
const { version } = require('react');

router.get('/', (req, res) => {
    res.json ({
        message: 'Workout Tracker API',
        versions: ['v1'],
        endpoints: {
            v1: '/api/v1'
        }
    });
});

module.exports = router;




