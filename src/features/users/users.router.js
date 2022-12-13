const express = require("express");
const User = require("./users.model");

const app = express.Router();


app.get('',async(req,res)=>{
  let users=await User.find();
  res.status(201).send(users);
})

app.post("/signup", async (req, res) => {
  const { name, email, password,} = req.body;

  const oldUser = await User.findOne({ email });
  if (oldUser) {
    return res.send({ status: false, message: "User already exist!" });
  }
  // --------------------------
  const user = await User.create({
    name,
    email,
    password,
  });
  return res.send({ status: true, message: "You have signup Successfully" });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });
  if (!user) {
    return res.send({ status: false, message: "Wrong Credential!" });
  }
else{
    return res.send({user});
}
});

app.get("/getProfile",async(req,res)=>{
    const {email}=req.body;
    const user=await User.findOne({email});
    if(!user){
        return res.send("You dont have any account");
    }
    else{
        return res.send({user});
    }
})

module.exports = app;
