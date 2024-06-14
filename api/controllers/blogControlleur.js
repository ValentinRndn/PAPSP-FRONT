const db = require('../services/db');

const Blog = require('../class/blog.class');

// Controller getAllBlogs
exports.getAllBlogs = (req, res) => {
    const sql = 'SELECT * FROM blogs';
    const dbInstance = db.getInstance(); // Obtenir une instance de la classe Database

    dbInstance.query(sql, (err, result) => {
        if (err) {
            console.error("Erreur lors de la récupération des blogs", err);
            return res.status(500).json({ message: "Erreur lors de la récupération des blogs" });
        } else {
            const blogs = result.map(blog => new Blog(blog.id, blog.titre, blog.date, blog.image, blog.description, blog.epingle, blog.auteur, blog.archive));
            return res.status(200).json(blogs);
        }
    });
}

//Controller getBlogById
exports.getBlogById = (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM blogs WHERE id = ?';
    const values = [id];
    const dbInstance = db.getInstance(); // Obtenir une instance de la classe Database

    dbInstance.query(sql, values, (err, result) => {
        if (err) {
            console.error("Erreur lors de la récupération du blog", err);
            return res.status(500).json({ message: "Erreur lors de la récupération du blog" });
        } else {
            if (result.length === 0) {
                return res.status(404).json({ message: "Blog non trouvé" });
            } else {
                const blog = Blog.fromMap(result[0]);
                return res.status(200).json(blog);
            }
        }
    });
}


// Controller getLastBlog
exports.getLastBlog = (req, res) => {
  const sql = 'SELECT * FROM blogs WHERE archive = 0 ORDER BY id DESC LIMIT 1';
  const dbInstance = db.getInstance(); // Obtenir une instance de la classe Database

  dbInstance.query(sql, (err, result) => {
      if (err) {
          console.error("Erreur lors de la récupération du dernier blog non archivé", err);
          return res.status(500).json({ message: "Erreur lors de la récupération du dernier blog non archivé" });
      } else {
          if (result.length === 0) {
              return res.status(404).json({ message: "Blog non trouvé ou tous les blogs sont archivés" });
          } else {
              const blog = Blog.fromMap(result[0]);
              return res.status(200).json(blog);
          }
      }
  });
}


// Controller createBlog
exports.createBlog = (req, res) => {
    // Vérifiez les champs de req.body et req.file
    const { titre, date, description, epingle, archive, auteur } = req.body;
    const imageUrl = req.file ? req.file.path : null;
  
    // Créez une instance de Blog en utilisant les données du corps de la requête
    const blog = Blog.fromMap({
      titre,
      date,
      description,
      epingle: epingle === 'true', // Assurez-vous que l'épingle est un booléen
      auteur,
      archive,
      image: imageUrl
    });
  
    // Définir la requête SQL et les valeurs
    const sql = 'INSERT INTO blogs (titre, date, image, description, epingle, auteur) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [blog.titre, blog.date, blog.image, blog.description, blog.epingle, blog.auteur];
  
    // Obtenir une instance de la classe Database et exécuter la requête
    const dbInstance = db.getInstance();
  
    dbInstance.query(sql, values, (err, result) => {
      if (err) {
        console.error("Erreur lors de l'insertion du blog", err);
        return res.status(500).json({ message: "Erreur lors de la création du blog" });
      } else {
        blog._id = result.insertId;
        return res.status(201).json({ message: "Blog créé avec succès !" });
      }
    });
  };


  // Controller updateBlog
exports.updateBlog = (req, res) => {
    // Vérifiez les champs de req.body et req.file
    const { titre, date, description, epingle, archive, auteur } = req.body;
    const imageUrl = req.file ? req.file.path : null;
  
    // Créez une instance de Blog en utilisant les données du corps de la requête
    const blog = Blog.fromMap({
      titre,
      date,
      description,
      epingle: epingle === 'true', // Assurez-vous que l'épingle est un booléen
      auteur,
      archive,
      image: imageUrl
    });
  
    // Définir la requête SQL et les valeurs
    const sql = 'UPDATE blogs SET titre = ?, date = ?, image = ?, description = ?, epingle = ?, archive = ?, auteur = ? WHERE id = ?';
    const values = [blog.titre, blog.date, blog.image, blog.description, blog.epingle, blog.archive, blog.auteur, req.params.id];
  
    // Obtenir une instance de la classe Database et exécuter la requête
    const dbInstance = db.getInstance();
  
    dbInstance.query(sql, values, (err, result) => {
      if (err) {
        console.error("Erreur lors de la mise à jour du blog", err);
        return res.status(500).json({ message: "Erreur lors de la mise à jour du blog" });
      } else {
        return res.status(200).json({ message: "Blog mis à jour avec succès !" });
      }
    });
  };

    // Controller deleteBlog
exports.deleteBlog = (req, res) => {
    const sql = 'DELETE FROM blogs WHERE id = ?';
    const values = [req.params.id];
    const dbInstance = db.getInstance(); // Obtenir une instance de la classe Database
  
    dbInstance.query(sql, values, (err, result) => {
      if (err) {
        console.error("Erreur lors de la suppression du blog", err);
        return res.status(500).json({ message: "Erreur lors de la suppression du blog" });
      } else {
        return res.status(200).json({ message: "Blog supprimé avec succès !" });
      }
    });
  };




  // Controller archiveBlog
  exports.archiveBlog = (req, res) => {
    const sqlSelect = 'SELECT archive FROM blogs WHERE id = ?';
    const sqlUpdate = 'UPDATE blogs SET archive = ? WHERE id = ?';
    const values = [req.params.id];
    const dbInstance = db.getInstance(); // Obtenir une instance de la classe Database
  
    // Récupérer l'état actuel du champ archive
    dbInstance.query(sqlSelect, values, (err, result) => {
      if (err) {
        console.error("Erreur lors de la récupération de l'état d'archivage du blog", err);
        return res.status(500).json({ message: "Erreur lors de la récupération de l'état d'archivage du blog" });
      } else {
        if (result.length === 0) {
          return res.status(404).json({ message: "Blog non trouvé" });
        }
  
        const currentArchiveStatus = result[0].archive;
        const newArchiveStatus = currentArchiveStatus ? 0 : 1; // Inverser la valeur de archive (1 devient 0, et 0 devient 1)
  
        // Mettre à jour le champ archive avec la nouvelle valeur
        dbInstance.query(sqlUpdate, [newArchiveStatus, req.params.id], (err, result) => {
          if (err) {
            console.error("Erreur lors de la mise à jour de l'état d'archivage du blog", err);
            return res.status(500).json({ message: "Erreur lors de la mise à jour de l'état d'archivage du blog" });
          } else {
            return res.status(200).json({ message: `Blog ${newArchiveStatus ? 'archivé' : 'désarchivé'} avec succès !` });
          }
        });
      }
    });
  };
  
