import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { FaRegSun } from "react-icons/fa6";
import Login from './Login';
import { useAuth } from './Context/AuthProvider';
import Logout from './Logout';
export default function Navbar({ onMenuToggle }) {
 
  const[authUser,setauthUser]=useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 const[isThemeWhite,setIsThemeWhite]=useState(false)
  const[isSticky,setIsSticky]=useState(false)
  const[theme,setTheme]=useState(localStorage.getItem('theme')||"light")
  const element=document.documentElement;
  useEffect(()=>{
if(theme==='dark'){
  element.classList.add("dark")
  localStorage.setItem("theme","dark")
  document.body.classList.add("dark")
}
else{
  element.classList.remove("dark")
  localStorage.setItem("theme","light")
  document.body.classList.remove("dark")

}

  },[theme])
   useEffect(() => {
    if (onMenuToggle) {
      onMenuToggle(isMenuOpen); 
    }
  }, [isMenuOpen, onMenuToggle]); 
  useEffect(()=>{
const handleScroll=()=>{
  if(window.scrollY>0){
    setIsSticky(true);
  }
  else{
    setIsSticky(false)
  }
}
window.addEventListener('scroll',handleScroll)
return ()=>{
  window.removeEventListener('scroll',handleScroll)
}

  },[])
  const changeTheme=()=>{
    console.log("theme change")

    setIsThemeWhite(!isThemeWhite)
  }
const changeThemeLight=()=>{
  console.log('theme changed light ...');
 setTheme(theme==='dark'?
  "light":"dark"
)
changeTheme()
}
const changeThemeDark=()=>{
  console.log('theme changed dark ...');
 setTheme(theme==='light'?
  "dark":"light"
 )
 changeTheme()
}
  return (
    <>
     <div className={`bg-base-100 max-w-screen-2xl fixed top-0 left-0 right-0 z-50  dark:bg-slate-900 dark:text-white ${isMenuOpen?"h-40":""} ${isSticky?"sticky-navbar shadow-md bg-base-200 dark:bg-slate-600 duration-300 transition-all ease-in-out":""}`}>
     <div className="container  py-3">
        <div className="flex justify-between items-center relative">
          <p className="md:text-xl font-bold text-sm">BookStore</p>
          <div className="flex items-center gap-3 ">
            
            <ul
              className={`md:flex md:text-xl items-center gap-3   ${isMenuOpen?"max-h-[999px] absolute  top-11 left-0 px-4 mt-[2px] w-full  overflow-hidden transition-all duration-200":"max-h-0 hidden"} `}
            >
              <li><Link to="/">Home</Link></li>
              <li><Link to="/course">Course</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
            <div className={`relative block`}>
              <input
                type="text"
                className="border md:pl-10 md:pr-10 md:py-2 rounded md:w-full w-28 dark:bg-slate-900 dark:text-white"
                placeholder="Search"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                
                  <IoSearch />
               
              </span>
            </div>

            {/* Theme Toggle Icon */}
            <div className="py-2 items-center md:text-2xl text-[18px] cursor-pointer duration-300 "onClick={()=>{console.log("Theme");
            }}>
             {
              isThemeWhite? <FaRegMoon onClick={changeThemeDark}/>:<FaRegSun onClick={changeThemeLight} />
             }
            </div>
          </div>

          {/* Login Button */}
          {/* for login and logout */}
        {
authUser?<Logout/>:<div >
            <button onClick={()=>{document.getElementById("my_modal_3").showModal()}}className="bg-gray-600 text-white md:p-2 rounded-md cursor-pointer hover:bg-slate-800 duration-300 text-sm p-1">
              Login
            </button>
            <Login/>
          </div>
        }
         {/* <div >
            <button onClick={()=>{document.getElementById("my_modal_3").showModal()}}className="bg-gray-600 text-white md:p-2 rounded-md cursor-pointer hover:bg-slate-800 duration-300 text-sm p-1">
              Login
            </button>
            <Login/>
          </div> */}
         

          {/* Hamburger Icon */}
          <div
            className="text-xl md:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <IoMdMenu />
          </div>
        </div>
      </div>
     </div>
    </>
  );
}
