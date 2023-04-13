import React from 'react'
import img from '../images/website/chair/chair__15.webp'
import img2 from '../images/website/bench/bench__8.webp'
import img3 from '../images/website/cabinate/cabinate__28.webp'
import img4 from '../images/website/dining/dining__6.webp'
import img5 from '../images/website/mirror/mirror__4.webp'
import img6 from '../images/website/sofa/1seater__4.webp'
import img7 from '../images/website/wardrobe/wd__18.webp'
import { useNavigate } from 'react-router-dom'
const Newitems = () => {
  const navigate = useNavigate()
  return (
   
   
      <div className='container mt-10'>
      

          {/* text */}

             <h2 class="text-3xl ml-10 text-black">New In Store</h2>

          {/* product slider */}




<div class="relative flex overflow-x-hidden">
    <div class="py-10 animate-marquee whitespace-nowrap">
     
<div class="mt-10 grid grid-cols-1  gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">   
      <div class="group relative " onClick={()=>navigate("/chair")}>  
                <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                      <img src={img} alt='' class="max-w-s transition duration-300 ease-in-out hover:scale-110"/>
                      <div className='absolute text-white bottom-[20px] text-center w-full text-[18px] lg:text-2xl font-medium capitalize'>
                       Wooden Stool
                      </div>
                </div>
               
      </div>      
                     
         <div class="group relative " onClick={()=>navigate("/bed")}>  
        <div class=" min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
          <img src={img2} class="max-w-s transition duration-300 ease-in-out hover:scale-110"/>
          <div className='absolute text-white bottom-[20px] text-center w-full text-[18px] lg:text-2xl font-medium capitalize'>
                       Mirror
                      </div>
        </div>
      
        </div>
            
    <div class="group relative " onClick={()=>navigate("/table")}>
        <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
          <img src={img3} class="max-w-s transition duration-300 ease-in-out hover:scale-110"/>
          <div className='absolute text-white bottom-[20px] text-center w-full text-[18px] lg:text-2xl font-medium capitalize'>
                        Study Table
                      </div>
        </div>
        
        
      </div>

    <div class="group relative" onClick={()=>navigate("/cabinet")}>
        <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
          <img src={img4} class="max-w-s transition duration-300 ease-in-out hover:scale-110"/>
          <div className='absolute text-white bottom-[20px] text-center w-full text-[18px] lg:text-2xl font-medium capitalize'>
                    Arm chair
                      </div>
        </div>
        
        
      </div>

    </div>
    </div>
  
    <div class="absolute top-0 py-10 ml-10 animate-marquee2 whitespace-nowrap">
      
    <div class="mt-10 grid grid-cols-1  gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">   
      <div class="group relative " onClick={()=>navigate("/consoles")}>  
                <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                      <img src={img} alt='' class="max-w-s transition duration-300 ease-in-out hover:scale-110"/>
                      <div className='absolute text-white bottom-[20px] text-center w-full text-[18px] lg:text-2xl font-medium capitalize'>
                      Wooden Stool
                      </div>
                </div>
               
      </div>      
                     
         <div class="group relative " onClick={()=>navigate("/giftItems")}>  
        <div class=" min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
          <img src={img2} class="max-w-s transition duration-300 ease-in-out hover:scale-110"/>
          <div className='absolute text-white bottom-[20px] text-center w-full text-[18px] lg:text-2xl font-medium capitalize'>
                        Mirror
                      </div>
        </div>
      
        </div>
            
    <div class="group relative " onClick={()=>navigate("/exclusive")}>
        <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
          <img src={img3} class="max-w-s transition duration-300 ease-in-out hover:scale-110"/>
          <div className='absolute text-white bottom-[20px] text-center w-full text-[18px] lg:text-2xl font-medium capitalize'>
                  Study Table
                      </div>
        </div>
        
        
      </div>

    <div class="group relative">
        <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
          <img src={img4} class="max-w-s transition duration-300 ease-in-out hover:scale-110"/>
          <div className='absolute text-white bottom-[20px] text-center w-full text-[18px] lg:text-2xl font-medium capitalize'>
                        Arm chair
                      </div>
        </div>
        
        
      </div>

     

    </div>
    </div>
  </div>
        </div>
    
   
    
  )
}

export default Newitems
