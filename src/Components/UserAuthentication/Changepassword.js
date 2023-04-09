import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ErrorToast, SuccessToast } from '../../Toast';
import { baseUrl } from '../BaseUrl/BaseUrl';
import img1 from '../images/reset.jpeg'

function Changepassword() {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
        password: "",
        c_password: "",
    });
    const [errMsg, setErrMsg] = useState(false)

    function onChangeHandler(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onClickHandler = async (e) => {
      e.preventDefault()

        if (formData?.password && formData?.c_password) {
            if (formData?.password === formData?.c_password) {
                let body = {
                    email: localStorage.getItem('email'),
                    password: formData.password,
                }
                await axios.post(baseUrl + "users/verify-password", body).then((res) => {
                    console.log('res', res)
                    setFormData({
                        password: "",
                        c_password: "",
                    })
                    localStorage.clear()
                    navigate("/login")
                    SuccessToast("Password Changed Successfully!")
                }).catch((err) => {
                    console.log('err', err)
                    ErrorToast(err?.response?.data.message)
                })
            } else {
                toast.error("Password and Confirm Password does not match!")
                ErrorToast("Password and Confirm Password does not match!")
            }
        } else {
            setErrMsg(true)
            console.log('first')
        }
    }
  return (
    <div>
       <section class="bg-gray-50 min-h-screen flex items-center justify-center">
  
  <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-1 items-center">
   
    <div class="md:w-1/2 px-8 md:px-16">
    <h2 class="font-bold text-2xl mb-8 text-[#7f5539]">Change Password</h2>
     

      <form action="" class="flex flex-col">
     
     <div className='mb-4'>
        <input class="p-2 w-full rounded border bg-gray-200" type="password" name="password" onChange={(e) => onChangeHandler(e)} placeholder="New password" required/>
        {errMsg && !formData?.password && <div className="text-danger mt-2 text-start">New Password is required!</div>}
        </div>
        <div className='mb-4'>
        <input class="p-2 w-full rounded border bg-gray-200" type="password" name="c_password" onChange={(e) => onChangeHandler(e)} placeholder="Confirm password" required/>
        {errMsg && !formData?.c_password && <div className="text-danger text-start mt-2">Confirm Password is required!</div>}
        </div>
        <button class="bg-[#7f5539] rounded w-40 text-white py-2 hover:scale-105 duration-300" onClick={onClickHandler}>Change Password</button>
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

export default Changepassword