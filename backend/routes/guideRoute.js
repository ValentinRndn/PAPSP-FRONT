const express = require('express');
const Guide = require('../models/Guide');
const router = express.Router();

// Route pour récupérer tous les guides
router.get('/', async (req, res) => {
  try {
    const guides = await Guide.find();
    res.json(guides);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur serveur');
  }
});

// Route pour récupérer un guide par sa catégorie
router.get('/:categorie', async (req, res) => {
  try {
    const guides = await Guide.find({ categorie: req.params.categorie });
    if (!guides) {
      return res.status(404).json({ message: 'Guide non trouvé' });
    }
    res.json(guides);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur serveur');
  }
});

//Route pour ajouter un guide
router.post('/', async (req, res) => {
  try {
    const { title, description, category, pdf } = req.body;
    const guide = new Guide({
      title,
      description,
      category,
      pdf
    });
    await guide.save();
    res.json(guide);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur serveur');
  }
});

//Route pour modifier un guide
router.put('/:id', async (req, res) => {
  try {
    const { title, description, category, pdf } = req.body;
    const guide = await Guide.findById(req.params.id);
    guide.title = title;
    guide.description = description;
    guide.category = category;
    guide.pdf = pdf;
    await guide.save();
    res.json(guide);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur serveur');
  }
});

//Route pour supprimer un guide
router.delete('/:id', async (req, res) => {
  try {
    await Guide.findByIdAndDelete(req.params.id);
    res.json({ message: 'Guide supprimé' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur serveur');
  }
});

module.exports = router;