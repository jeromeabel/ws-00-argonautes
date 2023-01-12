const express = require("express");

const argonauteController = require("../controllers/argonautes.controllers.js"); 

const router = express.Router();

// CRUD : GET, POST, DELETE
router.get('/', argonauteController.getAll);
router.post('/add', argonauteController.createArgonaute);
router.delete('/remove/:name', argonauteController.deleteArgonaute);

module.exports = router;