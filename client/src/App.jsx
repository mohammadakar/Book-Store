import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Books from "./components/Books"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import AddStudent from "./components/AddStudent"
import { useEffect, useState } from "react"
import Logout from "./components/logout"
import axios from "axios"
import AddBook from "./components/AddBook"
import EditBook from "./components/EditBook"

function App() {
  const [role,setRole]=useState('')

  axios.defaults.withCredentials=true;
  useEffect(()=>{
      axios.get('https://book-store-4lc1.onrender.com/api/auth/verify')
      .then(res=>{
          if(res.data.login){
              setRole(res.data.role)
          }else{
              setRole('')
          }
          console.log(res);
      }).catch(err=>console.log(err))
  },[])

  return (
    <BrowserRouter>
      <Navbar role={role}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books role={role}/>} />
        <Route path="/login" element={<Login setRole={setRole}/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/addstudent" element={<AddStudent/>} />
        <Route path="/logout" element={<Logout setRole={setRole}/>} />
        <Route path="/addbook" element={<AddBook/>} />
        <Route path="/edit/:id" element={<EditBook/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
