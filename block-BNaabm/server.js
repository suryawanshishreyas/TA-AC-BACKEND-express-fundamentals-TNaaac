var express = require('express');

var app = express();

function logger(req,res,next){
    console.log(req.method, req.url);
    next();
}

app.use(logger);

app.get('/',(req,res)=>{
    res.send('Welcome');
});

const port = 3000;

app.listen(port,()=>{
    console.log(`Server is listening on port http://localhost:${port}`);
})