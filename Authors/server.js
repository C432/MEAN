// Imports
const express = require("express");
const path = require("path");
const router = require("./server/routes");
const app = express(); // Setup

const bodyParser = require("body-parser");
const mongoose = require("mongoose");


// Routes

app.use(express.static(__dirname + "/client/dist/client"));
console.log(__dirname);

app.use(bodyParser.json());

// app.set("views", path.join(__dirname, "/client/dist/client"));
app.set(mongoose.connect("mongodb://localhost/authors_api"), {useNewUrlParser: true});

router(app);
// require('./server/config/routes.js')(app);

app.all('**', (req, res)=>{res.sendFile(path.resolve('./client/dist/client/.html'))
});

// Listening
app.listen(8000, () => console.log("\n\n\n doing the good work all day and night! \n\n\n"));
