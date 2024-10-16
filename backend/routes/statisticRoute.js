const express = require('express');
const Statistic = require('../models/Statistic');
const router = express.Router();

// Route pour récupérer les statistiques
router.get('/getAllStats', async (req, res) => {
  try {
    const stats = await Statistic.find();
    res.json(stats);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur serveur');
  }
});

//Route pour mettre à jour les statistiques
router.put('/:id', async (req, res) => {
  try {
    const { firstStats, secondStats, thirdStats } = req.body;
    const stats = await Statistic.findById(req.params.id);
    stats.firstStats = firstStats;
    stats.secondStats = secondStats;
    stats.thirdStats = thirdStats;
    await stats.save();
    res.json(stats);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur serveur');
  }
});


//route pour ajouter des statistiques
router.post('/createStats', async (req, res) => {
  try {
    const { firstStats, secondStats, thirdStats } = req.body;
    const stats = new Statistic({
      firstStats,
      secondStats,
      thirdStats
    });
    await stats.save();
    res.json(stats);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur serveur');
  }
});
module.exports = router;