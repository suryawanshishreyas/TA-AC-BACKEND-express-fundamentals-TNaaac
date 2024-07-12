var express = require('express');
var app = express();
var logger = require('morgan');
var cookieParser = require('cookieparser');

app.use(logger('dev'));

app.get('/',(req,res)=>{
    res.send('Welcome to our website');
})

app.get('/about',(req,res)=>{
    res.send('Welcome to about section');
})

app.get('/admin',(req,res,next)=>{
    next('Unauthorised Page');
})

app.use((req,res,next)=>{
    if(req.url !== '/' || req.url !== '/about'){
        res.send('Page Not Found');
    }
})

app.use((err,req,res,next)=>{
    res.send(err);
})

app.listen(3000,()=>{
    console.log(`Server is listening port 3000`);
})

