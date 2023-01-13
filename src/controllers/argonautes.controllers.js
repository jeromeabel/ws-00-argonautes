// CRUD functions : GET, POST, DELETE

const ArgonauteCollection = require('../models/argonaute.js');

// GET
const getArgonautes = async (req, res) => {
    //console.log("GET");
    try {
        const argonautes = await ArgonauteCollection.find();
        res.status(200).render('index.ejs', { argonautes: argonautes })
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

// POST
const addArgonaute = async (req, res) => {
    // console.log("Create Name : ", req.body);
    const newArgonaute = new ArgonauteCollection({ name:req.body.name })
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
        await ArgonauteCollection.findOneAndRemove({name: name});
        res.status(203).redirect("/")
    } catch(error) {
        res.status(402).json({message: error.message});
    }
}

module.exports.getAll = getArgonautes;
module.exports.createArgonaute = addArgonaute;
module.exports.deleteArgonaute = deleteArgonaute;