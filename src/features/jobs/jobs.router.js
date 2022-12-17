const express=require("express");
const app=express.Router();
const Job=require("./jobs.model");


app.get("",async(req,res)=>{
    try{
        const page=req.query.page || 1;
        const size=req.query.size || 10;
        const jobs=await Job.find().skip((page-1)*size).limit(size);
        return res.send(jobs);
    }
    catch(e){
        return res.send(e.message);
    }
})

app.post("",async(req,res)=>{
    try{
        await Job.create(req.body);
        return res.send("Job Posted Successfully");
    }
    catch(e){
        return res.send(e.message);
    }
})

module.exports=app;