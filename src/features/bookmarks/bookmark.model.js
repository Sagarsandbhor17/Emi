const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  priority:{type:String},
  price: { type: Number},
  quantity: { type: Number},
},{timestamps:true});

const Bookmark = mongoose.model("bookmark", bookmarkSchema);
module.exports = Bookmark;