import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Slider, RangeSlider } from 'rsuite';
import {IoBagHandleOutline} from 'react-icons/io5'
import Img from '../images/website/bed/bed__1.webp';
import {AiOutlineHome} from 'react-icons/ai'
import {FiChevronRight} from 'react-icons/fi'
import {IoHeartOutline} from 'react-icons/io5'
import { useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../BaseUrl/BaseUrl';
import { useEffect } from 'react';
import { ErrorToast, SuccessToast } from '../../Toast';

function Shoppage() {
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
    let body ={min:filterData?.min ?? null ,max:filterData?.max ?? null,letter : null}
    axios.post(baseUrl + "product/get-product",body,config).then((res)=>{
        console.log('res', res)
        setData(res?.data?.product)
    }).catch((err)=>{
        console.log('err', err)
    })
  }
  const handleSubmit = (id) =>{
    let body={
        productId:id,
        productQuantity:1
    }
    axios.post(baseUrl +`product/addToCart`,body,config).then((res)=>{
        console.log('res', res)
        SuccessToast(res?.data?.message)
        getData()
    }).catch((err)=>{
        console.log('err', err)
        ErrorToast(err?.response?.data?.message)
    })
  }
  useEffect(()=>{
    getData()
  },[filterData])
  return (
    <div className='py-10'>
    

    {/* SIDEBAR */}

    <div className='container sm:grid grid-cols-4 gap-3 pb-16  '>
        <div className=' md:self-start sm:sticky top-0 bg-white  col-span-1 px-4 pb-6 rounded shadow overflow-hidden '>
            <div className=' divide-y divide-gray-200 space-y-5 '>

{/* Categories */}
                {/* <div className=''>
                    <h3 className='text-xl text-gray-800 mb-3 uppercase font-medium '>  Categories </h3>
                    <div className='space-y-2 space-x-2'>
                        <div className='flex items-center'>
                            <input type="checkbox" id="cat-1" className='ml-2 text-primary focus:ring-0 rounded-sm cursor-pointer'/>  
                            <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer '>Bed</label>
                            
                        </div>

                        <div className='flex items-center'>
                            <input type="checkbox" id="cat-1" className='text-primary focus:ring-0 rounded-sm cursor-pointer'/>  
                            <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer'>Sofa</label>
                          
                        </div>

                        <div className='flex items-center'>
                            <input type="checkbox" id="cat-1" className='text-primary focus:ring-0 rounded-sm cursor-pointer'/>  
                            <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer'>Table</label>
                           
                        </div>

                        <div className='flex items-center'>
                            <input type="checkbox" id="cat-1" className='text-primary focus:ring-0 rounded-sm cursor-pointer'/>  
                            <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer'>Cabinate</label>
                           
                        </div>
                    </div>
                </div> */}
{/* Price */}
                {/* <div>
                    
                    <h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'> Price  </h3>
                    <div className=''>
                        <RangeSlider defaultValue={[10, 50]} />
                    </div>

                </div> */}
                 <div className='py-4'> 
                            <h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'> Price </h3>
                            <div className='space-y-2 space-x-2'>
                            
                                <div className='flex items-center'>
                                    <input type="checkbox" id="cat-1" className='ml-2 text-primary focus:ring-0 rounded-sm cursor-pointer' checked={filterData?.min === 0} onClick={()=>setFilterData({min:0,max:4999})}/>  
                                    <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer'> ₹0 - ₹4,999</label>
                                
                                </div>

                                <div className='flex items-center'>
                                    <input type="checkbox" id="cat-1" className='text-primary focus:ring-0 rounded-sm cursor-pointer' checked={filterData?.min === 5000} onClick={()=>setFilterData({min:5000,max:9999})}/>  
                                    <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer '>₹5,000 - ₹9,999</label>
                                    
                                </div>

                                <div className='flex items-center'>
                                    <input type="checkbox" id="cat-1" className='text-primary focus:ring-0 rounded-sm cursor-pointer' checked={filterData?.min === 10000} onClick={()=>setFilterData({min:10000,max:14999})}/>  
                                    <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer'>₹10,000 - ₹14,999</label>
                                    
                                </div>

                                <div className='flex items-center'>
                                    <input type="checkbox" id="cat-1" className='text-primary focus:ring-0 rounded-sm cursor-pointer' checked={filterData?.min === 15000} onClick={()=>setFilterData({min:15000,max:19999})}/>  
                                    <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer'>₹15,000 - ₹19,999</label>
                                    
                                </div>
                                <div className='flex items-center'>
                                    <input type="checkbox" id="cat-1" className='text-primary focus:ring-0 rounded-sm cursor-pointer' checked={filterData?.min === ""} onClick={()=>setFilterData({min:"",max:""})}/>  
                                    <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer'>All</label>
                                    
                                </div>
                            </div>
                    </div>
{/* Discount */}
{/* <div className='py-4'> 
                        <h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>Product Type </h3>
                        <div className='space-y-2 space-x-2'>
                            <div className='flex items-center'>
                                <input type="checkbox" id="cat-1" className='ml-2 text-primary focus:ring-0 rounded-sm cursor-pointer'/>  
                                <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer'> Bar Table</label>
                            
                            </div>

                            <div className='flex items-center'>
                                <input type="checkbox" id="cat-1" className='text-primary focus:ring-0 rounded-sm cursor-pointer'/>  
                                <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer '> Coffee Table</label>
                                
                            </div>

                            <div className='flex items-center'>
                                <input type="checkbox" id="cat-1" className='text-primary focus:ring-0 rounded-sm cursor-pointer'/>  
                                <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer'>Study Table</label>
                                
                            </div>

                        </div>
                </div> */}
            </div>
        </div>
{/* Product Detail */}
        {/* <div className=''>
            <div className='col-span-1'>
                <div class="bg-white shadow rounded overflow-hidden">  
                    <div className='relative'>
                    <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                        <img src={Img} alt='' />
                    </div>
                    <div className='absolute inset-0 bg-black bg-opacity-40 flex justify-end'>
                            <Link className='text-white text-lg w-9 h-8 mt-2 mr-2 rounded-full bg-yellow-900 flex items-center justify-center hover:bg-black transition'>
                                <IoHeartOutline/>
                            </Link>
                        </div>
                    </div>
                    <div className='pt-4 pb-3 px-4 text-start'>
                        <Link className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Product_name </Link>
                        <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                            <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                            <p className='text-sm text-gray-400 line-through'> ₹3800 </p>
                        </div>
                            <Link>
                            <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 '>Add to cart</button>
                            </Link>
                       <Link> <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 ml-5'>Buy Now</button> </Link>
                        
                      
                    </div>
                    
                </div>      
            </div>
                
            <div className='col-span-1 mt-10'>
                <div class="bg-white shadow rounded overflow-hidden">  
                    <div className='relative'>
                    <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                        <img src={Img} alt='' />
                    </div>
                    <div className='absolute inset-0 bg-black bg-opacity-40 flex justify-end'>
                            <Link className='text-white text-lg w-9 h-8 mt-2 mr-2 rounded-full bg-yellow-900 flex items-center justify-center hover:bg-black transition'>
                                <IoHeartOutline/>
                            </Link>
                        </div>
                    </div>
                    <div className='pt-4 pb-3 px-4 text-start'>
                        <Link className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Product_name </Link>
                        <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                            <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                            <p className='text-sm text-gray-400 line-through'> ₹3800 </p>
                        </div>
                        <Link>
                            <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 '>Add to cart</button>
                            </Link>
                       <Link> <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 ml-5'>Buy Now</button> </Link>
                    </div>
                    
                </div>      
            </div>

            <div className='col-span-1 mt-10'>
                <div class="bg-white shadow rounded overflow-hidden">  
                    <div className='relative'>
                    <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                        <img src={Img} alt='' />
                    </div>
                    <div className='absolute inset-0 bg-black bg-opacity-40 flex justify-end'>
                            <Link className='text-white text-lg w-9 h-8 mt-2 mr-2 rounded-full bg-yellow-900 flex items-center justify-center hover:bg-black transition'>
                                <IoHeartOutline/>
                            </Link>
                        </div>
                    </div>
                    <div className='pt-4 pb-3 px-4 text-start'>
                        <Link className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Product_name </Link>
                        <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                            <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                            <p className='text-sm text-gray-400 line-through'> ₹3800 </p>
                        </div>
                        <Link>
                            <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 '>Add to cart</button>
                            </Link>
                       <Link> <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 ml-5'>Buy Now</button> </Link>
                    </div>
                   
                </div>      
            </div>
        </div>

        <div className=''>
            <div className='col-span-1'>
                <div class="bg-white shadow rounded overflow-hidden">  
                    <div className='relative'>
                    <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                        <img src={Img} alt='' />
                    </div>
                    <div className='absolute inset-0 bg-black bg-opacity-40 flex justify-end'>
                            <Link className='text-white text-lg w-9 h-8 mt-2 mr-2 rounded-full bg-yellow-900 flex items-center justify-center hover:bg-black transition'>
                                <IoHeartOutline/>
                            </Link>
                        </div>
                    </div>
                    <div className='pt-4 pb-3 px-4 text-start'>
                        <Link className='uppercase font-medium text-lg  mb-2 text-gray-800 hover:text-primary transition text-start'> Product_name </Link>
                        <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                            <p className='text-lg text-primary font-semibold'> ₹3500 </p>
                            <p className='text-sm text-gray-400 line-through'> ₹3800 </p>
                        </div>
                        <Link>
                            <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 '>Add to cart</button>
                            </Link>
                       <Link> <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 ml-5'>Buy Now</button> </Link>
                    </div>
                    
                </div>      
            </div>
                
            <div className='col-span-1 mt-10'>
                <div class="bg-white shadow rounded overflow-hidden">  
                    <div className='relative'>
                    <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                        <img src={Img} alt='' />
                    </div>
                    <div className='absolute inset-0 bg-black bg-opacity-40 flex justify-end'>
                            <Link className='text-white text-lg w-9 h-8 mt-2 mr-2 rounded-full bg-yellow-900 flex items-center justify-center hover:bg-black transition'>
                                <IoHeartOutline/>
                            </Link>
                        </div>
                    </div>
                    <div className='pt-4 pb-3 px-4 text-start'>
                        <Link className='uppercase font-medium text-lg  mb-2 text-gray-800 hover:text-primary transition text-start'> Product_name </Link>
                        <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                            <p className='text-lg text-primary font-semibold'> ₹3500 </p>
                            <p className='text-sm text-gray-400 line-through'> ₹3800 </p>
                        </div>
                        <Link>
                            <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 '>Add to cart</button>
                            </Link>
                       <Link> <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 ml-5'>Buy Now</button> </Link>
                    </div>
                    
                </div>      
            </div>
        </div>

       <div className=''>
            <div className='col-span-1'>
                <div class="bg-white shadow rounded overflow-hidden">  
                    <div className='relative'>
                    <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                        <img src={Img} alt='' />
                    </div>
                    <div className='absolute inset-0 bg-black bg-opacity-40 flex justify-end'>
                            <Link className='text-white text-lg w-9 h-8 mt-2 mr-2 rounded-full bg-yellow-900 flex items-center justify-center hover:bg-black transition'>
                                <IoHeartOutline/>
                            </Link>
                        </div>
                    </div>
                    <div className='pt-4 pb-3 px-4 text-start'>
                        <Link className='uppercase font-medium text-lg  mb-2 text-gray-800 hover:text-primary transition text-start'> Product_name </Link>
                        <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                            <p className='text-lg text-primary font-semibold'> ₹3500 </p>
                            <p className='text-sm text-gray-400 line-through'> ₹3800 </p>
                        </div>
                        <Link>
                            <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 '>Add to cart</button>
                            </Link>
                       <Link> <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 ml-5'>Buy Now</button> </Link>
                    </div>
                    
                </div>      
            </div>
                
            <div className='col-span-1 mt-10'>
                <div class="bg-white shadow rounded overflow-hidden">  
                    <div className='relative'>
                    <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                        <img src={Img} alt='' />
                    </div>
                    <div className='absolute inset-0 bg-black bg-opacity-40 flex justify-end'>
                            <Link className='text-white text-lg w-9 h-8 mt-2 mr-2 rounded-full bg-yellow-900 flex items-center justify-center hover:bg-black transition'>
                                <IoHeartOutline/>
                            </Link>
                        </div>
                    </div>
                    <div className='pt-4 pb-3 px-4 text-start'>
                        <Link className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Product_name </Link>
                        <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                            <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                            <p className='text-sm text-gray-400 line-through'> ₹3800 </p>
                        </div>
                        <Link>
                            <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 '>Add to cart</button>
                            </Link>
                       <Link> <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 ml-5'>Buy Now</button> </Link>
                    </div>
                    
                </div>      
            </div>
        </div> */}

<div className='col-span-3 grid grid-cols-3 gap-3'>
    {data?.map((val)=>{
        return(
<div className='ml-2' >
                <div class="bg-white shadow rounded overflow-hidden">  
                    <div className='relative' onClick={()=> navigate(`/productdetail/${val?._id}`)}>
                    <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                        <img src={val?.image} alt='img' style={{height:"100%"}} />
                    </div>
                    {/* <div className='absolute inset-0 bg-opacity-40 flex justify-end'>
                            <Link className='text-white text-lg w-9 h-8 mt-2 mr-2 rounded-full bg-yellow-900 flex items-center justify-center hover:bg-black transition'>
                                <IoHeartOutline/>
                            </Link>
                        </div> */}
                    </div>
                    <div className='pt-4 pb-3 px-4 text-start'>
                        <Link className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> {val?.name}</Link>
                        <div className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> {val?.subCategory?.name}</div>
                        <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                            <p className='text-lb text-primary font-semibold'> ₹{val?.price - val?.discPrice} </p>
                            <p className='text-sm text-gray-400 line-through'> ₹{val?.price}</p>
                        </div >
                        <div className='flex flex-1'>
                        <Link>
                            <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 'onClick={()=>val?.quantity === 0 ? "":handleSubmit(val?._id)} >{val?.quantity === 0 ? "Out of Stock":"Add to cart"}</button>
                            </Link>
                       {/* <Link> <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 ml-5'>Buy Now</button> </Link> */}
                         
                        </div>
                           
                      
                    </div>
                    
                </div>  
                {/* <img src={val?.image} alt='img' />     */}
            </div>
        )
    })}
            
                
            {/* <div className='col-span-1 mt-10'>
                <div class="bg-white shadow rounded overflow-hidden">  
                    <div className='relative'>
                    <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                        <img src={Img} alt='' />
                    </div>
                    <div className='absolute inset-0 bg-black bg-opacity-40 flex justify-end'>
                            <Link className='text-white text-lg w-9 h-8 mt-2 mr-2 rounded-full bg-yellow-900 flex items-center justify-center hover:bg-black transition'>
                                <IoHeartOutline/>
                            </Link>
                        </div>
                    </div>
                    <div className='pt-4 pb-3 px-4 text-start'>
                        <Link className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Product_name </Link>
                        <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                            <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                            <p className='text-sm text-gray-400 line-through'> ₹3800 </p>
                        </div>
                        <div className='flex flex-1'>
                        <Link>
                            <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 '>Add to cart</button>
                            </Link>
                       <Link> <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 ml-5'>Buy Now</button> </Link>
                         
                        </div>
                    </div>
                    
                </div>      
            </div>

            <div className='col-span-1 mt-10'>
                <div class="bg-white shadow rounded overflow-hidden">  
                    <div className='relative'>
                    <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                        <img src={Img} alt='' />
                    </div>
                    <div className='absolute inset-0 bg-black bg-opacity-40 flex justify-end'>
                            <Link className='text-white text-lg w-9 h-8 mt-2 mr-2 rounded-full bg-yellow-900 flex items-center justify-center hover:bg-black transition'>
                                <IoHeartOutline/>
                            </Link>
                        </div>
                    </div>
                    <div className='pt-4 pb-3 px-4 text-start'>
                        <Link className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Product_name </Link>
                        <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                            <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                            <p className='text-sm text-gray-400 line-through'> ₹3800 </p>
                        </div>
                        <div className='flex flex-1'>
                        <Link>
                            <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 '>Add to cart</button>
                            </Link>
                       <Link> <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 ml-5'>Buy Now</button> </Link>
                         
                        </div>
                    </div>
                   
                </div>      
            </div> */}
        </div>
{/* 2nd Grid */}
        {/* <div className=''>
        <div className='col-span-1 '>
                <div class="bg-white shadow rounded overflow-hidden">  
                    <div className='relative'>
                    <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                        <img src={Img} alt='' />
                    </div>
                    <div className='absolute inset-0 bg-black bg-opacity-40 flex justify-end'>
                            <Link className='text-white text-lg w-9 h-8 mt-2 mr-2 rounded-full bg-yellow-900 flex items-center justify-center hover:bg-black transition'>
                                <IoHeartOutline/>
                            </Link>
                        </div>
                    </div>
                    <div className='pt-4 pb-3 px-4 text-start'>
                        <Link className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Product_name </Link>
                        <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                            <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                            <p className='text-sm text-gray-400 line-through'> ₹3800 </p>
                        </div>
                        <div className='flex flex-1'>
                        <Link>
                            <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 '>Add to cart</button>
                            </Link>
                       <Link> <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 ml-5'>Buy Now</button> </Link>
                         
                        </div>
                    </div>
                    
                </div>      
            </div>

            <div className='col-span-1 mt-10'>
                <div class="bg-white shadow rounded overflow-hidden">  
                    <div className='relative'>
                    <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                        <img src={Img} alt='' />
                    </div>
                    <div className='absolute inset-0 bg-black bg-opacity-40 flex justify-end'>
                            <Link className='text-white text-lg w-9 h-8 mt-2 mr-2 rounded-full bg-yellow-900 flex items-center justify-center hover:bg-black transition'>
                                <IoHeartOutline/>
                            </Link>
                        </div>
                    </div>
                    <div className='pt-4 pb-3 px-4 text-start'>
                        <Link className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Product_name </Link>
                        <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                            <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                            <p className='text-sm text-gray-400 line-through'> ₹3800 </p>
                        </div>
                        <div className='flex flex-1'>
                        <Link>
                            <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 '>Add to cart</button>
                            </Link>
                       <Link> <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 ml-5'>Buy Now</button> </Link>
                         
                        </div>
                    </div>
                   
                </div>      
            </div>
        </div> */}
{/* 3rd Grid */}
       {/* <div className=''>
       <div className='col-span-1 '>
                <div class="bg-white shadow rounded overflow-hidden">  
                    <div className='relative'>
                    <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                        <img src={Img} alt='' />
                    </div>
                    <div className='absolute inset-0 bg-black bg-opacity-40 flex justify-end'>
                            <Link className='text-white text-lg w-9 h-8 mt-2 mr-2 rounded-full bg-yellow-900 flex items-center justify-center hover:bg-black transition'>
                                <IoHeartOutline/>
                            </Link>
                        </div>
                    </div>
                    <div className='pt-4 pb-3 px-4 text-start'>
                        <Link className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Product_name </Link>
                        <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                            <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                            <p className='text-sm text-gray-400 line-through'> ₹3800 </p>
                        </div>
                        <div className='flex flex-1'>
                        <Link>
                            <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 '>Add to cart</button>
                            </Link>
                       <Link> <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 ml-5'>Buy Now</button> </Link>
                         
                        </div>
                    </div>
                    
                </div>      
            </div>

            <div className='col-span-1 mt-10'>
                <div class="bg-white shadow rounded overflow-hidden">  
                    <div className='relative'>
                    <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                        <img src={Img} alt='' />
                    </div>
                    <div className='absolute inset-0 bg-black bg-opacity-40 flex justify-end'>
                            <Link className='text-white text-lg w-9 h-8 mt-2 mr-2 rounded-full bg-yellow-900 flex items-center justify-center hover:bg-black transition'>
                                <IoHeartOutline/>
                            </Link>
                        </div>
                    </div>
                    <div className='pt-4 pb-3 px-4 text-start'>
                        <Link className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Product_name </Link>
                        <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                            <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                            <p className='text-sm text-gray-400 line-through'> ₹3800 </p>
                        </div>
                        <div className='flex flex-1'>
                        <Link>
                            <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 '>Add to cart</button>
                            </Link>
                       <Link> <button className='text-white bg-yellow-900 rounded-md text-sm w-24 h-8 ml-5'>Buy Now</button> </Link>
                         
                        </div>
                    </div>
                   
                </div>      
            </div>
        </div> */}

       
    </div>
        
       
</div>
  )
}

export default Shoppage