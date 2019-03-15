const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./server/routes");
const path = require("path");

router(app);
app.use(bodyParser.json()); // safter express is declare
app.use(express.static(__dirname + "/public/dist/public")) // angular static folder step 4
app.set(mongoose.connect("mongodb://localhost/pets_test"), {
  useNewUrlParser: true
});
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("/public/dist/public/index.html"));
});
app.listen(8000, function() {
  console.log("on 8000!");
});
