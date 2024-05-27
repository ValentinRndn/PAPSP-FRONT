const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const fileController = require('../controllers/fileController');

//Config multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/guide/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage});

router.get('/getAllFiles', fileController.getAllFiles);
router.get('/getFileByCategory/:categorie', fileController.getFileByCategory);
router.post('/createFile', upload.single('image'), fileController.createFile);
router.delete('/deleteFile/:id', fileController.deleteFile);

module.exports = router;