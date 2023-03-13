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




const Trending = () => {
  return (
    <div class="bg-white ">
    <div class="mx-auto max-w-2xl py-5 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-3xl  text-black">Best-Sellers Of The Season</h2>

    <div class="mt-10 grid grid-cols-1  gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">   
      <div class="group relative ">  
                <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                      <img src={Product1Img} alt='' />
                </div>
                <div className='pt-4 pb-3 px-4 text-start'>
           <NavLink className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Wooden Table </NavLink>
              <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                <p className='text-sm text-gray-400 line-through'> ₹3800 </p>
              </div>
        </div>
        
      </div>      
                     
         <div class="group relative ">  
        <div class=" min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
          <img src={Product2Img}/>
        </div>
        <div className='pt-4 pb-3 px-4 text-start'>
           <NavLink className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Wooden Table </NavLink>
              <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                <p className='text-sm text-gray-400 line-through'> ₹3800 </p>
              </div>
        </div>
        </div>
            
    <div class="group relative ">
        <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
          <img src={Product3Img}/>
        </div>
        <div className='pt-4 pb-3 px-4 text-start'>
           <NavLink className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Wooden Table </NavLink>
              <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                <p className='text-sm text-gray-400 line-through'> ₹3800 </p>
              </div>
        </div>
        
      </div>

    <div class="group relative">
        <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
          <img src={Product4Img}/>
        </div>
        <div className='pt-4 pb-3 px-4 text-start'>
           <NavLink className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Wooden Table </NavLink>
              <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                <p className='text-sm text-gray-400 line-through'> ₹3800 </p>
              </div>
        </div>
        
      </div>
    </div>

    <div class="mt-10 grid grid-cols-1  gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">   
      <div class="group relative ">  
                <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                      <img src={Product1Img} alt='' />
                </div>
                <div className='pt-4 pb-3 px-4 text-start'>
           <NavLink className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Wooden Table </NavLink>
              <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                <p className='text-sm text-gray-400 line-through'> ₹3800 </p>
              </div>
        </div>
        
      </div>      
                     
         <div class="group relative ">  
        <div class=" min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
          <img src={Product2Img}/>
        </div>
        <div className='pt-4 pb-3 px-4 text-start'>
           <NavLink className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Wooden Table </NavLink>
              <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                <p className='text-sm text-gray-400 line-through'> ₹3800 </p>
              </div>
        </div>
        </div>
            
    <div class="group relative ">
        <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
          <img src={Product3Img}/>
        </div>
        <div className='pt-4 pb-3 px-4 text-start'>
           <NavLink className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Wooden Table </NavLink>
              <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                <p className='text-sm text-gray-400 line-through'> ₹3800 </p>
              </div>
        </div>
        
      </div>

    <div class="group relative">
        <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
          <img src={Product4Img}/>
        </div>
        <div className='pt-4 pb-3 px-4 text-start'>
           <NavLink className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Wooden Table </NavLink>
              <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                <p className='text-sm text-gray-400 line-through'> ₹3800 </p>
              </div>
        </div>
        
      </div>
    </div>
  </div>
</div>

  )
}

export default Trending
