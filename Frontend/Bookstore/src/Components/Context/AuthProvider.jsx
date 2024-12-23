import React, { createContext, useContext, useState } from 'react'

export const AuthContext=createContext()
export default function AuthProvider({children}) {
    const initailAuthUser=localStorage.getItem("user");
 const [authUser, setauthUser] = useState(initailAuthUser?JSON.parse(initailAuthUser):undefined)
  return (
   <>
   <AuthContext.Provider value={[authUser,setauthUser]}>

    {children}
   </AuthContext.Provider>
   </>
  )
}


export const useAuth=()=>useContext(AuthContext);