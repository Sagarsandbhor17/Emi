const express=require("express");
const Dashboard = require("./dash.model");
const app=express.Router();

app.get("",async(req,res)=>{
    try{
        let data=await Dashboard.find();
        let upd=data.sort((a,b)=>{return b.score-a.score});
        return res.send(upd);
    }
    catch(e){
        return res.send(e.message);
    }
})

app.post("",async(req,res)=>{
    try{await Dashboard.create(req.body);return res.send("Player Added")}
    catch(e){return res.send(e.message)}
})