const api = require('./controller');
const bp = require('body-parser');

function router(app){
    app.use(bp.json());
    app.post('/api/pets', api.createPet);
    app.get('/api/pets', api.getAllPets);
    app.get('/api/pets/:id', api.getOnePet);
    app.patch('/api/pets/:id', api.editPet);
    app.delete('/api/pets/:id', api.deletePet);
    app.patch('/api/pets/like/:id', api.addLike);
}

module.exports = router;