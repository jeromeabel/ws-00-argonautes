// Environment
if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

// Import lib
const express = require("express")
//const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path');
const cors = require("cors");
const methodOverride = require('method-override')

// Import custom
const argonautesRouter = require("./src/routes/argonautes.routes");

// App
const app = express();
const PORT = process.env.PORT;

// Apt set
//app.set('view engine', 'ejs')
//app.set("views", path.join(__dirname, 'src/views'));

// App use : middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'))
app.use(cors());
app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', argonautesRouter)

// Database 
let uri = process.env.DB_ATLAS
if ( process.env.DB_IS_LOCAL ) uri = process.env.DB_LOCALHOST
mongoose.set('strictQuery', false)
mongoose.connect( uri ,  { useNewUrlParser: true, useUnifiedTopology: true } );
const db = mongoose.connection;
db.on('error', (err) => console.error(err))
db.once("open", function () {
  console.log("Connected to Database successfully");
});

// Server
app.listen(PORT, function() {
    console.log(`Server is listening on port ${PORT}`);
})