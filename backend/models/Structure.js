const mongoose = require('mongoose');

const StructureSchema = new mongoose.Schema({
    antenna: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    gps: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Structure', StructureSchema);