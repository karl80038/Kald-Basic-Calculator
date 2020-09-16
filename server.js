
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.listen(3000, function(){
    console.log('Server has started on Port 3000')
});

app.get("/", function(request, response){
    response.sendFile(__dirname + '/index.html');
});

app.post("/", function(request, response){
    console.log(request.body);
    let numX = Number(request.body.txt_X);
    let numY = Number(request.body.txt_Y);
    let result = numX + numY;
    console.log("X: " + numX + " Y: " + numY);
    console.log(`${numX} + ${numY} = ${result}`);
    response.send(`${numX} + ${numY} = ${result}`);
});

