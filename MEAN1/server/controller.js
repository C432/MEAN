const Pets = require('./models');

function createPet(req, res){
    Pets.create(req.body)
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
    }
    
function getAllPets(req, res){
    Pets.find({})
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
}

function getOnePet(req, res){
    Pets.findById(req.params.id)
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
}

function editPet(req, res){
    Pets.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, context: "query"})
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
}

function deletePet(req, res){
    Pets.findByIdAndRemove(req.params.id)
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
    }
    
    function addLike(req,res){
        Pets.findById(req.params.id)
        .then(data=>{
            data.like+=1;
            data.save();
        })
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
}

module.exports = {
    createPet: createPet,
    getAllPets: getAllPets,
    getOnePet: getOnePet,
    editPet:editPet,
    deletePet: deletePet,
    addLike: addLike
}