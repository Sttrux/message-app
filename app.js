const express = require("express");
const app = express();
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");


//views location 

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//public location 

const assetsPublic = path.join(__dirname, "public");
app.use(express.static(assetsPublic));
//midleware for trasnform form into json 
app.use(express.urlencoded({extended:true}));

//Routes of router
app.use("/", indexRouter);



















const PORT = 8080;

app.listen(PORT,()=>{
    console.log(`This app is running on port ${PORT}`)
})