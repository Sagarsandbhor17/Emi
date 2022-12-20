const express=require("express");
const Word = require("./word.model");
var randomWords = require('random-words');
const app=express.Router();

app.post("",async(req,res)=>{
let {level}=req.body;
try{
    let word=await Word.find();
    if(level==="Low"){
        return res.send({word:randomWords(),timer:30000});
    }
    else if(level==="Medium"){
        return res.send({word:randomWords(),timer:20000});
    }
    else if(level==="High"){
        return res.send({word:randomWords(),timer:10000})
    }
}
catch(e){
    return res.send(e.message);
}

})

module.exports=app;