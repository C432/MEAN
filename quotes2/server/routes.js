const api = require("./controllers");
const bp = require("body-parser");

function router(app) {
    app.use(bp.json());
    app.get("/api/authors", api.readAll);
    app.get("/api/authors/:id", api.readOne);
    app.delete("/api/authors/:id", api.deleteAuthor);
    app.delete("/api/quotes/:id", api.deleteQuote);
    app.patch("/api/authors/:id", api.editAuthor);
    app.patch("/api/quotes/:id", api.editQuote);
    app.put("/api/quotes/vote", api.addVote)
    app.post("/api/authors", api.createAuthor);
    app.post("/api/quotes", api.createQuote);

}

module.exports = router;


// app.get("/api/authors/:id")`