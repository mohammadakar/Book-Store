import { useState } from "react";
import "../css/AddStudent.css";
import axios from "axios"
import {useNavigate} from "react-router-dom"
const AddBook = () => {
    
    
    const [author,setAuthor]=useState('');
    const [name,setName]=useState('');
    const [imageUrl,setImageUrl]=useState('');
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('https://book-store-4lc1.onrender.com/api/book/add',{name,author,imageUrl})
        .then(res=>{
            if(res.data.added){
                navigate("/books")
            }
            else{
                console.log(res)
            }
        })
            
        .catch(err=>console.log(err))
    }

    return ( 
        <div className="student-form-container">
            <form className="student-form" onSubmit={handleSubmit}>
                <h2>Add Book</h2>
                <div className="form-group">
                    <label htmlFor="roll">Book name:</label>
                    <input type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Author:</label>
                    <input type="text" name="author" id="author" onChange={(e)=>setAuthor(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="grade">Image URL:</label>
                    <input type="text" name="imageUrl" id="imageUrl" onChange={(e)=>setImageUrl(e.target.value)}/>
                </div>
                <button className="btn-register" type="submit">Add Book</button>
            </form>
        </div>
    );
}

export default AddBook;