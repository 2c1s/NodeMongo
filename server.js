require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;
const Product = require("./models/productModel")
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to my MongoAPI")
});


app.post("/blogpost", (req, res) => {
res.send("this is a post request")
});


app.post("/api/product", async (req, res) => {

    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(404);
    }



   // console.log(req.body);
   // res.send(req.body);
});


mongoose.
connect(process.env.MONGO_URI)
.then(() => {
    console.log("connected to mongo");
    app.listen(PORT, () =>{
        console.log("API is up and running on Localhost:"+ PORT)
    });
});