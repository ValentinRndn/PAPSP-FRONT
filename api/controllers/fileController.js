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

// Controller createFile
exports.createFile = (req, res) => {
    const { titre, description, lien, categorie } = req.body;
    const imageUrl = req.files['image'] ? req.files['image'][0].path : null;
    const pdfUrl = req.files['pdf'] ? req.files['pdf'][0].path : null; 

    const file = File.fromMap({
        titre,
        description,
        lien,
        image: imageUrl,
        categorie,
        pdf: pdfUrl 
    });

    const sql = 'INSERT INTO documents (titre, description, lien, image, categorie, pdf) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [file.titre, file.description, file.lien, file.image, file.categorie, file.pdf];

    const dbInstance = db.getInstance();

    dbInstance.query(sql, values, (err, result) => {
        if (err) {
            console.error("Erreur lors de l'insertion du fichier", err);
            return res.status(500).json({ message: "Erreur lors de la création du fichier" });
        } else {
            file._id = result.insertId;
            return res.status(201).json({ message: "Fichier créé avec succès !" });
        }
    });
};



// Controller deleteFile
exports.deleteFile = (req, res) => {
    const sql = 'DELETE FROM documents WHERE id = ?';
    const values = [req.params.id];

    const dbInstance = db.getInstance(); // Obtenir une instance de la classe Database

    dbInstance.query(sql, values, (err, result) => {
        if (err) {
            console.error("Erreur lors de la suppression du fichier", err);
            return res.status(500).json({ message: "Erreur lors de la suppression du fichier" });
        } else {
            return res.status(200).json({ message: "Fichier supprimé avec succès !" });
        }
    });
}