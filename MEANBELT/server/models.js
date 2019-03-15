=const mongoose = require("mongoose");
const unique = require("mongoose-unique-validator");
// const PetSchema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/pets_test", {
    useNewUrlParser: true
}, (errs) => console.log(errs || 'db = gucci'));

const PetSchema = new mongoose.Schema(
    // _id : Schema.Types.ObjectId,
  {
    name: {
      type: String,
      minlength: [3, "you need longer name"],
      unique: true //VERY important for validating
    },
    type: {
      type: String,
      minlength: [2, "need more from you budday"],
      
    },
    description: {
      type: String,
      minlength: [2, "needs us a longer description, partner"],
      
    },
    skill1: {
      type: String,
      default: '',
      
    },
    skill2: {
      type: String,
      default: '',
      
    },
    skill3: {
      type: String,
      default: '',
      
    },
    like: {
      type: Number,
      default: 0,
    }
  },
  { timestamps: true }
);

const Pets = mongoose.model('pet', PetSchema);
PetSchema.plugin(unique, {message: "This is not Unique"});
// unique validator

module.exports = Pets;