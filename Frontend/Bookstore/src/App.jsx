import { useState } from 'react'
import Navbar from './Components/Navbar'
import { RouterProvider } from 'react-router-dom'
import Footer from './Components/Footer'
import Home from './Components/Pages/Home'
import Path from './Path'
import axios from 'axios'
import {ToastContainer} from 'react-toastify'
import { AuthContext } from './Components/Context/AuthProvider'
function App() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (menuState) => {
    setIsMenuOpen(menuState);
  };
  return (
    <>
<Navbar onMenuToggle={handleMenuToggle} />

<div className={`mt-8 md:mt-6 ${isMenuOpen ? 'mt-40 pt-44' : 'mt-28 pt-9'} transition-all`}> 
<Path/>   
</div>
<Footer/>
<ToastContainer />

    </>
  )
}

export default App
