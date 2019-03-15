const api = require("./controllers");
const bodyParser = require("body-parser");

function router(app) {
    app.use(bodyParser.json());
    app.post("/api/pets", api.createOne);
    app.get("/api/pets/:id", api.readOne);
    app.get("/api/pets", api.readAll);
    app.delete("/api/pets/:id", api.deleteOne);
    app.patch("/api/pets/:id", api.editOne);
 

}

module.exports = router;