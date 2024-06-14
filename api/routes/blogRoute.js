const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const blogController = require('../controllers/blogControlleur');

// Configuration de Multer pour stocker les images dans le dossier uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.get('/getBlogById/:id', blogController.getBlogById);
router.get('/getAllBlogs', blogController.getAllBlogs);
router.get('/getLastBlog', blogController.getLastBlog);
router.post('/createBlog', upload.single('image'), blogController.createBlog);
router.put('/updateBlog/:id', blogController.updateBlog);
router.delete('/deleteBlog/:id', blogController.deleteBlog);
router.patch('/archiveBlog/:id', blogController.archiveBlog);

module.exports = router; // Exportation correcte du routeur
