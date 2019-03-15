var bodyParser = require('body-parser');
const api = require("./controllers");

// const readAll = require("./server/routes");
// import {readAll} from './controllers';

function router(app) {
  app.use(bodyParser.json());
  app.post("/author", api.createOne);
  app.get("/author", api.allauthors);
  app.delete("/delete/:id", api.deleteOne);
  app.put("/author/:id", api.updateOne);
  app.get("/author/:id", api.getOne)

}
module.exports = router;
