const express=require('express')
const app=express()

require('dotenv').config()

const home = require('./routes/home')
const indexRouter=require('./routes/index')
const userRouter=require('./routes/users')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'ejs')
app.use(express.static('public'))


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