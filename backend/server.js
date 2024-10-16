const express = require('express');
const http = require('http');
const cors = require('cors'); // Import du middleware cors
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Connexion à MongoDB

// Import des modèles
const User = require('./models/User');
const Blog = require('./models/Blog');
const Guide = require('./models/Guide');
const Statistic = require('./models/Statistic');
const Structure = require('./models/Structure');


dotenv.config();
connectDB(); // Connexion à MongoDB

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // L'origine de ton frontend Vue.js
  methods: 'GET,POST,PUT,DELETE', // Méthodes HTTP autorisées
  credentials: true // Si tu veux envoyer des cookies (optionnel)
}));

app.use(express.json()); // Middleware pour traiter les JSON

// Routes
app.use('/api/auth', require('./routes/authRoute'));
app.use('/api/users', require('./routes/userRoute')); // Route des utilisateurs
app.use('/api/blogs', require('./routes/blogRoute')); // Route des articles
app.use('/api/guides', require('./routes/guideRoute')); // Route des guides
app.use('/api/statistics', require('./routes/statisticRoute')); // Route des statistiques
app.use('/api/structures', require('./routes/structureRoute')); // Route des structures

app.use('/uploads', express.static('uploads'));

// Création du serveur HTTP
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
