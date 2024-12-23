import React from 'react'
import Home from './Components/Pages/Home'
import Course from './Components/Pages/Course'
import Contact from './Components/Pages/Contact'
import About from './Components/Pages/About'
import { Navigate, Route,Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Login1 from './Components/Login1'
import { useAuth } from './Components/Context/AuthProvider'
export default function Path() {
 
  const[authUser,setauthUser]=useAuth();
  console.log(authUser);
  return (
    <>
    
    <Routes>
    
       <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/* to protect course component */}
        <Route path='/course' element={authUser?<Course/>:<Navigate to={"/signup"}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      
    </Routes>
    </>
  )
}
