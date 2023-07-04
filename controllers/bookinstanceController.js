const bookInstance =require('../models/bookinstance')

exports.bookInstance_list= async (req,res,next)=>{
try {

    let allBookInstances= await bookInstance.find().populate('book').exec()
    res.render('bookinstance_list',{title:'Book Instance List', bookinstance_list:allBookInstances}) 
} catch (error) {
    next(error)
}
}

exports.bookInstance_detail= async (req,res,next)=>{
    try {/* 
        res.send(`${req.params.id}`) */
    const bookin= await bookInstance.findById(req.params.id).populate('book').exec()
    if(bookin===null){
        const err=new Error('nonononon bookokokoko')
        err.status=404
        next(err)
    }
    res.render('bookinstance_detail',{title:'Book:',bookinstance:bookin})
    } catch (error) {
        next(error)
    }
}

exports.bookInstance_create_get= async (req,res,next)=>{

res.send('iop')
}

exports.bookInstance_create_post = async function (req,res,next){
    res.send('kjo')
}

exports.bookInstance_delete_get = async function (req,res,send){
    res.send('hey ')
}

exports.bookInstance_delete_post= async (req,res,next)=>{
 res.send('hfao')   
}

exports.bookInstance_update_post = async (req,res,next)=>{
    res.send('andsi')
}

exports.bookInstance_update_get = async (req,res,next)=>{
    res.send('fiiadofia')
}