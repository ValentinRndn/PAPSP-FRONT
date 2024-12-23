const mongoose = require('mongoose');

const GuideSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,   
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    pdf: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Guide', GuideSchema);