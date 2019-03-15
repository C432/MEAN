const bp = require('body-parser');
const api = require('./controller');

function router(app)
{
    app.use(bp.json());
    // create message
    app.post('/api/message', api.createMessage)
    // get all messages and stuff
    app.get('/api/message', api.readEverything)
    // create comment
    app.post('/api/comments', api.addComment)

}
module.exports = router;