// Import lib
const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path');
const methodOverride = require('method-override')

// Import custom
const argonautesRouter = require("./src/routes/argonautes.routes");

// App
const app = express()

// Apt set
app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, 'src/views'));

// App use : middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', argonautesRouter)

// Database 
mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost/', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (err) => console.error(err))
db.once('open', () => console.log('Connected to Database'))

// Launch the server
app.listen(3000, function() {
    console.log("Server started : listening on port 3000")
})