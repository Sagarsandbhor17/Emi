const mongoose=require("mongoose");

const dashboardSchema=new mongoose.Schema({
name:{type:String},
level:{type:String},
score:{type:Number}
})

const Dashboard=mongoose.model("dashboard",dashboardSchema);
module.exports=Dashboard;