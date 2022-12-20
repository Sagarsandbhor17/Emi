const mongoose=require("mongoose");

const wordSchema=new mongoose.Schema({
name:{type:String},
level:{type:String}
})

const Word=mongoose.model("word",wordSchema);
module.exports=Word;