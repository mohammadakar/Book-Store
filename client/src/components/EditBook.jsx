
import { useEffect, useState } from "react";
import "../css/AddStudent.css";
import axios from "axios"
import {useNavigate, useParams} from "react-router-dom"
const EditBook = () => {
    
    
    const [author,setAuthor]=useState('');
    const [name,setName]=useState('');
    const [imageUrl,setImageUrl]=useState('');
    const navigate=useNavigate();
    const { id } =useParams();

    useEffect(()=>{
        axios.get(`http://localhost:3500/api/book/book/${id}`)
        .then(res=>{
            console.log(res);
            setName(res.data.name);
            setAuthor(res.data.author);
            setImageUrl(res.data.imageUrl);
        })
        .catch(err=>console.log(err))
    },[])

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:3500/api/book/edit/${id}`,{name,author,imageUrl})
        .then(res=>{
            if(res.data.edited){
                console.log(res);
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
                <h2>Edit Book</h2>
                <div className="form-group">
                    <label htmlFor="roll">Edit book name:</label>
                    <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Edit author:</label>
                    <input type="text" name="author" id="author"  value={author} onChange={(e)=>setAuthor(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="grade">Edit image URL:</label>
                    <input type="text" name="imageUrl" id="imageUrl"  value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)}/>
                </div>
                <button className="btn-register" type="submit">Edit Book</button>
            </form>
        </div>
    );
}

export default EditBook;