// import {Cakes} from "./models"
const Authors = require("./models");

function readAll(req, res) {
  Authors.find({})
    .then(data => res.json(data))
    .catch(errs => res.json(errs));
}

function readOne(req, res) {
  Authors.findById(req.params.id)
    .then(data => res.json(data))
    .catch(errs => res.json(errs));
}

function deleteOne(req, res) {
  Author.findByIdAndRemove(req.params.id)
    .then(data => res.json(data))
    .catch(errs => res.json(errs));
}
function createOne(req, res) {
  Author.create(req.body)
    .then(data => res.json(data))
    .catch(errs => res.json(errs));
}
function updateOne(req, res) {
  Author.findByIdAndUpdate(req.params.id, req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err));
}

module.exports = {
  readAll: readAll,
  readOne: readOne,
  deleteOne: deleteOne,
  createOne: createOne,
  updateOne: updateOne
};
