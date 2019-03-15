const api = require("./controllers");
const bp = require("body-parser");

function router(app) {
  app.use(bp.json());
  app.post("/api/movies", api.createMovie);
  app.get("/api/movies", api.getAllMovies);
  app.get("/api/movies/:id", api.getOneMovie);
  app.delete("/api/movies/:id", api.deleteMovie);
  app.patch("/api/movies/star/:id", api.addStar);
}

module.exports = router;
