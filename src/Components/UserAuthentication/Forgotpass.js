import React, { useState } from 'react'
import img1 from '../images/reset.jpeg'
import  {Link, useNavigate}  from 'react-router-dom'
import axios from 'axios';
import { baseUrl } from '../BaseUrl/BaseUrl';
import { toast } from 'react-toastify';
import { ErrorToast, SuccessToast } from '../../Toast';

function Forgotpass() {
  const navigate = useNavigate();
  const [credetials, setCredetials] = useState({ email: "" });
    const [errMsg, setErrMsg] = useState(false)
    function updateData(e) {
        setCredetials({ ...credetials, [e.target.name]: e.target.value });
    }
    console.log(credetials);

    const loginHandler = async (e) => {
      e.preventDefault()
        if (credetials?.email) {
            await axios.post(baseUrl + "users/forgot-password", credetials).then((res) => {
                console.log('res', res)
                localStorage.setItem("email", credetials?.email)
                setCredetials({
                    email: ""
                })
                setErrMsg(false)
                toast.success(res?.data.message)
                SuccessToast(res?.data.message)
                navigate("/otppassword")
            }).catch((err) => {
                console.log('err', err)
                ErrorToast(err?.response?.data.message)
            })
        } else {
            setErrMsg(true)
        }
    }
  return (
    <div>
       <section class="bg-gray-50 min-h-screen flex items-center justify-center">
        <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div class="md:w-1/2 px-8 md:px-16">
          <h2 class="font-bold text-2xl mb-11 text-[#7f5539]">Forgot Password</h2>

            <form action="" class="flex flex-col">
              <div className='mb-4'>
                <input class="p-2  mt-1 rounded-xl border" type="email" name='email' value={credetials?.email}
                                        onChange={(e) => {
                                            updateData(e);
                                        }} placeholder="Email" required/>
                                        {errMsg && !credetials?.email && <div className="text-danger text-start mt-2">Email is required!</div>}
                                        </div>   <button class="bg-[#7f5539]  rounded-xl text-white py-2 hover:scale-105 duration-300" onClick={(e) => loginHandler(e)}>Get otp</button>
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