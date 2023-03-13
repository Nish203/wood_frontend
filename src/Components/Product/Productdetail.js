import React, { useState } from 'react'

import img1 from '../images/website/chair/chair__5.webp'
import {BsHandbagFill, BsFillSuitHeartFill} from 'react-icons/bs'

function Productdetail() {
  let [num, setNum]= useState(0);
  let incNum =()=>{
    if(num<20)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  } 

  return (
    <div className=''>
     
    
    <div className=''>
    <div className="container md:grid grid-cols-2  mt-16 ml-10 overflow-hidden">
{/* product image */}
        <div>
             <img src={img1} className='w-9/12 h-4/6'></img><br />
        
        <div className="grid grid-cols-4 mr-3">
            <img src={img1} className='w-36 cursor-pointer border border-primary' />
          
            <img src={img1} className='w-36 cursor-pointer border  border-primary'/>
            
            <img src={img1} className='w-36 cursor-pointer border border-primary' />
            <img src={img1} className='w-36 cursor-pointer border border-primary' />
        </div>
        </div>


        
        
    {/* product content */}
 
    <div className=''>
<h2 className='text-3xl font-medium uppercase flex items-center mb-4'> Stag wood</h2>
<div className='flex items-center mb-4'>
<ul class="flex justify-center">
  <li>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
  </li>
  <li>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
  </li>
  <li>
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
  </li>
  <li>
    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
    </svg>
  </li>
  <li>
    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
    </svg>
  </li>
</ul>
<div className='text-xs text-gray-500 ml-3'>(150 Reviews)  

</div>
</div>
<div className='space-y-2'>
<p className='text-gray-800 font-semibold space-x-2 flex items-center mb-4'>
  <span> Availability:</span>
  <span className='text-green-600'> In Stock</span>
</p>
<p className='text-gray-800 font-semibold space-x-2 flex items-center mb-4'>
  <span className='text-gray-800 font-semibold'> Brand:</span>
  <span className='text-gray-600'> Apex</span>
</p>
<p className='text-gray-800 font-semibold space-x-2 flex items-center mb-4'>
  <span className='text-gray-800 font-semibold'> Category:</span>
  <span className='text-gray-600'> Sofa</span>
</p>


</div>
<div className='sm flex items-baseline mb-1 space-x-2 font-roboto mt-4'>
  <p className='text-2xl text-primary font-semibold'>₹ 35000</p>
  <p className='text-base text-gray-400 line-through'>₹ 40000</p>
</div>
<p className='mt-4 text-gray-600 mr-6 text-left'>
The frame of a sofa is made most often wood, though newer options include
 steel, plastic, and laminated boards or a combination of the above
</p>
{/* size filter */}

{/* <div className='pt-4'>
    <h3 className='text-sm text-gray-800 uppercase flex items-center mb-4'>Size</h3>
    <div className='flex items-center gap-2'>
      <div className='size-selector'>
      
        <input type="radio" name="size" class="hidden " id="size-xs"/>
        <label for="size-xs" class="text-s border border-gray-200  rounded-sm h-6 w-6 cursor-pointer shadow-sm block" >
          
         XS
         
        </label>
        
      </div>

      <div className='size-selector'>
        <input type="radio" name="size" class="hidden" id="size-s"/>
        <label for="size-s" class="text-s border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block" >
          S
        </label>
      </div>

      <div className='size-selector'>
        <input type="radio" name="size" class="hidden" id="size-m"/>
        <label for="size-m" class="text-s border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block" >
          M
        </label>
      </div>

      <div className='size-selector'>
        <input type="radio" name="size" class="hidden" id="size-l"/>
        <label for="size-l" class="text-s border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block" >
        L
        </label>
      </div>

      <div className='size-selector'>
        <input type="radio" name="size" class="hidden" id="size-xl"/>
        <label for="size-xl" class="text-s border border-gray-200 rounded-sm h-6 w-6  flex items-center justify-center cursor-pointer shadow-sm  text-gray-600" >
          XL
        </label>
      </div>

    </div>
</div> */}
{/* color filter */}

    {/* singal color */}
    <div className='color-selector'>
      <input type="radio" name="color" className='hidden' id="color-white" />
      
    
    </div>

     {/* quantity start */}
     <div className='mt-4'>
      <h3 className='text-sm text-gray-800 uppercase flex items-center mb-4 '>Quantity</h3>
      <div className=' flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max'>
        <div className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'>
          
          <button type='button' onClick={decNum}>-</button>
         
         </div>
        <div className='h-8 w-8 text-base  items-center justify-center'>
          <input type="text" className='form-control h-8 w-8 items-center justify-center ml-3' value={num} onChange={handleChange} />
        </div>
        <div className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'>
        <button type='button' onClick={incNum}>+</button>

        </div>
          
          </div>
          
          </div>
    
      {/* cart button */}
      <div className='flex gap-3 border-gray-200 pb-5 mt-6'>
        <a href="#" class="bg-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
          <i className='fas fa-shopping-bag'><BsHandbagFill/></i>Add to Cart
        </a>
        <a href="#" class="bg-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
          <i className='fas fa-heart'><BsFillSuitHeartFill/></i>Wishlist
        </a>

      </div>
      


    </div>
    </div>
  </div>
  {/* product detail */}
 
  
</div>

    
   
    
    
    
    
    
    
    
    
  
  )
}

export default Productdetail