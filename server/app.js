const dotenv = require("dotenv")
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cookie = require("cookie-parser");

dotenv.config({path:"./config.env"});

require("./db/conn")
// const User = require("./models/user");

//Middleware
app.use(express.json());
app.use(cookie());
app.use(require("./router/auth"));



const PORT = process.env.PORT;




app.listen(PORT, (req, res) => {
    console.log(`server is up on ${PORT}`);
})