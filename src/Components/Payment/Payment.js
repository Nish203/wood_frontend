import React from 'react'
import img from '../images/website/bench/bench__1.webp'
function Payment() {
  return (
    <div>
     <div class="container p-3 mt-4 mb-4 ">
    <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
        <div class="flex flex-col md:w-full">
            <h2 class="mb-4 font-bold md:text-xl text-heading ">Choose Payment mode
            </h2>
            <form class="justify-center w-full mx-auto" method="post" action>
            <div class="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" >
       
       <div class="mb-3 flex -mx-2">
           <div class="px-2">
               <label for="type1" class="flex items-center cursor-pointer"/>
                   <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked/> 
           </div>
           <p> Cash On Delivery</p>
       </div>
       <div class="mb-3 flex -mx-2">
           <div class="px-2">
               <label for="type1" class="flex items-center cursor-pointer"/>
                   <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked/> 
           </div>
           <p> Credit/Debit Card</p>
       </div>
       
          
       <div class="mb-3">
           <label class="font-bold text-sm mb-2 ml-1">Name on card</label>
           <div>
               <input class="w-full px-3 py-2 mb-1 border-2 bg-gray-100 border-gray-200 rounded-md focus:outline-none focus:border-black transition-colors" placeholder="John Smith" type="text"/>
           </div>
       </div>
       <div class="mb-3">
           <label class="font-bold text-sm mb-2 ml-1">Card number</label>
           <div>
               <input class="w-full px-3 py-2 mb-1 border-2 bg-gray-100 border-gray-200 rounded-md focus:outline-none focus:border-black transition-colors" placeholder="0000 0000 0000 0000" type="text"/>
           </div>
       </div>
       <div class="mb-3 -mx-2 flex items-end">
           <div class="px-2 w-1/2">
               <label class="font-bold text-sm mb-2 ml-1">Expiration date</label>
               <div>
                   <select class="form-select w-full px-3 py-2 mb-1 border-2 bg-gray-100 border-gray-200 rounded-md focus:outline-none focus:border-black transition-colors cursor-pointer">
                       <option value="01">01 - January</option>
                       <option value="02">02 - February</option>
                       <option value="03">03 - March</option>
                       <option value="04">04 - April</option>
                       <option value="05">05 - May</option>
                       <option value="06">06 - June</option>
                       <option value="07">07 - July</option>
                       <option value="08">08 - August</option>
                       <option value="09">09 - September</option>
                       <option value="10">10 - October</option>
                       <option value="11">11 - November</option>
                       <option value="12">12 - December</option>
                   </select>
               </div>
           </div>
           <div class="px-2 w-1/2">
               <select class="form-select w-full px-3 py-2 mb-1 border-2 bg-gray-100 border-gray-200 rounded-md focus:outline-none focus:border-black transition-colors cursor-pointer">
                   <option value="2020">2020</option>
                   <option value="2021">2021</option>
                   <option value="2022">2022</option>
                   <option value="2023">2023</option>
                   <option value="2024">2024</option>
                   <option value="2025">2025</option>
                   <option value="2026">2026</option>
                   <option value="2027">2027</option>
                   <option value="2028">2028</option>
                   <option value="2029">2029</option>
               </select>
           </div>
       </div>
       <div class="mb-7">
           <label class="font-bold text-sm mb-2 ml-1">CvV</label>
           <div>
               <input class="w-32 px-3 py-2 mb-1 border-2 bg-gray-100 border-gray-200 rounded-md focus:outline-none focus:border-black transition-colors" placeholder="000" type="text"/>
           </div>
       </div>
       <div >
            <button
               class="w-44  px-6 py-2 rounded text-white bg-yellow-900 hover:bg-yellow-800">Payment</button>
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
                               
                                <div className='mt-2'>₹20,000</div>
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
                               
                                <div className='mt-2'>₹20,000</div>
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
                    class="flex flex-1 items-center mt-3 w-full  text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                        <div>  Total </div>
                        <div className=' text-xl ml-24 sm:ml-80'> ₹50,000 </div>
                   </div>
            </div>
        </div>
    </div>
    </div> 
    </div>
  )
}

export default Payment