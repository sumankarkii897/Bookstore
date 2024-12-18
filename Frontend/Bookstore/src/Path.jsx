import React from 'react'
import Home from './Components/Pages/Home'
import Course from './Components/Pages/Course'
import Contact from './Components/Pages/Contact'
import About from './Components/Pages/About'
import { Route,Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Login1 from './Components/Login1'
export default function Path() {
  return (
    <>
    
    <Routes>
    
       <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/login' element={<Login1/>}/>
        <Route path='/signup' element={<Signup/>}/>
      
    </Routes>
    </>
  )
}
