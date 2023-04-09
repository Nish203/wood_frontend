import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { baseUrl } from '../BaseUrl/BaseUrl'
import img1 from '../images/reset.jpeg'
import { ErrorToast, SuccessToast } from '../../Toast'

function Resetpassword() {
  let userData = JSON.parse(localStorage.getItem("userData"))
    console.log('userData', userData)
    const navigate = useNavigate();
    const [newData, setNewData] = useState({})
    const [errMsg, setErrMsg] = useState(false)


    const handleChange = (e) => {
        let { name, value } = e.target
        setNewData({
            ...newData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
        if (newData?.o_password && newData?.password) {
            if (newData?.password == newData?.c_password) {
                let body = {
                    email: userData?.email,
                    password: newData?.password,
                    oldPassword: newData?.o_password
                }
                await axios.post(baseUrl + "users/change-password", body).then((res) => {
                    console.log('res', res)
                    setNewData({})
                    setErrMsg(false)
                    SuccessToast(res?.data.message)
                    navigate("/")
                }).catch((err) => {
                    console.log('err', err)
                    ErrorToast(err?.response?.data.message)
                })
            } else {
                ErrorToast("password and confirm password are not match")
            }

        } else {
            setErrMsg(true)
        }
    }
  return (
    <div>
      <section class="bg-gray-50 min-h-screen flex items-center justify-center">
      <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-1 items-center">
   
      <div class="md:w-1/2 px-8 md:px-16">
      <h2 class="font-bold text-2xl mb-11 text-[#7f5539]">Reset Password</h2>
     

      <form action="" class="flex flex-col">
     
     <div className='mb-4'>
        <input class="p-2 w-full rounded border bg-gray-200" type="password" name="o_password" value={newData?.o_password}
                                        onChange={(e) => handleChange(e)} placeholder="Old password" required/>
                                        {errMsg && !newData?.o_password && <div className="text-danger text-start mt-2">Old Password is required!</div>}
                                     </div>   <div className='mb-4'>
        <input class="p-2 w-full rounded border bg-gray-200" type="password" name="password" value={newData?.password}
                                        onChange={(e) => handleChange(e)} placeholder="New password" required/>
                                        {errMsg && !newData?.password && <div className="text-danger text-start mt-2">Password is required!</div>}
                                      </div>  <div className='mb-4'>
        <input class="p-2 w-full rounded bg-gray-200 border" type="password" name="c_password" value={newData?.c_password}
                                        onChange={(e) => handleChange(e)} placeholder="Confirm password" required/>
                                        {errMsg && !newData?.c_password && <div className="text-danger text-start mt-2">Confirm Password is required!</div>}
       </div>
        <button class="bg-[#7f5539] rounded w-40 text-white py-2 hover:scale-105 duration-300" onClick={handleSubmit}>Reset Password</button>
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

export default Resetpassword