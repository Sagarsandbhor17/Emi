const Product=require("./products.model");
const express=require("express");
const app=express.Router();

app.get("",async(req,res)=>{
    let products=await Product.find();
    return res.send(products);
})

app.post("",async(req,res)=>{
    try{const item=await Product.create(req.body);
    return res.send("Product added successfully");}
    catch(e){
        return res.send(e.message);
    }
})

app.delete("/:id",async(req,res)=>{
    let {id} =req.params;
    try{
        await Product.findByIdAndDelete(id);
      return res.send("Product Deleted");
   }
    catch(e){
        return res.send(e.messsage)
    }
})
module.exports=app;