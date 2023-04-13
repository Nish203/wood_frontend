import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { ErrorToast, SuccessToast } from '../../Toast'
import { baseUrl } from '../BaseUrl/BaseUrl'
import img1 from '../images/service.jpg';
import img2 from '../images/design.jpg';
import img3 from '../images/worker.png';
import img4 from '../images/delivery.jpg';
import img from '../images/Custome.jpg'
function Custom() {
  let userData = JSON.parse(localStorage.getItem("userData"))
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }
  }
  const [newData,setNewData] = useState({})
  const [errMsg, setErrMsg] = useState(false)
  const handleChange = (e)=>{
    let {name,value} = e.target
    setNewData({...newData,[name]:value})
  } 
  const handleSubmit = async(e)=>{
    e.preventDefault()
    if(userData){
      if(newData?.email && newData?.phone && newData?.requirement && newData?.name && newData?.quantity){
        await axios.post(baseUrl + "customization/add-customization",newData,config).then((res)=>{
          SuccessToast(res?.data?.message)
          setNewData({
              email:"",
              phone:"",
              requirement:"",
              name:"",
              quantity:"",
          })
          setErrMsg(false)
      }).catch((err)=>{
          console.log('err', err)
          ErrorToast(err?.response?.data.message)
      })
      }else{
        setErrMsg(true)
      }
    }else{
      ErrorToast("Please Login First!")
    }
    
    
  }
  return (
    <div className='container'>
<div class="  ml-10 font-bold text-4xl py-3 mt-5 border-b border-black  text-[#7f5539]"> If you can Imagine it? We can Make it!  </div>
       <section class="  mt-5 text-center block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10">
    <div class="relative mb-10 px-3 lg:mb-0">
      <div class="mb-2 flex justify-center ">
       <img src={img1}  class="h-auto max-w-s rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"/>
      </div>
      <h5 class="mb-6 font-bold text-yellow-900 mt-5">Share your Idea</h5>
      <h6 class="mb-0 font-normal text-black">Our furniture designers understand your requirements closely to craft a perfect piece.</h6>
      <div
        class="absolute top-0 right-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"></div>
    </div>


    <div class="relative mb-12 px-3 lg:mb-0">
      <div class="mb-2 flex justify-center">
        <img src={img2}   class="h-auto max-w-s rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"/>
      </div>
      <h5 class="mb-6 font-bold text-yellow-900 mt-5">Designing</h5>
      <h6 class="mb-0 font-normal  text-black">Your idea is converted into a workable 3D design for further approvals and confirmations.</h6>
      <div
        class="absolute top-0 right-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"></div>
    </div>


    <div class="relative mb-12 px-3 lg:mb-0">
      <div class="mb-2 flex justify-center">
      <img src={img3}   class="h-auto max-w-s rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"/>
      </div>
      <h5 class="mb-6 font-bold text-yellow-900 mt-5">Manufacturing</h5>
      <h6 class="mb-0 font-normal  text-black">As soon as our team receives the confirmation, manufacturing is initiated for your custom furniture.</h6>
      <div
        class="absolute top-0 right-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"></div>
    </div>


    <div class="relative mb-12 px-3 lg:mb-0">
      <div class="mb-2 flex justify-center">
      <img src={img4}   class="h-auto max-w-s rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"/>
      </div>
      <h5 class="mb-6 font-bold text-yellow-900 mt-5">Delivery</h5>
      <h6 class="mb-0 font-normal  text-black">Each custom order is treated with high priority & we ensured to deliver it on time.</h6>
    </div>
  </div>
</section>

       <div class="flex flex-col  md:flex-row"> 
       <div className='sm:ml-20 ml-2 sm: mr-10 mb-8 mt-8'>
        <div>
        <h2 class=" ml-20 mr-20 text-center font-bold text-3xl mb-10 text-[#7f5539]"> Customer Requirements</h2>
        </div>
        <div class=" grid gap-4 gap-y-2 text-m  grid-cols-1 md:grid-cols-10">

                <div class="md:col-span-10 ">
                  <label for="name"> Name </label>
                  <input type="text" name="name" value={newData?.name} onChange={(e)=> handleChange(e)} id="name" class="h-12 border mt-1 rounded px-4 w-full bg-gray-200" placeholder="Name" />
                  {errMsg && !newData?.name && <div className="text-danger text-start mb-2 ">Name is required!</div>}
                </div>
  
                <div class="md:col-span-10">
                  <label for="Description"> Email </label>
                  <input type="text" name="email" value={newData?.email} onChange={(e)=> handleChange(e)} id="Description" class="h-12 border mt-1 rounded px-4 w-full bg-gray-200" placeholder="Email" />
                  {errMsg && !newData?.email && <div className="text-danger text-start mb-2">Email is required!</div>}

                </div>
  
                <div class="md:col-span-10">
                  <label for="Description"> Mobile </label>
                  <input type="text" name="phone" value={newData?.phone} onChange={(e)=> handleChange(e)} id="Description" class="h-12 border mt-1 rounded px-4 w-full bg-gray-200" placeholder="Mobile" />
                  {errMsg && !newData?.phone && <div className="text-danger text-start mb-2">Mobile No is required!</div>}

                </div>

                <div class="md:col-span-10">
                <label for="Price"> Specific Requirement </label>
                  <textarea type="mobile" name="requirement" value={newData?.requirement} onChange={(e)=> handleChange(e)} id="Price" class="h-40 border mt-1 rounded px-4 w-full bg-gray-200"  placeholder="Requirement" />
                  {errMsg && !newData?.requirement && <div className="text-danger text-start mb-2">Specific Requirement is required!</div>}

                </div>
  
                <div class="md:col-span-10">
                  <label for="Diprice"> Quantity </label>
                  <input type="number" name="quantity" value={newData?.quantity} onChange={(e)=> handleChange(e)} id="Diprice" class="h-12 border mt-1 rounded px-4 w-full bg-gray-200"  placeholder="Quantity" />
                  {errMsg && !newData?.quantity && <div className="text-danger text-start mb-2">Quantity is required!</div>}

                </div>

                <div class="md:col-span-10 text-right">
                  <div class="inline-flex items-end">
                    <button class="bg-yellow-900 hover:bg-[#583823] text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>Submit</button>
                  </div>
                </div>
  
              </div>
    </div>

    <div className='py-5 px-5 w-50 h-50'>
        <img src={img}></img>
    </div>
  </div>
    </div>
  )
}
 
export default Custom