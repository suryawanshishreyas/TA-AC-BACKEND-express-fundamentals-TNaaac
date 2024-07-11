var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.get('/new',(req,res)=>{
    res.sendFile(__dirname + '/new.html');
})

app.post('/new',(req,res)=>{
    console.log(req.body);
})

app.get('/users/:username',(req,res)=>{
    var username = req.params.username;
    res.send(username);
})

app.listen(3000, ()=>{
    console.log(`Server is listening on port 3000`);
})