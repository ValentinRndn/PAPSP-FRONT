const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  pseudo: {
    type: String,
    required: true,
    unique: true, // Le pseudo doit être unique pour chaque utilisateur
  },
  password: {
    type: String,
    required: true,
  },
});

// Mongoose génère automatiquement un champ `_id` pour chaque document
module.exports = mongoose.model('User', UserSchema);
