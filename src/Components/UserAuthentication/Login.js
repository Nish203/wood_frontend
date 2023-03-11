import React from 'react'
import img1 from '../images/login1.jpeg'
import  {Link}  from 'react-router-dom'


function Login() {
  return (
    <div>
       <section class="bg-gray-50 min-h-screen flex items-center justify-center">
  
  <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
   
    <div class="md:w-1/2 px-8 md:px-16">
      <h2 class="font-bold text-2xl text-[#7f5539]">Login</h2>
      <p class="text-sm mt-4 text-[#7f5539]">If you are already a member, easily Log in</p>

      <form action="" class="flex flex-col gap-4">
        <input class="p-2 mt-8 rounded-xl border text-black" type="email" name="email" placeholder="Email" required/>
        <div class="relative">
          <input class="p-2 rounded-xl border w-full text-black" type="password" name="password" placeholder="Password" required/>
         
        </div>
        <button class="bg-[#7f5539] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
      </form>

      <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
        <hr class="border-gray-400"/>
        <p class="text-center text-sm">OR</p>
        <hr class="border-gray-400"/>
      </div>
      <div class="mt-5 ml-10 text-sm  py-4 text-[#7f5539]">
      <Link to="forgotpassword"> <p>Forgot your password ? </p> </Link>
      </div>

      <div class="mt-1 text-sm flex justify-between items-center text-[#7f5539]">
        <p>Don't have an account?</p>
        <Link to="/register"> <button class="py-1 px-4  bg-white border rounded-xl hover:scale-110 duration-300">Register</button> </Link>
        
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