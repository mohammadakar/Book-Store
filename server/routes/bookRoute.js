const { addBook, getAllBooks, editBook, getBook, deleteBook } = require("../controllers/bookController");
const { verifyAdmin } = require("../utils/verifytoken");
const router =require("express").Router();

router.post("/add",verifyAdmin,addBook)
router.get("/books",getAllBooks)
router.get("/book/:id",getBook)
router.put("/edit/:id",verifyAdmin,editBook)
router.delete("/delete/:id",deleteBook)
module.exports=router;