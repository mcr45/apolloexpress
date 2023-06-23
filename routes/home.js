const express=require("express")
const home_route=express.Router()

home_route.get('/',(req,res)=>{
    res.send('DA qui')
})

home_route.get('/home',(req,res)=>{
    res.render('casa.ejs')
})

module.exports=home_route