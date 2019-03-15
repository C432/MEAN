const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
mongoose.connect('mongodb://localhost:27017/retake', {useNewUrlParser: true});

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, "Name must be 3 characters long or more"]
    },
    type: {
        type: String,
        minlength: [3, "Type must be 3 characters long or more"]
    },
    description:{
        type: String,
        minlength: [3, "Description must be 3 characters long or more"]
    },
    skill1: {type: String},
    skill2: {type: String},
    skill3: {type: String},
    like:{
        type: Number,
        default: 0
    }
}, {timestamps: true})

const Pets = mongoose.model('pets', PetSchema);
PetSchema.plugin(unique,{
    message: 'This Is Unique'
});
module.exports = Pets;