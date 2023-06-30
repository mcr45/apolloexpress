const express=require("express")
const home_route=express.Router()

home_route.get('/',(req,res)=>{
    res.redirect('/catalog')
})

home_route.get('/home',(req,res)=>{
    res.render('casa.ejs',{title:"Express"})
})

module.exports=home_route