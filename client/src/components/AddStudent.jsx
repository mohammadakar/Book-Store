import { useState } from "react";
import "../css/AddStudent.css";
import axios from "axios"
import { toast ,ToastContainer} from 'react-toastify';
import {useNavigate} from "react-router-dom"
const AddStudent = () => {
    
    
    const [username,setUsername]=useState('');
    const [roll,setRoll]=useState('');
    const [grade,setGrade]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('https://book-store-4lc1.onrender.com/api/student/register',{roll,username,grade,password})
        .then(res=>{
            if(res.data.alreadyRegistered){
                toast.error("Student already registered")
            }
            else if(res.data.registered){
                toast.success('Registration successful');
                navigate('/dashboard')
            }
        })
            
        .catch(err => {
            console.log(err);
            toast.error('An error occurred');
        });
    }

    return ( 
        <div className="student-form-container">
            <ToastContainer />
            <form className="student-form" onSubmit={handleSubmit}>
                <h2>Add Student</h2>
                <div className="form-group">
                    <label htmlFor="roll">Roll No:</label>
                    <input type="text" name="roll" id="roll" onChange={(e)=>setRoll(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="grade">Grade:</label>
                    <input type="text" name="grade" id="grade" onChange={(e)=>setGrade(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button className="btn-register" type="submit">Register</button>
            </form>
        </div>
    );
}

export default AddStudent;