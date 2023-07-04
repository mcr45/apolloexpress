const Book = require("../models/book");
const author=require('../models/author')
const bookinstances=require('../models/bookinstance')
const genre = require('../models/genre')

exports.index = async (req, res, next) => {
  try {
    const [
      numBooks,
      numBookInstances,
      numAvailableBookInstances,
      numAuthors,
      numGenres,
    ] = await Promise.all([
      Book.countDocuments({}).exec(),
      bookinstances.countDocuments({}).exec(),
      bookinstances.countDocuments({ status: "Available" }).exec(),
      author.countDocuments({}).exec(),
      genre.countDocuments({}).exec(),
    ]);  
    res.render("index", {
      title: "Local Library Home",
      book_count: numBooks,
      book_instance_count: numBookInstances,
      book_instance_available_count: numAvailableBookInstances,
      author_count: numAuthors,
      genre_count: numGenres,
    });


  } catch (error) {
    next(error)
  }
}

// Display list of all books.
exports.book_list = async (req, res, next) => {
try {
  const allBooks= await Book.find({},"title author")
  .sort({title:1})
  .populate('author')
  .exec()

  res.render("book_list",{title:"Books list",book_list:allBooks})
} catch (error) {
  next(error)
}


}

// Display detail page for a specific book.
exports.book_detail = async (req, res, next) => {/* 
  res.send(`NOT IMPLEMENTED: Book detail: ${req.params.id}`); *//* 
  const book_det=Book.find({_id:req.params.id}).exec()
  re.render('book_detail',{title:"Book detail",}) */
}

// Display book create form on GET.
exports.book_create_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book create GET");
}

// Handle book create on POST.
exports.book_create_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book create POST");
}

// Display book delete form on GET.
exports.book_delete_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book delete GET");
}

// Handle book delete on POST.
exports.book_delete_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book delete POST");
}

// Display book update form on GET.
exports.book_update_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book update GET");
}

// Handle book update on POST.
exports.book_update_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book update POST");
}
