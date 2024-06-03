const Book = require("../models/Book");


module.exports.addBook=async (req,res,next)=>{
    try {
        const {name,author,imageUrl}=req.body;
        const newBook= new Book({
            name,
            author,
            imageUrl
        })
        await newBook.save();
        res.status(200).json({added:true})
    } catch (error) {
        next(error)
    }
}

module.exports.getAllBooks=async (req,res,next)=>{
    try {
        const books=await Book.find();
        res.status(200).json(books)
    } catch (error) {
        next(error)
    }
}

module.exports.editBook=async (req,res,next)=>{
    try {
        const {name,author,imageUrl}=req.body;
        const book =await Book.findByIdAndUpdate(req.params.id,{
            $set:{
                name:name,
                author:author,
                imageUrl:imageUrl
            }},{new:true})
        res.status(200).json({edited:true})
    } catch (error) {
        next(error)
    }
}

module.exports.getBook=async (req,res,next)=>{
    try {
        const book=await Book.findById(req.params.id);
        res.status(200).json(book)
    } catch (error) {
        next(error)
    }
}

module.exports.deleteBook=async(req,res,next)=>{
    try {
        const book=await Book.findByIdAndDelete(req.params.id);
        res.status(200).json({deleted:true})
    } catch (error) {
        next(error)
    }
}