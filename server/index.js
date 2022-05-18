const express = require('express');
const app = express();
const mongoose = require('mongoose')


//environment file
require('dotenv').config();

//body parser
app.use(express.json());

app.get('/',(req,res)=>{
    res.json("hii i am router")
})

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server running on your port ${PORT}`)
})

//Mangodb connection

const URL = process.env.MANGO_CON
mongoose.connect(URL,()=>{
    try {
        console.log("Database Connected Successfully")
        
    } catch (error) {
        console.log("Database not connected")
    }
})