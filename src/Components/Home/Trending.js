import React from 'react'
import Product1Img from '../images/website/bench/bench__9.webp';
import Product2Img from '../images/website/cabinate/cabinate__25.webp';
import Product3Img from '../images/website/dining/dining__7.webp';
import Product4Img from '../images/website/mirror/mirror__5.webp';
import Product5Img from '../images/website/sofa/1seater__7.webp';
import Product6Img from '../images/website/wardrobe/wd__15.webp';
// import Product7Img from './images/website/sofa/img__6.jpg';
// import Product8Img from './images/website/cabinate/cabinate__21.webp';
import {IoBagHandleOutline,IoHeartOutline} from 'react-icons/io5'
import { NavLink } from 'react-bootstrap';
import axios from 'axios';
import { baseUrl } from '../BaseUrl/BaseUrl';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




const Trending = () => {
  const navigate = useNavigate()
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }
  }
  const [data,setData] = useState([])
  const [filterData,setFilterData] = useState({
    min:"",
    max:""
  })

  const getData = () =>{
    let body ={min:filterData?.min,max:filterData?.max}
    axios.post(baseUrl + "product/get-product",body,config).then((res)=>{
        console.log('res', res)
        setData(res?.data?.product)
    }).catch((err)=>{
        console.log('err', err)
    })
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div class="bg-white ">
    <div class="mx-auto max-w-2xl py-5 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-3xl  text-black">Best-Sellers Of The Season</h2>

    <div class="mt-10 grid grid-cols-1  gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">   
    {data?.map((val,i)=>{
      if(i<=7){
        return(
<div class="group relative " onClick={()=> navigate(`/productdetail/${val?._id}`)}>  
                <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                      <img src={val?.image} alt='img' style={{height:"100%"}} class="w-100 max-w-s transition duration-300 ease-in-out hover:scale-110"/>
                </div>
                <div className='pt-4 pb-3 px-4 text-start'>
           <NavLink className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> {val?.name} </NavLink>
              <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                <p className='text-lb text-primary font-semibold'> ₹{val?.price - val?.discPrice} </p>
                <p className='text-sm text-gray-400 line-through'> ₹{val?.price} </p>
              </div>
        </div>
        
      </div> 
        )
      }
    })}
           
    </div>

  </div>
</div>

  )
}

export default Trending
