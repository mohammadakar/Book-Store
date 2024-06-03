const mongoose=require("mongoose");

const bookSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true,
    }
})

const Book=mongoose.model('book',bookSchema);

module.exports=Book;