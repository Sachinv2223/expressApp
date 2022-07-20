const express = require('express');
const router = express.Router(); //this is the one should be exported

const empData = require('../emp')

//get
router.get('/list',(req,res)=>{
    res.json({
        success:1,
        items: empData
    })
})

//getById
router.get('/list/:id',(req,res)=>{
    let id = req.params.id;
    console.log({id});
    let newArray = empData.filter((item) => {
        if(item.id === Number(id)) {
            return item;
        }
    });
    return res.json({
        success:1,
        item: newArray
    })
})

//post
router.post('/list',(req,res)=>{
    let body = req.body;
    console.log({body});
    if(!(body.id)) {
        return res.json({
        sucess:0,
        message:'no id found'
        }) 
    }
     else {
        empData.push(body);
    }

    res.json({
        success:1,
        items: empData
    })
})

//put (by Id)
router.put('/list/:id',(req,res)=>{
    let id = req.params.id;
    let body = req.body;
    let data = empData.map((item) => {
        if (item.id === Number(id)){
            item = body;
        }
        return body;
    })
    res.json({
        success:1,
        item: data
    })
})

//delete (by Id)
router.delete('/list/:id',(req,res)=>{
    let id = req.params.id;
    let newArray = empData.filter((item) => {
        if(item.id !== Number(id)) {
            return item;
        }
    });
    return res.json({
        success:1,
        message:'Data deleted succesfully',
        item: newArray
    })
})





module.exports = router;
