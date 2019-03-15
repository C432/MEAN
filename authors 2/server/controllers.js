// import {Authors} from "./models"
const Authors = require("./models");
function createOne(req, res){
    Authors.create(req.body)
    .then(data => {
        console.log("got to controller-create")
        res.json(data)})
    .catch(errs => res.json(errs))
}
function allauthors(req, res) {
    Authors.find({})
      .then(data =>{
            console.log("got to controller-allauthors") 
            res.json(data)})
      .catch(errs => res.json(errs));
}

function deleteOne(req, res){
    Authors.findByIdAndRemove(req.params.id)
        .then(data =>{ 
            console.log("got to controller-delete") 
            res.json({status: 'gucci',data: 'data'})})
        .catch(errs => res.json(errs))
}

function updateOne(req, res){
    Authors.findByIdAndUpdate(req.params.id, req.body,{runValidators: true})
    .then(data => {
        console.log("got to controller-edit") 
        res.json(data)})
    .catch(errs => res.json(errs))
}
function getOne(req, res) {
    Authors.findById(req.params.id)
        .then(data => {
            console.log("got to controller-getone") 
            res.json(data)})
        .catch(errs => res.json(errs));
    }


module.exports = {
    createOne: createOne,
    allauthors: allauthors,
    deleteOne: deleteOne,
    updateOne: updateOne,
    getOne: getOne
};