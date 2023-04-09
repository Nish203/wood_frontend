import React, { useState } from 'react'
import img1 from '../images/login1.jpeg'
import  {Link, useNavigate}  from 'react-router-dom'
import axios from 'axios';
import { baseUrl } from '../BaseUrl/BaseUrl';
import { toast } from 'react-toastify';
import { ErrorToast, SuccessToast } from '../../Toast';


function Login() {
  const navigate = useNavigate();
  const [credetials, setCredetials] = useState({ email: "", password: "" });
  const [errMsg, setErrMsg] = useState(false)
  function updateData(e) {
    setCredetials({ ...credetials, [e.target.name]: e.target.value });
  }
  const loginHandler = async (e) => {
    e.preventDefault()
    if (credetials?.email && credetials?.password) {
      await axios.post(baseUrl + "users/login", credetials).then((res) => {
        console.log('res', res)
        if(res?.data?.success === true){
          localStorage.setItem("token", res?.data?.token)
          localStorage.setItem("userData", JSON.stringify(res?.data?.user))
          setCredetials({
            email: "", password: ""
          })
          setErrMsg(false)
          toast.success(res?.data.message)
          SuccessToast(res?.data.message)
          navigate("/")
        }else{
          ErrorToast(res?.data?.message)
        }
        

      }).catch((err) => {
        console.log('err', err)
        toast.error(err?.response?.data.message)
        ErrorToast(err?.response?.data.message)
      })
    } else {
      setErrMsg(true)
    }
  }
  return (
    <div>
       <section class="bg-gray-50 min-h-screen flex items-center justify-center">
  
  <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-1 items-center">
   
    <div class="md:w-1/2 px-8 md:px-16">
      <h2 class="font-bold text-2xl text-[#7f5539]">Login</h2>
      <p class="text-sm mt-4 text-[#7f5539]">If you are already a Member, Easily Log in</p>

      <form action="" class="flex flex-col">
        <input class="p-2 mt-8 rounded bg-gray-200 border text-black mb-2"  name="email" value={credetials?.email}
                    onChange={(e) => {
                      updateData(e);
                    }} placeholder="Email" required/>
                    {errMsg && !credetials?.email && <div className="text-danger text-start mb-2">Email is required!</div>}
        <div class="relative mb-4">
          <input class="p-2 rounded border bg-gray-200 w-full text-black" type="password" name="password" value={credetials?.password}
                    onChange={(e) => {
                      updateData(e);
                    }} placeholder="Password" required/>
          {errMsg && !credetials?.password && <div className="text-danger text-start mt-2">Password is required!</div>}
        </div>
        <button class="bg-[#7f5539]  rounded text-white py-2 w-40  hover:scale-105 duration-300" onClick={(e) => loginHandler(e)}>Login</button>
      </form>
      
        
     

      <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
        <hr class="border-gray-400"/>
        <p class="text-center text-sm">OR</p>
        <hr class="border-gray-400"/>
      </div>
      <div class=" ml-10 text-sm  py-3 text-[#7f5539]">
      <Link to="/forgotpassword"> <p>Forgot your password ? </p> </Link>
      </div>

      <div class=" text-sm flex justify-between items-center text-[#7f5539]">
        <p>Don't have an account?</p>
        <Link to="/register"> <button class="py-1 px-4 mb-3  bg-white border rounded hover:scale-110 duration-300">Register</button> </Link>
        
      </div>
      
    </div>
    <div class="md:block hidden w-1/2">
      <img src={img1}></img>
    </div>
  </div>
</section>

    </div>
  )
}

export default Login