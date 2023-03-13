import React from 'react'

import img1 from '../images/website/sofa/img__5.webp'
import img from '../images/website/bed/bed__3.webp'
import img2 from '../images/website/cabinate/cabinate__22.webp'
import img3 from '../images/website/chair/chair__13.webp'
import { NavLink } from 'react-bootstrap'

const Help = () => {
  return (
  
<div class="bg-white ">
  <div class="mx-auto max-w-2xl mb-20 sm:py- sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-3xl  text-gray-900  "> Need Buying Guides? </h2>

    <div class="mt-14 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

      <div class="group relative  ">
        <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img src={img1} class="h-full w-full object-cover object-center lg:h-full lg:w-full"></img>
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-lg text-black transition delay-100 hover:-translate-y-1 hover:scale-90 duration-300">
              <NavLink>
                <span aria-hidden="true" class="absolute inset-0"></span>
               Here How To Choose The Right Sofa
              </NavLink>
            </h3>
           
          </div>
          
        </div>
      </div>

      <div class="group relative ">
        <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img src={img} class="h-full w-full object-cover object-center lg:h-full lg:w-full"></img>
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-lg text-black transition delay-100  hover:-translate-y-1 hover:scale-90 duration-300">
              <NavLink>
                <span aria-hidden="true" class="absolute inset-0"></span>
                How To Buy A Perfect Bed For Your Room
              </NavLink>
            </h3>
           
          </div>
          
        </div>
      </div>

      <div class="group relative ">
        <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img src={img2} class="h-full w-full object-cover object-center lg:h-full lg:w-full"></img>
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-lg text-black transition delay-100  hover:-translate-y-1 hover:scale-90 duration-300">
              <NavLink>
                <span aria-hidden="true" class="absolute inset-0"></span>
                Everything About Cabinets And Table
              </NavLink>
            </h3>
           
          </div>
          
        </div>
      </div>

      <div class="group relative ">
        <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
         <img src={img3} class="h-full w-full object-cover object-center lg:h-full lg:w-full"></img>
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-lg text-black transition delay-100  hover:-translate-y-1 hover:scale-90 duration-300">
              <NavLink>
                <span aria-hidden="true" class="absolute inset-0"></span>
                What To Look For While Buying A Chair
              </NavLink>
            </h3>
           
          </div>
          
        </div>
      </div>

    

    </div>
  </div>
</div>

  )
}

export default Help
