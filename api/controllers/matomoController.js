const express = require('express');
const axios = require('axios');
const router = express.Router();

// Récupérer les statistiques de Matomo
exports.getMatomoStats = (req, res) => {
  try {
    const response = axios.get('https://papsp.netlify.app/', {
      params: {
        module: 'API',
        method: 'VisitsSummary.get',
        idSite: '1',
        period: 'day',
        date: 'today',
        format: 'json',
        token_auth: '9604a38a281c15f71779255deda8af6d'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

