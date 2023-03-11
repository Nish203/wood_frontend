import React from 'react'
import img1 from '../images/reset.jpeg'
import  {Link}  from 'react-router-dom'

function Forgotpass() {
  return (
    <div>
       <section class="bg-gray-50 min-h-screen flex items-center justify-center">
        <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div class="md:w-1/2 px-8 md:px-16">
          <h2 class="font-bold text-2xl mb-11 text-[#7f5539]">Forgot Password</h2>

            <form action="" class="flex flex-col gap-4">
                <input class="p-2  mt-1 mb-4 rounded-xl border" type="email" name="email" placeholder="Email" required/>
                <button class="bg-[#7f5539]  rounded-xl text-white py-2 hover:scale-105 duration-300">Get otp</button>
            </form>
        </div>
        <div class="md:block hidden w-1/2">
          <img src={img1}/>
        </div>
        </div>
      </section>
    </div>
  
  );
}

export default Forgotpass