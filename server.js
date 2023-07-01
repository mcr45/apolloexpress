////define express app
const express=require('express')
const app=express()
///define env var
require('dotenv').config()
// define database connection

const mongoose=require('mongoose')
mongoose.set('strictQuery',false)
const mongodb=process.env.mongourl
main().catch((err)=>{console.log(err)})
async function main(){
    await mongoose.connect(mongodb)
}



////define routes
const home = require('./routes/home')
const indexRouter=require('./routes/index')
const userRouter=require('./routes/users')
const catalogRouter=require('./routes/catalog')
///define app middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))/* 
app.set('view engine', 'ejs') */
app.set('view engine', 'pug')
app.use(express.static('public'))
///define app endpoints

app.use('/',indexRouter)
app.use('/users',userRouter)
app.use('/catalog',catalogRouter)

/* app.get('/',(req,res)=>{
    res.send('CI siamo')
    
}) */
app.get('/vie',(req,res)=>{
    res.render('casa.ejs')
})
app.get('/proviamo',(req,res)=>{
    res.render('layout.ejs',{content:'prova',title:'eccoci'})
})


app.listen(process.env.PORT,()=>{
    console.log('bene')
})