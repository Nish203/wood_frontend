import React, { useState } from 'react'
import img from '../images/website/bench/bench__1.webp'
function Address() {
   
  return (
    <div>
<div class="container p-3  mt-4 mb-4">
    <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
        <div class="flex flex-col md:w-full">
            <h2 class="mb-4 font-bold md:text-xl text-heading ">Shipping Address
            </h2>
            <form class="justify-center w-full mx-auto" method="post" action>
                <div class="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700">
                    <div class="space-x-0 lg:flex lg:space-x-4">
                        <div class="w-full lg:w-1/2">
                            <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-700">First
                                Name</label>
                                <input class="w-full px-3 py-2 mb-1 border-2 bg-gray-100 border-gray-200 rounded-md focus:outline-none focus:border-black transition-colors" placeholder="First Name" type="text"/>
                        </div>
                        <div class="w-full lg:w-1/2 ">
                            <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-700">Last
                                Name</label>
                                <input class="w-full px-3 py-2 mb-1 border-2 bg-gray-100 border-gray-200 rounded-md focus:outline-none focus:border-black transition-colors" placeholder="Last Name" type="text"/>
                        </div>
                    </div>
                    <div class="mt-4">
                        <div class="w-full">
                            <label for="Email"
                                class="block mb-3 text-sm font-semibold text-gray-700">Email</label>
                           <input class="w-full px-3 py-2 mb-1 border-2 bg-gray-100 border-gray-200 rounded-md focus:outline-none focus:border-black transition-colors" placeholder="Email" type="text"/>
                        </div>
                    </div>
                    <div class="mt-4">
                        <div class="w-full">
                            <label for="Address"
                                class="block mb-3 text-sm font-semibold text-gray-700">Address</label>
                            <textarea
                                class="w-full px-3 py-2 mb-1 border-2 bg-gray-100 border-gray-200 rounded-md focus:outline-none focus:border-black transition-colors" placeholder="Address" type="text"></textarea>
                        </div>
                    </div>
                    <div class="space-x-0 lg:flex lg:space-x-4">
                        <div class="w-full lg:w-1/2">
                            <label for="city"
                                class="block mb-3 text-sm font-semibold text-gray-700">City</label>
                           <input class="w-full px-3 py-2 mb-1 border-2 bg-gray-100 border-gray-200 rounded-md focus:outline-none focus:border-black transition-colors" placeholder="City" type="text"/>
                        </div>
                        <div class="w-full lg:w-1/2 ">
                            <label for="postcode" class="block mb-3 text-sm font-semibold text-gray-700">
                                Pincode</label>
                                <input class="w-full px-3 py-2 mb-1 border-2 bg-gray-100 border-gray-200 rounded-md focus:outline-none focus:border-black transition-colors" placeholder="Pincode" type="text"/>
                        </div>
                    </div>
                    <div class="flex items-center mt-4">
                        <label class="flex items-center text-sm group text-heading">
                            <input type="checkbox"
                                class="w-5 h-5 border bg-gray-100 border-gray-300 rounded focus:outline-none focus:ring-1"/>
                            <span class="ml-2">Save this information for next time</span></label>
                    </div>
                  
                    <div class="mt-4">
                        <button
                            class="w-44 rou px-6 py-2 rounded text-white bg-yellow-900 hover:bg-yellow-800">Process</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-3/5 ">
            <div class="pt-12 md:pt-0 2xl:ps-4">
                <h2 class="text-xl font-bold">Order Summary
                </h2>
                <div class="mt-8">
                    <div class="flex flex-col space-y-4 ">
                        <div class="flex space-x-4">
                            <div>
                                <img src={img} alt="image"
                                    class="w-32"/>
                            </div>
                            <div>
                                <h2 class="text-xl font-bold">P_Name</h2>
                                <p class="text-sm"> Category </p>
                               
                                <div className='mb-2'>₹20,000</div>
                                <div class="flex items-center space-x-3">
                                     <button class=" bg-gray-200 inline-flex items-center p-1 text-sm font-medium text-gray-500  border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                        <span class="sr-only">Quantity button</span>
                                        <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                     </button>
                                    <div>
                                        <input type="text" id="first_product" class="bg-gray-200 w-11 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required/>
                                    </div>
                                    <button class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-gray-200 border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                        <span class="sr-only">Quantity button</span>
                                        <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 sm:ml-40" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>


                        <div class="flex space-x-4">
                            <div>
                                <img src={img} alt="image"
                                    class="w-32"/>
                            </div>
                            <div>
                                <h2 class="text-xl font-bold">P_Name</h2>
                                <p class="text-sm"> Category </p>
                               
                                <div className=' mb-2'>₹20,000</div>
                                <div class="flex items-center space-x-3">
                                     <button class=" bg-gray-200 inline-flex items-center p-1 text-sm font-medium text-gray-500  border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                        <span class="sr-only">Quantity button</span>
                                        <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                     </button>
                                    <div>
                                        <input type="text" id="first_product" class="bg-gray-200 w-11 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required/>
                                    </div>
                                    <button class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-gray-200 border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                        <span class="sr-only">Quantity button</span>
                                        <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </div>   
                            </div>
                            
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 sm:ml-40" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            
                        </div>

                    </div>
                </div>
                <div
                    class="flex flex-1 items-center w-full mt-5  text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                        <div>  Subtotal </div>
                        <div className=' ml-20 sm:ml-80 '> ₹40,000 </div>
                   </div>
                   <div
                    class="flex flex-1 items-center mt-3 w-full text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                        <div>  Shipping Tax </div>
                        <div className='ml-14 sm:ml-72'> ₹10,000 </div>
                   </div>
                   <div
                    class="flex flex-1 items-center mt-3 w-full  font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                        <div className='text-xl'>  Total </div>
                        <div className=' ml-24 sm:ml-80'> ₹50,000 </div>
                   </div>
            </div>
        </div>



    </div>
</div>
</div>
  )
}

export default Address