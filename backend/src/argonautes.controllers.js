// CRUD functions
// GET, POST, DELETE with JSON Data

const ArgonauteCollection = require('./argonaute.model.js');

// GET
const getArgonautes = async (req, res) => {
    try {
        const argonautes = await ArgonauteCollection.find();
        res.status(200).json({argonautes: argonautes})
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

// POST
const addArgonaute = async (req, res) => {
    const newArgonaute = new ArgonauteCollection({ name:req.body.name })
    try {
        const result = await newArgonaute.save();
        res.status(201).json(result)
    } catch(error) {
        res.status(400).json({ message : error.message});
    }
}

// DELETE
const deleteArgonaute = async (req, res) => {
    const name = req.params.name;
    try {
        const result = await ArgonauteCollection.findOneAndRemove({name: name});
        res.status(203).json(result)
    } catch(error) {
        res.status(402).json({message: error.message});
    }
}

module.exports.getAll = getArgonautes;
module.exports.createArgonaute = addArgonaute;
module.exports.deleteArgonaute = deleteArgonaute;