import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "./bookCard";
import "../css/books.css"
import EditBook from "./EditBook";
const Books = ({role}) => {
    
    const [books,setBooks]=useState([])

    useEffect(()=>{
        axios.get('https://book-store-4lc1.onrender.com/api/book/books')
        .then(res=>{
            setBooks(res.data)
            console.log(res)
        })
        .catch(err=>console.log(err))
    },[])

    return ( 
        <div className="book-list">
            {
                books.map(book=>{
                    return <BookCard key={book._id} book={book} role={role}></BookCard>
                })
            }
        </div>
    );
}

export default Books;