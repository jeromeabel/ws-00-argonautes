// Modèle de donnée pour les argonautes
// Une seule donnée : le nom

const mongoose = require('mongoose');

const argonauteSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
})

const ArgonauteCollection = mongoose.model('argonautes', argonauteSchema);

module.exports = ArgonauteCollection;