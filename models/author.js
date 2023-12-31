const mongoose=require('mongoose')
const Schema= mongoose.Schema

const AuthorSchema=new Schema({
first_name:{type:String,required:true,maxlength:100},
family_name:{type:String, required:true,maxlength:100},
date_of_birth:{type:Date},
date_of_death:{type:Date},
})

AuthorSchema.virtual("name").get(function(){
   /*  let fullName=''
    if(this.first_name && this.last_name){
        return fullName=`${this.first_name},${this.family_name}`
    }
    else{
    return fullName} */
   return `${this.first_name}, ${this.family_name}`
})

AuthorSchema.virtual("url").get(function(){
    return `/catalog/authors/${this._id}`
} )

module.exports=mongoose.model("Author",AuthorSchema)
