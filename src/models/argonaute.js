// Modèle de donnée pour les argonautes
// Une seule donnée : le nom

const mongoose = require('mongoose');

const argonauteSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
})

const argonauteData = mongoose.model('argonauteData', argonauteSchema);

module.exports = argonauteData;