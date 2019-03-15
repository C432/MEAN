const mongoose = require("mongoose");
const unique = require("mongoose-unique-validator");
mongoose.connect(
  "mongodb://localhost:27017/movies",
  { useNewUrlParser: true }
);

const MovieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: ['yep, tis required'],
      minlength: [3, "Name must be 3 characters long or more"]
    },
    user: {
      type: String,
      minlength: [3, "Type must be 3 characters long or more"],
      required: ['yep, tis required'],
    },
    description: {
      type: String,
      minlength: [3, "Description must be 3 characters long or more"],
      required: ['yep, tis required'],

    },
    star: {
      type: Number,
      default: 1,
      required: ['yep, tis required'],
    }
  },
  { timestamps: true }
);

const Movies = mongoose.model("movies", MovieSchema);
MovieSchema.plugin(unique, {
  message: "This Is Unique"
});
module.exports = Movies;
