const bp = require("body-parser");
const api = require("./controllers");
const {readOne, readAll, createOne, editOne, deleteOne}= require("./controllers");
// import {readAll} from './controllers';

function router(app) {
  app.use(bp.json());
  app.post("/api/authors", api.createOne);
  app.get("/api/authors", api.readAll);
  app.get("/api/authors/:id", api.readOne);
  app.patch("/api/authors/:id", api.editOne);
  app.delete("/api/authors/:id", api.deleteOne);


}
module.exports = router;
