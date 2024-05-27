const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const fileController = require('../controllers/fileController');

// Configurer Multer pour le stockage des fichiers image et PDF
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, 'uploads/guide/images/');
        } else if (file.mimetype === 'application/pdf') {
            cb(null, 'uploads/guide/pdfs/');
        } else {
            cb(new Error('Invalid file type'), null);
        }
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
    }
});

// Créer une instance de Multer pour les fichiers image et PDF
const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 } // 10 Mo pour les fichiers PDF
});

router.get('/getAllFiles', fileController.getAllFiles);
router.get('/getFileByCategory/:categorie', fileController.getFileByCategory);
router.post('/createFile', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'pdf', maxCount: 1 }]), fileController.createFile);
router.delete('/deleteFile/:id', fileController.deleteFile);

module.exports = router;
