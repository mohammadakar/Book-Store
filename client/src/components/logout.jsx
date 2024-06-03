import axios from "axios";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom"
const Logout = ({setRole}) => {
    const navigate =useNavigate()
    useEffect(()=>{
        axios.get('https://book-store-4lc1.onrender.com/api/auth/logout')
        .then(res=>{
            if(res.data.logout){
                setRole('')
                navigate('/')
            }
        }).catch(err=>console.log(err))
    },[])
}

export default Logout;