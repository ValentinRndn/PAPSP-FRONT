const mongoose = require('mongoose');

const StatisticSchema = new mongoose.Schema({
    firstStats: {
        type: Number, 
        required: true, 
    },
    secondStats: {
        type: Number, 
        required: true, 
    },
    thirdStats: {
        type: Number, 
        required: true, 
    },
});

module.exports = mongoose.model('Statistic', StatisticSchema); // Correction de l'export
