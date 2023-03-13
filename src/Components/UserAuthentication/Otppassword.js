import axios from 'axios';
import React, { Component, useState } from 'react';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ErrorToast, SuccessToast } from '../../Toast';
import { baseUrl } from '../BaseUrl/BaseUrl';
import img1 from '../images/reset.jpeg'

// export default class Otppassword extends Component {
//   state = { otp: '' };

//   handleChange = (otp) => this.setState({ otp });

//   render() {
//     return (
      
//       <div>
//        <section class="bg-gray-50 min-h-screen flex items-center justify-center">
  
//       <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
   
//       <div class="md:w-1/2 px-8 md:px-16">
//       <h2 class="font-bold text-2xl mb-11 text-[#7f5539]">Enter OTP </h2>
      

//       <form action="" class="flex flex-col gap-4">
      
//         <OtpInput className='h-full w-full py-1 ' 
//           value={this.state.otp}
//           onChange={this.handleChange}
//           numInputs={6}
//         />
//         <button class="bg-[#7f5539] rounded-xl text-white py-2 hover:scale-105 duration-300">Submit</button>
//       </form>
//     </div>
//     <div class="md:block hidden w-1/2">
//     <img src={img1}/>
//     </div>
//   </div>
// </section>

//     </div>
//     );
//   }
// }

function Otppassword() {
  const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [errMsg, setErrMsg] = useState(false)

    const resendOtp = async (e) => {
      e.preventDefault()
        let body = {
            email: localStorage.getItem("email")
        }
        await axios.post(baseUrl + "users/forgot-password", body).then((res) => {
            console.log('res', res)
            toast.success(res?.data.message)
            navigate("/otppassword")
        }).catch((err) => {
            console.log('err', err)
        })
    }
    const otpVerify = async (e) => {
      e.preventDefault()
      if (otp) {
          let body = {
              email: localStorage.getItem("email"),
              otp: Number(otp)
          }
          await axios.post(baseUrl + "users/verify-otp", body).then((res) => {
              console.log('res', res)
              setOtp("")
              setErrMsg(false)
              toast.success(res?.data.message)
              SuccessToast(res?.data.message)
              navigate("/changepassword")
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
      <h2 class="font-bold text-2xl mb-11 text-[#7f5539]">Enter OTP </h2>
      

      <form action="" class="flex flex-col gap-4">
      
        <OtpInput className='h-full w-full py-1 ' 
          value={otp}
          onChange={setOtp}
          numInputs={6}
        />
        <button class="bg-[#7f5539] rounded-xl text-white py-2 hover:scale-105 duration-300" onClick={otpVerify}>Submit</button>
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

export default Otppassword