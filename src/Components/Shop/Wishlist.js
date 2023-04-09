import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import img1 from '../images/website/sofa/img__5.webp';
import img from '../images/website/chair/chair__12.webp';
//import Product2Img from '../images/website/cabinate/cabinate__25.webp';
// import {AiOutlineHome} from 'react-icons/ai'
import {FiChevronRight} from 'react-icons/fi'
import {IoSearchOutline,IoHeartOutline, IoHeartDislikeSharp} from 'react-icons/io5'
import { useEffect } from 'react';
import { baseUrl } from '../BaseUrl/BaseUrl';
import axios from 'axios';
import { useState } from 'react';
import { SuccessToast } from '../../Toast';
function Wishlist() {
    const navigate = useNavigate()
    let config = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
      }
      const [data,setData] = useState([])
    const getWishList = () =>{
        axios.get(baseUrl + "wishlist/get-wishlist",config).then((res)=>{
          console.log('res', res)
          setData(res?.data?.product)
      }).catch((err)=>{
          console.log('err', err)
      })
    }
    const handleUpdate = (id) =>{
        let body ={}
        axios.delete(baseUrl + `wishlist/delete-wishlist?id=${id}`,config).then((res)=>{
          console.log('res', res?.data?.create?.isWishlisted)
          SuccessToast(res?.data?.message)
        //   setStatus(false)
        getWishList()
      }).catch((err)=>{
          console.log('err', err)
      })
      }
    useEffect(()=>{
        getWishList()
    },[])
  return (
    <div>
       <div className='container'>
       <div class=" ml-3 font-bold text-3xl py-3 mt-5 border-b border-black  text-black"> My Wishlist  </div>
        <div className='container py-4 flex items-center mt-8'>
        <div className='container sm:grid grid-cols-3 gap-20 pb-16  '>

        {data?.map((val)=>{
        return(
<div className='ml-2' >
                <div class="bg-white shadow rounded overflow-hidden">  
                    <div className='relative' onClick={()=> navigate(`/productdetail/${val?.productId?._id}`)}>
                    <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                        <img src={val?.productId?.image} alt='img' style={{height:"100%"}} />
                    </div>
                    {/* <div className='absolute inset-0 bg-opacity-40 flex justify-end'>
                            <Link className='text-white text-lg w-9 h-8 mt-2 mr-2 rounded-full bg-yellow-900 flex items-center justify-center hover:bg-black transition'>
                                <IoHeartOutline/>
                            </Link>
                        </div> */}
                    </div>
                    <div className='pt-4 pb-3 px-4 text-start'>
                        <Link className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> {val?.name}</Link>
                        <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                            <p className='text-lb text-primary font-semibold'> ₹{val?.productId?.price - val?.productId?.discPrice} </p>
                            <p className='text-sm text-gray-400 line-through'> ₹{val?.productId?.price}</p>
                        </div >
                        <div className='flex flex-1'>
                        <Link>
                            <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 '>Add to cart</button>
                            </Link>
                       <Link> <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 ml-5' onClick={()=>handleUpdate(val?._id)}>UnWishlist</button> </Link>
                         
                        </div>
                           
                      
                    </div>
                    
                </div>  
                {/* <img src={val?.image} alt='img' />     */}
            </div>
        )
    })}

                
           
        </div>
            
        </div>    
    </div>
    </div>
  )
}

export default Wishlist