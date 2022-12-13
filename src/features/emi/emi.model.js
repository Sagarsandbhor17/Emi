const mongoose = require("mongoose");

const emiSchema = new mongoose.Schema({
  loan: { type: Number, required: true },
  interest: { type: Number, required: true, unique: true },
  months: { type: Number, required: true },
});

const Emi = mongoose.model("emi", emiSchema);
module.exports = Emi;
