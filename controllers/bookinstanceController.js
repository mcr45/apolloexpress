const bookInstance =require('../models/bookinstance')

exports.bookInstance_list= async (req,res,next)=>{
try {
    res.send('no non nono')
} catch (error) {
    next(error)
}
}

exports.bookInstance_detail= async (req,res,next)=>{
    try {
        res.send(`${req.params.id}`)
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