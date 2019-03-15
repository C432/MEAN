const Messages = require('./Comments');

function createMessage(req,res)
{
    Messages.create(req.body)
            .then(data=>res.json(data))
            .catch(errs=>res.json(errs));
}

function readAll(req, res)
{
    Messages.find({})
        .then(data=>res.json(data))
        .catch(errs=>res.json(errs));
}

function createComment(req, res)
{
    let msg_id= req.body.msg_id;
    let new_comment = {
        author: req.body.author,
        comment: req.body.comment
    }
    Messages.findById(msg_id)
            .then(foundMessage=>{
                foundMessage.comments.push(new_comment);
                return foundMessage.save();
                })
            .then(data=>res.json(data))
            .catch(errs=>res.json(errs));
}
module.exports.createMessage = createMessage;
module.exports.readEverything = readAll;
module.exports.addComment =createComment;
