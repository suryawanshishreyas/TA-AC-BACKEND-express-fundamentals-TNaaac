var express = require('express');
var app = express();

app.get('/',(req,res)=>{
    res.send('Welcome to Index Page')
})

app.listen(3000, ()=>{
    console.log(`Server is listening on port 3000`);
})