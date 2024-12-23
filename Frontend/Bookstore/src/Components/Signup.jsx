import React, { useState } from 'react'
import { Link, useLocation, useNavigate,  } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axois from "axios"
import { toast } from 'react-toastify'

function Signup() {
  const location=useLocation();
  const navigate=useNavigate();
  const from =location.state?.from?.pathname || "/"
 
  const [error, setError] = useState(false)
    const {
        register,
        handleSubmit,
     
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo={
          username:data.Username,
        email:data.Email,
        password:data.Password
        }
        
       await axois.post("http://localhost:3001/user/api/signup",userInfo)
        .then((res)=>{
          console.log(res.data);
          if(res.data){
            /* alert("Singup sucessfully..") */
            toast.success("Signed In sucessfully")
            localStorage.setItem("userInfo",JSON.stringify(res.data.user));
            navigate(from,{replace:true})
           
          }
          
        })
        .catch((error)=>{
          if(error.response){
            console.log(error.message);
            /* alert(error.response.data.msg) */
            toast.error(error.response.data.msg)
          }
          else{

            console.log(error.message);
            /* alert(error.message) */
            toast.error(error.message)
          }
          
        })
      }
  return (
  <>
  <div className='flex justify-center items-center'>
  <div className="modal-box ">
    <form method="" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to={"/"}>
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      
      </Link>
    <h3 className="font-bold text-lg">Signup</h3>
    <div className=''>
    <div className='flex flex-col mt-2 space-y-3'>
    <label htmlFor='txtName'>Username</label>
   
    <input type="text" name="" id="txtName" placeholder={errors.Username?"UserName Required":"Enter Your Username"} className={`w-80 px-3 py-1 border rounded-md outline-none ${errors.Username?"border-red-500":""}`}
    
{...register("Username", { required: true })}

    />
    <div className='text-red-600'>
      
     {errors.Username && <span>UserName field is required </span>}
     </div>
    </div>
    <div className='flex flex-col mt-2 space-y-3'>
    <label htmlFor='txtEmail1'>Email</label>
   
    <input type="email" name="" id="txtEmail1" placeholder={errors.Email?"Email required":'Abc@gmail.com'} className={`w-80 px-3 py-1 border rounded-md outline-none ${errors.Email?"border-red-500":""}` }
    {...register("Email", { required: true })}
    />
    <div className='text-red-600'>
     {errors.Email && <span>Email field is required</span>}
     </div>
    </div>
    <div className='flex flex-col mt-2 space-y-3'>
    <label htmlFor='txtPassword'>Password</label>
   
    <input type="password" name="" id="txtPassword1" placeholder={errors.Password?"Password required":'Enter Your Password'} className={`w-80 px-3 py-1 border rounded-md outline-none ${errors.Password?"border-red-500":""}`}
    {...register("Password", { required: true })}
    />
    <div className='text-red-600'>

     {errors.Password && <span>Password field is required</span>}
    </div>
   
    </div>
   
    </div>
    <div className='mt-3 flex justify-around'>
      <div>
        <button className='bg-pink-500 text-white border rounded-lg px-3 py-2 cursor-pointer hover:bg-pink-700'>Signup</button>
      </div>
      <div className='mt-3'>
        
        <p>Have accout? <span className='text-blue-500 underline cursor-pointer'onClick={()=>{
         
          document.getElementById("my_modal_3").showModal();
        }}><Link to={"/"} >login</Link></span></p>
      </div>
    </div>
    </form>
{/*     <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
  </div>
</div>
</>
 
  )
}

export default Signup