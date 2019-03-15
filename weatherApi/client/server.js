// Imports
const express = require("express");
const router = require("./server/routes");
const bp = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

const app = express(); // Setup

// Routes

app.use(express.static(__dirname + '/client/dist/client'))
console.log(__dirname)
app.set('views', path.join(__dirname, '/client/dist/client'))
app.set(mongoose.connect('mongodb://localhost/rest_task_api'), { useNewUrlParser: true })

router(app)
// Listening
app.listen(8000, function (req, res) {
  console.log("\n\n\n\n\n\n\n doing the good work all day and night! \n\n\n\n\n\n");
});

