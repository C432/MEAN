const Movies = require("./models");

function createMovie(req, res) {
  Movies.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err));
}

function getAllMovies(req, res) {
  Movies.find({})
    .then(data => res.json(data))
    .catch(err => res.json(err));
}

function getOneMovie(req, res) {
  Movies.findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err));
}

// function editMovie(req, res) {
//   Movies.findByIdAndUpdate(req.params.id, req.body, {
//     runValidators: true,
//     context: "query"
//   })
//     .then(data => res.json(data))
//     .catch(err => res.json(err));
// }

function deleteMovie(req, res) {
  Movies.findByIdAndRemove(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err));
}

// function addLike(req, res) {
//   Movies.findById(req.params.id)
//     .then(data => {
//       data.like += 1;
//       data.save();
//     })
//     .then(data => res.json(data))
//     .catch(err => res.json(err));
// }

module.exports = {
  createMovie: createMovie,
  getAllMovies: getAllMovies,
  getOneMovie: getOneMovie,
//   editMovie: editMovie,
  deleteMovie: deleteMovie,
//   addLike: addLike
};
