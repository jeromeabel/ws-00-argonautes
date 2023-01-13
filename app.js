// Environment
if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

// Import lib
const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path');
const methodOverride = require('method-override')

// Import custom
const argonautesRouter = require("./src/routes/argonautes.routes");

// App
const app = express();
const PORT = process.env.PORT;

// Apt set
app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, 'src/views'));

// App use : middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', argonautesRouter)

// Database 
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_BASE}?retryWrites=true&w=majority`;
mongoose.set('strictQuery', false)
//process.env.DB_ATLAS
mongoose.connect( uri ,  { useNewUrlParser: true, useUnifiedTopology: true } );
const db = mongoose.connection;
db.on('error', (err) => console.error(err))
db.once("open", function () {
  console.log("Connected successfully");
});

// Launch the server
app.listen(PORT, function() {
    console.log(`Server is listening on port ${PORT}`);
})