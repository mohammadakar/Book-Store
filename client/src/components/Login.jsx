import { useState } from "react";
import "../css/Login.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"
const Login = ({setRole}) => {
    console.log(setRole)
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [role,SetRole]=useState("student")
    const navigate=useNavigate();
    axios.defaults.withCredentials=true;
    const handleSubmit=()=>{
        axios.post('http://localhost:3500/api/auth/login',{username,password,role})
        .then(res=>{
            if(res.data.login && res.data.role=='admin'){
                setRole('admin')
                navigate('/dashboard')
            }else if(res.data.login && res.data.role=='student') {
                setRole('student')
                navigate('/')
            }
        })
        .catch(err=>console.log(err))
    }
    return ( 
        <div className="login-page">
            <div className="login-container">
                <h2 className="login-title">Login</h2> <br />
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" placeholder="Enter your name" onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="role">Role:</label>
                    <select name="role" id="role" onChange={(e)=>SetRole(e.target.value)}>
                        <option value="student">Student</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button className="btn-login" onClick={handleSubmit}>Login</button>
            </div>
        </div>
    );
}

export default Login;