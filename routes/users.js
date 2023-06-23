const express=require('express')
const userroute=express.Router()

userroute.get('/',(req,res,next)=>{
    res.send('resp with resource')
})

module.exports=userroute