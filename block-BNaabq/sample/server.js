var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());
app.use(logger('dev'));

app.use((req,res,next)=>{
    res.cookie("username","shreyas");
    next();
})

app.use((req,res,next)=>{
    console.log(req.cookies.username);
    next();
})

app.get('/about',(req,res)=>{
    res.send(`Success`);
})

app.listen(3000,()=>{
    console.log(`Server is listening on port 3000`);
})