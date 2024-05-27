const db = require('../services/db');

const File = require('../class/file.class');    

// Controller getAllFiles
exports.getAllFiles = (req, res) => {
    const sql = 'SELECT * FROM documents';

    const dbInstance = db.getInstance(); // Obtenir une instance de la classe Database

    dbInstance.query(sql, (err, result) => {
        if (err) {
            console.error("Erreur lors de la récupération des fichiers", err);
            return res.status(500).json({ message: "Erreur lors de la récupération des fichiers" });
        } else {
            return res.status(200).json(result);
        }
    });
}

// Controller getFileByCategory
exports.getFileByCategory = (req, res) => {
    const sql = 'SELECT * FROM documents WHERE categorie = ?';
    const values = [req.params.categorie];


    const dbInstance = db.getInstance(); // Obtenir une instance de la classe Database

    dbInstance.query(sql, values, (err, result) => {
        if (err) {
            console.error("Erreur lors de la récupération des fichiers", err);
            return res.status(500).json({ message: "Erreur lors de la récupération des fichiers" });
        } else {
            return res.status(200).json(result);
        }
    });
}