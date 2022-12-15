const express=require("express");
const Bookmark=require("./bookmark.model");
const app=express.Router();

app.get("",async(req,res)=>{
    let book=await Bookmark.find();
    return res.send(book);
})

app.post("",async(req,res)=>{
    try{await Bookmark.create(req.body);
    return res.send("Bookmarked")}
    catch(e){
        return res.send(e.message);
    }
})

app.delete("/:id",async(req,res)=>{
    let {id}=req.params;
    try{
        await Bookmark.findByIdAndDelete(id);
        res.send("deleted")
    }
    catch(e){
        return res.send(e.message);
    }
})
module.exports=app;