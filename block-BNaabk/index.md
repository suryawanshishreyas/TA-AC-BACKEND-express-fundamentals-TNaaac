writeCode

Create a basic express server with single route (a GET request on '/' route)

> > created a server.js file.

- create a `package.json` file
- install express
- add listener on port 3000
- handle a single route i.e. GET request on index route

var express = require('express');

var app = express();

app.get('/',(req,res)=>{
res.send('Welcome to Index Page')
})

app.listen(3000, ()=>{
console.log(`Server is listening on port 3000`);
})
