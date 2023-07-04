const Genre = require("../models/genre");
const Book=require("../models/book")

// Display list of all Genre.
exports.genre_list = async (req, res, next) => {
  try {
    const allGenres= await Genre.find().sort({name:1}).exec()

    res.render('genre_list',{title:"All Genres",genre_list:allGenres});
  } catch (error) {
    next(error)
  }}


// Display detail page for a specific Genre.
exports.genre_detail = async (req, res, next) => {/* 
  res.send(`NOT IMPLEMENTED: Genre detail: ${req.params.id}`); */
try {
  const [genre_detail,book_detail]=  await Promise.all([Genre.findById(req.params.id).exec(),Book.find({genre:req.params.id}, "title summary").exec()])
  if(genre_detail=='null'){return 
    const error= new Error("not found")
    error.status=404
    next(error)}
  res.render('genre_detail', {title:"Genre detail", genre:genre_detail,books:book_detail})
  
} catch (error) {
  next(error)
}



}


// Display Genre create form on GET.
exports.genre_create_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre create GET");}


// Handle Genre create on POST.
exports.genre_create_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre create POST");}


// Display Genre delete form on GET.
exports.genre_delete_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre delete GET");}


// Handle Genre delete on POST.
exports.genre_delete_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre delete POST");}


// Display Genre update form on GET.
exports.genre_update_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre update GET");}


// Handle Genre update on POST.
exports.genre_update_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre update POST");}

