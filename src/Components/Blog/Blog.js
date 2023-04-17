import axios from 'axios';
import moment from 'moment/moment';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../BaseUrl/BaseUrl';
import img from '../images/website/chair/chair__12.webp';

function Blog() {
    const navigate = useNavigate()
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }
  }
  const [data,setData] = useState([])

  const getData = () =>{
    axios.get(baseUrl + "blog/get-blog",config).then((res)=>{
        console.log('res', res)
        setData(res?.data?.blog)
    }).catch((err)=>{
        console.log('err', err)
    })
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className='container'>
        <div class=" ml-5 font-bold text-4xl py-3 mt-4 border-b border-black text-yellow-800"> Blog  </div>
       
        
        <div className='container sm:grid grid-cols-3 gap-10 mb-10 mt-5 '>
            {data?.map((v)=>{
                return(
                    <div class=" bg-white  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 duration-300 hover:-translate-y-2">
    <a href="#">
        <img class="rounded-t-lg w-full " src={v?.image}    alt="" style={{height:"300px"}} />
    </a>
    <div className='flex justify-between mx-3 mb-3 mt-2'>
                    <div>{moment(v?.createdAt).format("DD/MM/YYYY")}</div>
                    <div>{moment(v?.createdAt).format("LT")}</div>
    </div>
    <div class="px-5">
        <a href="#">
            
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{v?.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{v?.desc}</p>
      
    </div>
</div>
                )
            })}
    


{/* <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={img} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      
    </div>
</div>

<div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={img} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      
    </div>
</div>

<div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={img} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      
    </div>
</div> */}


           
        </div>
            
        </div>    
   
  )
}

export default Blog