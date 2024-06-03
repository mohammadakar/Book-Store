
import "../css/books.css"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios";
import { useState } from "react";
const BookCard = ({book,role}) => {
    
    const {name,author,imageUrl}=book;
    const [deleted, setDeleted] = useState(false);

    const handleDeleteBook = (e) => {
        e.preventDefault();
        axios.delete(`https://book-store-4lc1.onrender.com/api/book/delete/${book._id}`)
            .then(res => {
                console.log(res);
                setDeleted(true);
            })
            .catch(err => console.log(err));
    }

    if (deleted) {
        return null;
    }
    return ( 
        <div className="book-card">
            <img src={imageUrl} alt={name} className="book-image" />
            <div className="book-details">
                <h3>{name}</h3>
                <p>{author}</p>
            </div>
            <div className="book-actions">
                {
                    role==="admin" && <>
                        <Link to={`/edit/${book._id}`} className="edit-btn">Edit</Link>
                        <button onClick={handleDeleteBook} className="delete-btn">Delete</button>
                    </>
                }
            </div>
        </div>
    );
}

export default BookCard;