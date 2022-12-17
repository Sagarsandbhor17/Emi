const express=require("express");
const app=express.Router();
const Job=require("./jobs.model");


app.get("",async(req,res)=>{
    try{
        const page=req.query.page || 1;
        const size=req.query.size || 10;
        const order=req.query.orderBy;
        const jobs=await Job.find().skip((page-1)*size).limit(size);

        if(order==="asc"){
            let upd=jobs.sort((a,b)=>new Date(a.postedAt) - new Date(b.postedAt));
            return res.send(upd);
        }
        else{
            let upd=jobs.sort((a,b)=>new Date(b.postedAt) - new Date(a.postedAt));
            return res.send(upd);
        }
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