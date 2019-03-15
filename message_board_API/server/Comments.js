const goose =  require('mongoose');
goose.connect('mongodb://localhost:27017/msg_board_api', {useNewUrlParser: true},
    (errs)=>console.log(errs));

const CommentSchema = new goose.Schema({
    author: String,
    comment: String
});

const MessageSchema = new goose.Schema({
    author: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
    comment: [CommentSchema]
});


module.exports = goose.model('message', MessageSchema);