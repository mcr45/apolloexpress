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
///define app middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'ejs')
app.use(express.static('public'))
///define app endpoints

app.use('/',indexRouter)
app.use('/users',userRouter)

/* app.get('/',(req,res)=>{
    res.send('CI siamo')
    
}) */
app.get('/vie',(req,res)=>{
    res.render('casa.ejs')
})


app.listen(process.env.PORT,()=>{
    console.log('bene')
})