const express = require('express')

const router = express.Router()

const authorController= require('../controllers/authorControllers')
const bookController= require('../controllers/bookControllers')
const book_instance_controller= require('../controllers/bookinstanceController')
const genre_controller= require('../controllers/genreController')

router.get('/',bookController.index)

router.get('/book/create',bookController.book_create_get)
router.post('/book/create',bookController.book_create_post)

router.get('/book/:id/delete',bookController.book_delete_get)
router.post('/book/:id/delete',bookController.book_delete_post)

router.get('/book/:id/update',bookController.book_update_get)
router.post('/book/:id/update',bookController.book_update_post)

router.get('/books',bookController.book_list)
router.get('/book/:id',bookController.book_detail)


router.get('/authors/create',authorController.author_create_get)
router.post('/authors/create',authorController.author_create_post)

router.get('/author/:id/delete',authorController.author_delete_get)
router.post('/author/:id/delete',authorController.author_delete_post)

router.get('/authors/:id/update',authorController.author_update_get)
router.post('/author/:id/update',authorController.author_update_post)

router.get('/author/:id',authorController.author_detail)
router.get('/authors',authorController.author_list)


// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get("/genre/create", genre_controller.genre_create_get);

//POST request for creating Genre.
router.post("/genre/create", genre_controller.genre_create_post);

// GET request to delete Genre.
router.get("/genre/:id/delete", genre_controller.genre_delete_get);

// POST request to delete Genre.
router.post("/genre/:id/delete", genre_controller.genre_delete_post);

// GET request to update Genre.
router.get("/genre/:id/update", genre_controller.genre_update_get);

// POST request to update Genre.
router.post("/genre/:id/update", genre_controller.genre_update_post);

// GET request for one Genre.
router.get("/genre/:id", genre_controller.genre_detail);

// GET request for list of all Genre.
router.get("/genres", genre_controller.genre_list); 

/// BOOKINSTANCE ROUTES ///

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get(
  "/bookinstance/create",
  book_instance_controller.bookInstance_create_get);

// POST request for creating BookInstance.
router.post(
  "/bookinstance/create",
  book_instance_controller.bookInstance_create_post
);

// GET request to delete BookInstance.
router.get(
  "/bookinstance/:id/delete",
  book_instance_controller.bookInstance_delete_get
);

// POST request to delete BookInstance.
router.post(
  "/bookinstance/:id/delete",
  book_instance_controller.bookInstance_delete_post
);

// GET request to update BookInstance.
router.get(
  "/bookinstance/:id/update",
  book_instance_controller.bookInstance_update_get);

// POST request to update BookInstance.
router.post(
  "/bookinstance/:id/update",
  book_instance_controller.bookInstance_update_post);

// GET request for one BookInstance.
router.get("/bookinstance/:id", book_instance_controller.bookInstance_detail);

// GET request for list of all BookInstance.
router.get("/bookinstances", book_instance_controller.bookInstance_list);

module.exports = router;





