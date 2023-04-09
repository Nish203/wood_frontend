import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { baseUrl } from '../BaseUrl/BaseUrl'
import img1 from '../images/reset.jpeg'
import { ErrorToast, SuccessToast } from '../../Toast'

function Venderdetail() {
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
        if (newData?.bankName && newData?.bankNumber && newData?.ifsc) {
          console.log('newData?.bankNumber.length', newData?.bankNumber.length)
            if (( newData?.bankNumber.length === 12 && newData?.ifsc?.length === 11)) {
                let body = {
                    bankName: newData?.bankName,
                    accountNumber: Number(newData?.bankNumber),
                    ifscCode: newData?.ifsc
                }
                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token")
                    }
                }
                await axios.post(baseUrl + "users/create-vendor", body, config).then((res) => {
                    console.log('res', res)
                    setNewData({})
                    setErrMsg(false)
                    localStorage.setItem("userData", JSON.stringify(res?.data?.user))
                    SuccessToast(res?.data.message)
                    navigate("/")
                }).catch((err) => {
                    console.log('err', err)
                    ErrorToast(err?.response?.data.message)
                })
            } else if (newData?.bankNumber.length !== 12) {
                ErrorToast("Bank Account Number must be 12 Number ")
            } else {
                ErrorToast("IFSC Code must be 11 Number")
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
    <h2 class="font-bold text-2xl mb-8 text-[#7f5539]">Add me as a vender</h2>
     

      <form action="" class="flex flex-col">
     <div  className='mb-4'>
        <input class="p-2 w-full bg-gray-200  rounded border"  name="bankName" value={newData?.bankName}
                                        onChange={(e) => handleChange(e)} placeholder="Bank name" required/>
                                        {errMsg && !newData?.bankName && <div className="text-danger text-start mt-2">Bank Name is required!</div>}
        </div> <div className='mb-4'>
        <input class="p-2 w-full bg-gray-200 rounded border"  name="bankNumber" value={newData?.bankNumber}
                                        onChange={(e) => handleChange(e)} placeholder="Bank Account Number" required/>
                                        {errMsg && !newData?.bankNumber && <div className="text-danger text-start mt-2">Bank Number is required!</div>}
        </div><div className='mb-4'>
        <input class="p-2 w-full bg-gray-200 rounded border" name="ifsc" alue={newData?.ifsc}
                                        onChange={(e) => handleChange(e)} placeholder="IFSC code" required/>
                                        {errMsg && !newData?.ifsc && <div className="text-danger text-start mt-2">Ifce Code is required!</div>}
        </div>
        <button class="bg-[#7f5539] rounded w-40 text-white py-2 hover:scale-105 duration-300" onClick={handleSubmit}>Submit </button>
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

export default Venderdetail