const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  priority:{type:String},
  price: { type: Number, required: true, min: 0, max: 400 },
  quantity: { type: Number, required: true, min: 0, max: 100 },
},{timestamps:true});

const Bookmark = mongoose.model("bookmark", bookmarkSchema);
module.exports = Bookmark;