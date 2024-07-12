var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());

// a cookieparser
app.use((req,res,next)=>{
    var count = req.cookies.count;
    if(count){
        res.cookie("count", Number(count) + 1);
    }
    else{
        res.cookie("count",1);
    }
    console.log(count);
    next();
})

// error handler for unauthorised access
app.use('/admin',(req,res,next)=>{
    next('Unauthorised');
})

// routing middlewares
app.get('/',(req,res)=>{
    res.send('<h1>Welcome to express</h1>');
})

app.get('/about',(req,res)=>{
    res.send('My name is qwerty');
})

app.post('/json',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
})

// handling form data using req.body
app.post('/form',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
})

// Basic routes
app.get('/users/:username',(req,res)=>{
    var username = req.params.username;
    res.send(`<h1>${username}</h1>`);
})

// handling exceptional routes
app.all('*',(req,res)=>{
    res.status(404).send(`<h2>Error! Page Not Found</h2>`);
})

app.use((err,req,res,next)=>{
    res.send(err);
})

app.listen(3000,()=>{
    console.log(`Server is listening on port 3000`);
})

