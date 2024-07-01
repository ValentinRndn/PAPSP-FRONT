const express = require('express');

const router = express.Router();
const matomoController = require('../controllers/matomoController');

router.get('/matomo-stats', matomoController.getMatomoStats);   

module.exports = router; 