var express =require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var app = express();

app.use(logger('dev'));
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send('Welcome');
})


app.listen(3000, ()=>{
    console.log(`Server is listening on port 3000`);
})