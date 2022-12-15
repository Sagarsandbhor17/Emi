const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  priority:{type:String},
  price: { type: Number},
  quantity: { type: Number},
},{timestamps:true});

const Product = mongoose.model("product", productSchema);
module.exports = Product;
