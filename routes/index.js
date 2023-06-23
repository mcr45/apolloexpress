const express=require("express")
const home_route=express.Router()

home_route.get('/',(req,res)=>{
    res.render('casa.ejs',{title:"Express"})
})

home_route.get('/home',(req,res)=>{
    res.render('casa.ejs')
})

module.exports=home_route