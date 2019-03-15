const bp = require("body-parser");
const api = require("./controllers");
// const readAll = require("./server/routes");
// import {readAll} from './controllers';

function router(app) {
  app.use(bp.json());
  app.get("/api/authors", api.readAll);
  app.get("/api/authors/:id", api.readOne);
  app.delete("/api/delete/:id", api.deleteOne);
  app.patch("/api/update/:id", api.updateOne);
  app.post("/api/authors", api.createOne);
}
module.exports = router;
