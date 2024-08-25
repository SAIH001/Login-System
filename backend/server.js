const express   = require("express");
const dotenv    =  require("dotenv").config();
const cors = require("cors");
const path =require("path");

const ConnectDB = require("./config/DB");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,'uploads')));

app.use('/user',require("./routes/userRoutes"));


app.listen(process.env.PORT,()=>{
    ConnectDB();
    console.log(`SERVER IS RUNNING ON THE PORT ${process.env.PORT} `)
})