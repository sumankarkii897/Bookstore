import React from 'react'
import { useAuth } from './Context/AuthProvider';
import { toast } from 'react-toastify';

function Logout() {
    
    const [authUser,setauthUser]=useAuth()
    const handleLogout=()=>{
      try {
        setauthUser({...authUser,
            user:null});
            localStorage.removeItem("user");
            toast.success("Logout Sucessfully ...")
    /*     console.log("Logout Sucessfully"); */
window.location.reload();
        
      } catch (error) {
        console.log(`error :${error.message}`);
        
      }
    }
  return (
   <>
   <button className='bg-orange-600 p-1 text-white rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>
   </>
  )
}

export default Logout