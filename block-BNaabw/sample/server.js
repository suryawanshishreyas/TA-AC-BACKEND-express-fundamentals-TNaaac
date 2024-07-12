var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

// Built-in middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname + '/dist'));

console.log(__dirname);

// Routing middlewares
app.get('/submit',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
})

app.get('/json',(req,res)=>{
    res.send(req.body);
})

app.get('/',(req,res)=>{
    res.send('Welcome to My Page');
})

app.get('/users',(req,res)=>{
    res.send('Welcome to Users Page');
})

app.get('/index',(req,res)=>{
    console.log(__dirname);
    res.sendFile(__dirname + '/index.html');
})
app.get('/about',(req,res)=>{
    console.log(__dirname);
    res.sendFile(__dirname + '/dist/about_me.html');
})
app.get('/contact',(req,res)=>{
    console.log(__dirname);
    res.sendFile(__dirname + '/dist/contact.html');
})
// Handling errors
app.all('*',(req,res)=>{
    res.status(404).send('Page Not Found');
})



app.listen(4000,()=>{
    console.log(`Server is listening on port 4000`);
})