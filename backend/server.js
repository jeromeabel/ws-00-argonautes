// Environment
if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

// Import libs
const express = require("express")
const mongoose = require('mongoose')
const path = require('path');
const cors = require('cors') // Dev Front/Back

// Import Router
const argonautesRouter = require("./src/argonautes.routes");

// App
const app = express();
const PORT = process.env.PORT;

// App use : middlewares
app.use(express.json());
if ( process.env.DB_IS_LOCAL ) app.use(cors())
app.use('/api', argonautesRouter)
app.use(express.static(path.resolve(__dirname, '../frontend/dist')));

// Database 
let uri = process.env.DB_ATLAS
if ( process.env.DB_IS_LOCAL ) uri = process.env.DB_LOCALHOST
mongoose.set('strictQuery', false)
mongoose.connect( uri ,  { useNewUrlParser: true, useUnifiedTopology: true } );
const db = mongoose.connection;
db.on('error', (err) => console.error(err))
db.once("open", function () {
  console.log("✓ Connected to Database");
});

// Server
app.listen(PORT, function() {
    console.log(`✓ Server is listening on port ${PORT}`);
})

// Serve front end page
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/dist', 'index.html'));
});