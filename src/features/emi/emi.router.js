const express = require("express");
const { find } = require("./emi.model");
const Emi = require("./emi.model");

const app = express.Router();

app.get("/", async (req, res) => {
  const { loan, interest, months,} = req.body;
  let cal=await Emi.find()
  let emi=((loan*interest)/12)*[(1+interest/12)^months]/[(1+loan/12)^months-1];
  let int=interest/12/100;
  let total=loan*(1+int)^months;
  return res.send({emi,int,total})

});


module.exports = app;
