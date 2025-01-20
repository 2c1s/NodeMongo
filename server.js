const express = require("express");
const app = express();
const PORT = 3000;





app.listen(PORT, () =>{
    console.log("API is up and running on Localhost:3000"+ PORT)
});