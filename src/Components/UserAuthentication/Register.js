import React from 'react'
import img1 from '../images/reset.jpeg'
import  {Link}  from 'react-router-dom'

function Register() {
  return (
    <div>
       <section class="bg-gray-50 min-h-screen flex items-center justify-center">
  
  <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
   
    <div class="md:w-1/2 px-8 md:px-16">
      <h2 class="font-bold text-2xl text-[#7f5539]">Register</h2>
      <p class="text-sm mt-4 mb-2 text-[#7f5539]">Welcome..! Enter your Detail</p>

      <form action="" class="flex flex-col gap-4">
      <input class="p-2  mt-1 rounded-xl border" type="text" name="username" placeholder="Username"/>
        <input class="p-2  mt-1 rounded-xl border" type="email" name="email" placeholder="Email"/>
        <input class="p-2  mt-1 rounded-xl border" type="number" name="mobilenumber" placeholder="mobile number"/>
        <div class="relative">
          <input class="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Password"/>   
        </div>
        <div class="relative">
          <input class="p-2 rounded-xl border w-full" type="password" name="Cpassword" placeholder="Confirm Password"/> 
        </div>
        <button class="bg-[#7f5539] rounded-xl text-white py-2 hover:scale-105 duration-300">Register</button>
      </form>

    


      <div class="mt-3 text-sm flex justify-between items-center text-[#7f5539]">
        <p>Already have an account?</p>
        <Link to="/"><button class="py-1 px-4 bg-white border rounded-xl hover:scale-110 duration-300">Login</button></Link>
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

export default Register