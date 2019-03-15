const express = require('express');
var path = require('path');

const app = express();
const port = 8000;
app.use(express.static(__dirname+'pblic/dist/'));

app.all('*', (req,res,next)=>(
    res.sendFile(path.resolve("./public/dist/index.html"))));




app.listen(port, function(){
    console.log('LISTENING *** PORT: ',port)
});