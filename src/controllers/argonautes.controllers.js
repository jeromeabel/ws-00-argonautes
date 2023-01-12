// CRUD functions
// Implémentation de GET, POST, DELETE

const Argonaute = require('../models/argonaute.js');

// GET
const getAll = async (req, res) => {
    //console.log("GET");
    try {
        const argonautes = await Argonaute.find();
        res.status(200).render('index.ejs', { argonautes: argonautes })
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

// POST
const createArgonaute = async (req, res) => {
    // console.log("Create Name : ", req.body);
    const newArgonaute = new Argonaute({ name:req.body.name })
    try {
        await newArgonaute.save();
        res.status(201).redirect("/")
    } catch(error) {
        res.status(400).json({ message : error.message});
    }
}

// DELETE : works with method-override
const deleteArgonaute = async (req, res) => {
    const name = req.params.name;
    //console.log("Delete Name : ", name)
    try {
        await Argonaute.findOneAndRemove({name: name});
        res.status(203).redirect("/")
    } catch(error) {
        res.status(402).json({message: error.message});
    }
}

module.exports.getAll = getAll;
module.exports.createArgonaute = createArgonaute;
module.exports.deleteArgonaute = deleteArgonaute;