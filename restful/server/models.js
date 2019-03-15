const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        default: ""
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

mongoose.connect('mongodb://localhost:27017/msg_board_api', {useNewUrlParser: true},
    (errs)=>console.log(errs));

module.exports = tasks