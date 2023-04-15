import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import {FaQuoteLeft} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { baseUrl } from '../BaseUrl/BaseUrl'
import { useEffect } from 'react'
import {AiFillStar} from "react-icons/ai"


const Reviewslide = () => {
  let config = {
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
    }
}
  const [data,setData] = useState([])
  const getData = async() =>{
    await axios.get(baseUrl + "review/getReview",config).then((res)=>{
      console.log('res', res)
      setData(res?.data?.review)
    }).catch((err)=>{
      console.log('err', err)
    })
      }
      useEffect(()=>{
        getData()
      },[])
  return (
    
  

 
<section class="mb-20 text-gray-700 px-10 ">
  <div class="flex ">
    {/* <h3 class="text-3xl  mb-16 text-gray-800   "> Customer Review </h3> */}
    <h2 class="text-3xl ml-20 text-black">Customer Review</h2>
   
  </div>

  <div class=" px-2 grid md:grid-cols-3 gap-5 lg:gap-12">
    {data?.map ((val,i)=>{
      if(i<=2){
        return(
          <div class=" px-3 py-3 mb-12 md:mb-0 block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
      
      <h5 class="text-xl font-semibold mb-3">{val?.name}</h5>
      <div class="flex   mt-3 mb-3">
          {/* <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> */}
        {val?.rating === 5 ? <>
                <AiFillStar color="rgb(255, 215, 0)"/>
                <AiFillStar color="rgb(255, 215, 0)"/>
                <AiFillStar color="rgb(255, 215, 0)"/>
                <AiFillStar color="rgb(255, 215, 0)"/>
                <AiFillStar color="rgb(255, 215, 0)"/>
                </> : val?.rating === 4 ? <>
                <AiFillStar color="rgb(255, 215, 0)"/>
                <AiFillStar color="rgb(255, 215, 0)"/>
                <AiFillStar color="rgb(255, 215, 0)"/>
                <AiFillStar color="rgb(255, 215, 0)"/>
                <AiFillStar />
                </>  :val?.rating === 3 ? <>
                <AiFillStar color="rgb(255, 215, 0)"/>
                <AiFillStar color="rgb(255, 215, 0)"/>
                <AiFillStar color="rgb(255, 215, 0)"/>
                <AiFillStar/>
                <AiFillStar />
                </> : val?.rating === 2 ? <>
                <AiFillStar color="rgb(255, 215, 0)"/>
                <AiFillStar color="rgb(255, 215, 0)"/>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                </> : val?.rating === 1 ? <>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                </> : ""}
      </div>
      
      <p class="mb-4">
       <FaQuoteLeft class="w-6 pr-2 inline-block"/>
        {val?.review}
      </p>
     
    </div>
        )
      }
    })}
    
    
    
  </div>

  <div className='ml-20 mt-10'>
      <Link to="/writereview"><button className=' py-2 px-4 fond-bold tarcking-wide leading-7 text-white bg-black rounded hover:shadow-xl '> Add Review </button></Link>
    </div>
</section>

  )
}

export default Reviewslide




