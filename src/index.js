const express = require("express");
const dotenv=require("dotenv");
var bodyParser = require("body-parser");
const cors=require("cors");
const user=require('./features/users/users.router');
const emi=require('./features/emi/emi.router');
const product=require("./features/products/products.router");
const book=require("./features/bookmarks/bookmark.router");
const job=require("./features/jobs/jobs.router");
const word=require("./features/word/word.router");
const dashboard=require("./features/dash/dash.router");
const dbConnect=require('./config/db')
dotenv.config();
let PORT =process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.json());
app.use("/users", user);
app.use("/calculateEmi",emi);
app.use("/products",product);
app.use("/bookmarks",book);
app.use("/jobs",job);
app.use("/word",word);
app.use("/dashboard",dashboard)

app.get('/' , (req , res) => {
  res.send("<div> <h1>LIFE IS AWESOME...</h1> <h3> You are watching backend of SAGAR SANDBHOR.</h3> </div>")
})

app.listen(PORT||8080, async () => {
  await dbConnect();
  console.log(`Listening on http://localhost:${PORT}`);
});
