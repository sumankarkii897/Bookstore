import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { toast } from 'react-toastify'
function Login() {
  const location=useLocation();
  const navigate=useNavigate();
  const from=location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
   const userCredential={
      email:data.email,
      password:data.password
    }
    await axios.post("http://localhost:3001/user/api/login",userCredential)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        /* alert("loged in sucessfully...") */
        toast.success("logged in sucessfully ...")
        document.getElementById("my_modal_3").close();
        localStorage.setItem("user",JSON.stringify(res.data.user))
        navigate(from,{replace:true})
        window.location.reload();
       
      }
      
    })
    .catch((error)=>{
      if (error.response) {
        console.log(JSON.stringify(error.response.data.msg));
        /* alert(error.response.data.msg) */
        toast.error(error.response.data.msg)
      } else {
        
        console.log(error.message);
        /* alert(error.message) */
        toast.error(error.response)
      }
      
    })
  }
  return (
  <>
 
<div className=''>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box ">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to={"/"} onClick={()=>{document.getElementById("my_modal_3").close()}} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</Link >
    <h3 className="font-bold text-lg">Login</h3>
    <div className=''>
    <div className='flex flex-col mt-2 space-y-3'>
    <label htmlFor='txtEmail'>Email</label>
   
    <input type="email" name="" id="txtEmail"placeholder={errors.email?"Email required":'Abc@gmail.com'}className={`w-80 px-3 py-1 border rounded-md outline-none ${errors.email?"border-red-500":""}`}
    {...register("email", { required: true })} 
    />
     <div className='text-red-600'>
     {errors.email && <span>Email field is required</span>}
     </div>
    </div>
    <div className='flex flex-col mt-2 space-y-3'>
    <label htmlFor='txtPassword'>Password</label>
   
    <input type="password" name="" id="txtPassword"placeholder={errors.password?"Password required":'Enter Your Password'}className={`w-80 px-3 py-1 border rounded-md outline-none ${errors.password?"border-red-500":""}`}
    {...register("password", { required: true })} 
    />
<div className='text-red-600'>
     {errors.password && <span>Password field is required</span>}
     </div>
    </div>
    </div>
    <div className='mt-3 flex justify-around'>
      <div>
        <button className='bg-pink-500 text-white border rounded-lg px-3 py-2 cursor-pointer hover:bg-pink-700'>Login</button>
      </div>
      <div className='mt-3'>
        <p>Not registerd? <span className='text-blue-500 underline cursor-pointer'><Link to={"/signup"} onClick={()=>{document.getElementById("my_modal_3").close()}}>Signup</Link></span></p>
      </div>
    </div>
    </form>
{/*     <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
  </div>
</dialog>
</div>
</>
  )
}

export default Login