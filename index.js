const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//very important when you use json file
app.use(bodyParser.json())

const port = 4200;
const empRoutes = require('./routes/empRoutes')
const logger = (req,res,next) => {
    console.log(req.path)
    next();
}

app.use(logger);
app.use('/employee',empRoutes)





app.get('/',(req,res) => {
    res.send('string send')
})

app.get('/static',(req,res) => {
    res.sendFile('./view.html',{root:__dirname})
})

app.get('/json',(req,res) => {
    var jsonData =[{name:'Jack',age:23},{name:'Soman',age:40}];
    res.json(jsonData);
})

app.listen(port, () => {
    console.log(`Example app listening on port 4200`)
  })