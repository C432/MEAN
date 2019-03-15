//Imports
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const router = require('./server/routes');

//Routes
app.use(express.static(__dirname + '/client/dist/client'));

app.use(bodyParser.json());

app.set(mongoose.connect("mongodb://localhost/authorq_api"), {
  useNewUrlParser: true
});

router(app);

app.all('*', (req,res)=>{res.sendFile(path.resolve('./client/dist/client/index.html'))
});
//Listening
app.listen(8000, () => console.log("\n\n\n doing the good work all day and night! \n\n\n"));
