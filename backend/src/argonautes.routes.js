const express = require("express");

const argonauteController = require("./argonautes.controllers.js"); 

const router = express.Router();

// CRUD Routes
router.get('/', argonauteController.getAll);
router.post('/add', argonauteController.createArgonaute);
router.delete('/remove/:name', argonauteController.deleteArgonaute);

module.exports = router;