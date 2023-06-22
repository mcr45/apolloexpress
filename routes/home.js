const express=require("express")
const home_route=express.Router()

home_route.get('/',(req,res)=>{
    res.send('DA qui')
})

home_route.get('/home',(req,res)=>{
    res.send('Amici e amiche')
})

module.exports=home_route