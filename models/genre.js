const moongose=require("mongoose")
const Schema=moongose.Schema
const GenreSchema=new Schema({
    name:{type:String,required:true,minlength:3,maxlength:100},

})

GenreSchema.virtual("url").get(function(){
    return `/catalog/genre/${this._id}`

    
})

module.exports=moongose.model("Genre",GenreSchema)