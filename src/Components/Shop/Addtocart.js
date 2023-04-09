import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { ErrorToast, SuccessToast } from '../../Toast';
import { baseUrl } from '../BaseUrl/BaseUrl';
import img from '../images/website/dining/dining__5.webp';
import img2 from '../images/website/dining/dining__7.webp';

function Addtocart() {
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }
  }
  const navigate = useNavigate()
  const [cart,setCart] = useState([])
  let json = [
    {
    name:"test",
    category:"test",
    quntity:2,
    price:500,
  },
  {
    name:"demo",
    category:"demo",
    quntity:2,
    price:500,
  }]
  const [data,setData] = useState(json)
  const [total,setTotal] = useState("")

  const handleSubmit = (e) =>{
    
    e.preventDefault()
    console.log('data', data)
    let body ={
      cartItem : cart
    }
    axios.post(baseUrl + "product/buy-product",body,config).then((res)=>{
      console.log('res', res)
      if(res?.data?.data){
        window.open(res?.data?.data)
      }
    }).catch((err)=>{
      console.log('err', err)
    })
  }
  const getData = () =>{
    let totalAmount = 0
    axios.get(baseUrl + "product/getCartProduct",config).then((res)=>{
      console.log('res', res?.data?.product)
      res?.data?.product?.map((val)=>{
        let total1 = (val?.data[0]?.productId?.price-val?.data[0]?.productId?.discPrice)*val?.data[0]?.productQuantity 
        console.log('total1', total1)
        totalAmount = totalAmount + total1 
      })
      setCart(res?.data?.product)
      setTotal(totalAmount)
    }).catch((err)=>{
      console.log('err', err)
    })
  }
  const handlepluse = (id,qty) =>{
      console.log('id,qty', id,qty)
      let body={
        productId:id,
        productQuantity:1
    }
    axios.post(baseUrl +`product/addToCart`,body,config).then((res)=>{
        console.log('res', res)
        SuccessToast("increased Successfully!")
        getData()
    }).catch((err)=>{
        console.log('err', err)
        ErrorToast(err?.response?.data?.message)
    })
  }
  const handleMinus = (id,qty) =>{
console.log('id,qty', id,qty)
let body={
  productId:id,
  productQuantity:-1
}
axios.post(baseUrl +`product/addToCart`,body,config).then((res)=>{
  console.log('res', res)
  SuccessToast("decreased Successfully!")
  getData()
}).catch((err)=>{
  console.log('err', err)
  ErrorToast(err?.data?.message)
})
  }
  const handleRemove = (id) =>{
    let body = {
      productId:id,
      type:"remove"
    }
    axios.post(baseUrl +`product/addToCart`,body,config).then((res)=>{
      console.log('res', res)
      SuccessToast(res?.data?.message)
      getData()
    }).catch((err)=>{
      console.log('err', err)
      ErrorToast(err?.data?.message)
    })
  }
   useEffect(()=>{
    getData()
   },[])
  return (
    <div>
        <div class="relative z-30" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
  
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
      
        <div class="pointer-events-auto w-screen max-w-md">
          <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
              <div class="flex items-start justify-between">
                <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                <div class="ml-3 flex h-7 items-center">
                  <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500" onClick={()=>navigate(-1)}>
                    <span class="sr-only">Close panel</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div class="mt-8">
                <div class="flow-root">
                  <ul role="list" class="-my-6 divide-y divide-gray-200">
                    {cart?.map((val)=>{
                      return(
                        <li class="flex py-6">
                      <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img src={val?.data[0]?.productId?.image} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center"/>
                      </div>

                      <div class="ml-4 flex flex-1 flex-col">
                        <div>
                          <div class="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <Link>{val?.data[0]?.productId?.name}</Link>
                            </h3>
                            <p class="ml-4">₹{val?.data[0]?.productId?.price - val?.data[0]?.productId?.discPrice}</p>
                          </div>
                          <p class="mt-1 text-sm text-gray-500">{val?.data[0]?.productId?.material}</p>
                        </div>
                        <div class="flex flex-1 items-end justify-between text-sm">
                        <div class="flex items-center space-x-3">
                            <button class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button" onClick={()=>val?.data[0]?.productQuantity === 1 ?"":handleMinus(val?.data[0]?.productId?._id,val?.data[0]?.productQuantity - 1)}>
                                <span class="sr-only">Quantity button</span>
                                <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            </button>
                            <div>
                                <input type="text" id="first_product" value={val?.data[0]?.productQuantity} disabled class="bg-gray-50 w-11 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required/>
                            </div>
                            <button class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button" onClick={()=>handlepluse(val?.data[0]?.productId?._id,val?.data[0]?.productQuantity + 1)}>
                                <span class="sr-only">Quantity button</span>
                                <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>

                          <div class="flex">
                            <button type="button" class="font-medium text-yellow-900 hover:text-yellow-700" onClick={()=>handleRemove(val?.data[0]?.productId?._id)}>Remove</button>
                          </div>
                        </div>
                      </div>
                    </li>
                      )
                      
                    })}
                    

                    {/* <li class="flex py-6">
                      <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img src={img2} alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." class="h-full w-full object-cover object-center"/>
                      </div>

                      <div class="ml-4 flex flex-1 flex-col">
                        <div>
                          <div class="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <Link> Product_Name</Link>
                            </h3>
                            <p class="ml-4">₹3200</p>
                          </div>
                          <p class="mt-1 text-sm text-gray-500"> Category_name</p>
                        </div>
                        <div class="flex flex-1 items-end justify-between text-sm">
                        <div class="flex items-center space-x-3">
                        <button class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span class="sr-only">Quantity button</span>
                            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                        <div>
                            <input type="text" id="first_product" class="bg-gray-50 w-11 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required/>
                        </div>
                        <button class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span class="sr-only">Quantity button</span>
                            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>

                          <div class="flex">
                            <button type="button" class="font-medium text-yellow-900 hover:text-yellow-700">Remove</button>
                          </div>
                        </div>
                      </div>    
                    </li> */}

                    {/* <!-- More products... --> */}
                  </ul>
                </div>
              </div>
            </div>

            <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
              <div class="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>₹{total}</p>
              </div>
              <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
              <div class="mt-6">
                <Link>
                <div class="flex items-center justify-center rounded-md border border-transparent bg-yellow-900 px-6 py-3 text-base font-medium text-white shadow-sm  hover:text-yellow-500" onClick={handleSubmit}>Checkout</div>
                </Link>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default Addtocart