const author = require('../models/author')
const book=require('../models/book')

exports.author_list= async function (req,res,next){
    try {
        const allAuthors= await author.find().sort({family_name:1}).exec()
        res.render('author_list',{title:'Author list',author_list:allAuthors})
    } catch (error) {
        next(error)
    }
}

exports.author_detail= async (req,res,next)=>{/* 
res.send(`not yet ${req.params.id}`) */
try {
    const [theauthor,bookbyauthor]= await Promise.all([author.findById(req.params.id).exec(),
        book.find({author:req.params.id}, "title summary").exec()])
if(theauthor===null){
    const err = new Error('non ci sono authors')
    err.status=404
    next(err)
}
res.render('author_detail',{title:"author  Detail", author:theauthor,boka:bookbyauthor})
} catch (error) {
    
}

}


exports.author_create_get= async (req,res,next)=>{
    res.send('')
}

exports.author_create_post= async (req,res,next)=>{
   /*  try {
        
    } catch (error) {
        
    } */
res.send('not yet')
}

exports.author_delete_get=async (req,res,next)=>{
res.send('not yet')
}

exports.author_delete_post     =async (req,res,next)=>{
res.send('not yet')
}

exports.author_update_get  =async function (req,res,next){
    res.send('no non ancora')
}



exports.author_update_post  =async function (req,res,next){
    res.send('no non ancora')
}