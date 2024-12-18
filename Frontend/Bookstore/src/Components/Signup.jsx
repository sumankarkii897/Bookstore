import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
function Signup() {
    const {
        register,
        handleSubmit,
     
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
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
   
    <input type="text" name="" id="txtName" placeholder='Enter your UserName' className='w-80 px-3 py-1 border rounded-md outline-none'
    
{...register("Username", { required: true })}

    />
    <div className='text-red-600'>
     {errors.Username && <span>UserName field is required</span>}
     </div>
    </div>
    <div className='flex flex-col mt-2 space-y-3'>
    <label htmlFor='txtEmail1'>Email</label>
   
    <input type="email" name="" id="txtEmail1" placeholder='Abc@gmail.com' className='w-80 px-3 py-1 border rounded-md outline-none'
    {...register("Email", { required: true })}
    />
    <div className='text-red-600'>
     {errors.Email && <span>Email field is required</span>}
     </div>
    </div>
    <div className='flex flex-col mt-2 space-y-3'>
    <label htmlFor='txtPassword1'>Password</label>
   
    <input type="password" name="" id="txtPassword1" placeholder='Enter Your Password' className='w-80 px-3 py-1 border rounded-md outline-none'
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
        
        <p>Have accout? <span className='text-blue-500 underline cursor-pointer'><Link to={"/login"}>login</Link></span></p>
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