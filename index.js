const express = require('express');
const app = express();
const port = 4200;

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