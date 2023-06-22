const express=require('express')
const app=express()
require('dotenv').config()
const home = require('./routes/home')


app.use('/',home)
/* app.get('/',(req,res)=>{
    res.send('CI siamo')
    
}) */


app.listen(process.env.PORT,()=>{
    console.log('bene')
})