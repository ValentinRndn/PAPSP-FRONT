const express = require('express');
const cors = require('cors');
const verifyToken = require('./middleware/verifyToken');
const utilisateurRoute = require('./routes/utilisateurRoute');
const blogRoute = require('./routes/blogRoute');
const structureRoute = require('./routes/structureRoute');
const memberRoute = require('./routes/memberRoute');
const statistiqueRoute = require('./routes/statistiqueRoute');
const FileRoute = require('./routes/fileRoute');
const MatomoRoute = require('./routes/matomoRoute');

const app = express();
app.use(express.json());
app?.use(cors());

//Appel des routes
app.use('/user', 
(req, res, next) => {
if (req.path === "/auth" ) {

      next();

    } else {

      // Sinon, appliquez le middleware
      verifyToken(req, res, next);

    }
},
utilisateurRoute);

// app.use(verifyToken);
app.use('/blog', blogRoute);
app.use('/structure', structureRoute);
app.use('/member', memberRoute);
app.use('/statistique', statistiqueRoute);
app.use('/file', FileRoute);
app.use('/matomo', MatomoRoute);

const port = 3000;
app.listen(port, () => {
    console.log('Serveur démarré sur le port 3000');
});