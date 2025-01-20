const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;


app.get("/", (req, res) => {
    res.send("Welcome to my MongoAPI")
});


app.post("/blogpost", (req, res) => {
res.send("this is a post request")
});



mongoose.
connect("mongodb+srv://2c1s:Yosef123@yosefsapi.zkkbt.mongodb.net/Products-API?retryWrites=true&w=majority&appName=YosefsAPI")
.then(() => {
    console.log("connected to mongo");
    app.listen(PORT, () =>{
        console.log("API is up and running on Localhost:"+ PORT)
    });
});