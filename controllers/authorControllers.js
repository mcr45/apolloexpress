const author=require('../models/author')

exports.author_list= async function (req,res,next){
res.send('ci sto lavorando')
}

exports.author_detail= async (req,res,next)=>{
res.send(`not yet ${req.params.id}`)

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