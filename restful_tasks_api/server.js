// Imports
const xp = require('express');
const transmogrify = require('./server/routes');
const bp = require('body-parser');
const path = require('path');
const goose =  require('mongoose');
const express =  require('express');
const app = express();


const app = xp();

// Setup

// Routes
transmogrify(app);
// Listening
app.listen(8000, function (req, res) {
    console.log("listening on port 8000");
})