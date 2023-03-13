import React from 'react'

import {GrFormNextLink} from 'react-icons/gr'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

import img from '../images/website/chair/chair__15.webp'
import img2 from '../images/website/bench/bench__8.webp'
import img3 from '../images/website/cabinate/cabinate__28.webp'
import img4 from '../images/website/dining/dining__6.webp'
import img5 from '../images/website/mirror/mirror__4.webp'
import img6 from '../images/website/sofa/1seater__4.webp'
import img7 from '../images/website/wardrobe/wd__18.webp'


const Newitems = () => {
  return (
   
    <section className='mt-10 section relative overflow-hidden lg:min-h-[400px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>

          {/* text */}

          <div className=' mt-16 flex md:flex-col items-baseline gap-x-6 mb-6 lg:mb-0 '>
            <h2 className='text-4xl ml-10 border-b border-primary title max-w-[245px] lg:mt-[30px] lg:mb-11'>
                New In Store
            </h2>
            <p className=' max-w-[245px] lg:mb-12  text-center md:text-left space-y-2'> Get the latest items immediately with promo prices </p>
            <div className='hidden lg:flex items-center'>
              <a
                className='hover:border-b border-primary lg:items-center font-medium transition-all'
                href='#'>
                Check all
              </a>
              <div className='text-3xl'> <GrFormNextLink/> </div>
            </div>
          </div>


          {/* product slider */}


          <div className='lg:max-w-[800px] xl:max-w-[990px] lg:absolute lg:-right-24' >
          <div className='mt-14'>
          
              <Swiper
                modules={[FreeMode, Pagination]}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
              
                slidesPerView={3}
                spaceBetween={30}
                className='mySwiper md:min-h-[400px] mb-20'
              >
       
                  <SwiperSlide className='max-w-[265px]' >
                  
                    <div className='relative transition delay-100  hover:-translate-y-1 hover:scale-90 duration-300'>
                      <img src={img} alt='' />
                      <div className='absolute text-white bottom-[20px] text-center w-full text-[18px] lg:text-2xl font-medium capitalize'>
                        Chair
                      </div>
                      
                    </div>
                    
                  </SwiperSlide>
                  <SwiperSlide className='max-w-[265px]' >
                    <div className='relative transition delay-100  hover:-translate-y-1 hover:scale-90 duration-300'>
                      <img src={img2} alt='' />
                      <div className='absolute text-white bottom-[20px] text-center w-full text-[18px] lg:text-2xl font-medium capitalize'>
                        Bench
                      </div>
                      
                    </div>
                    
                  </SwiperSlide>
                  <SwiperSlide className='max-w-[265px]' >
                    <div className='relative transition delay-100  hover:-translate-y-1 hover:scale-90 duration-300'>
                      <img src={img3} alt='' />
                      <div className='absolute text-white bottom-[20px] text-center w-full text-[18px] lg:text-2xl font-medium capitalize'>
                        Cabinat
                      </div>
                      
                    </div>
                    
                  </SwiperSlide>
                  <SwiperSlide className='max-w-[265px]' >
                    <div className='relative transition delay-100  hover:-translate-y-1 hover:scale-90 duration-300'>
                      <img src={img4} alt='' />
                      <div className='absolute text-white bottom-[20px] text-center w-full text-[18px] lg:text-2xl font-medium capitalize'>
                        Dining
                      </div>
                      
                    </div>
                    
                  </SwiperSlide>
                  <SwiperSlide className='max-w-[265px]' >
                    <div className='relative transition delay-100  hover:-translate-y-1 hover:scale-90 duration-300'>
                      <img src={img5} alt='' />
                      <div className='absolute text-white bottom-[20px] text-center w-full text-[18px] lg:text-2xl font-medium capitalize'>
                        Mirror
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='max-w-[265px]' >
                    <div className='relative transition delay-100  hover:-translate-y-1 hover:scale-90 duration-300'>
                      <img src={img6} alt='' />
                      <div className='absolute text-white bottom-[20px] text-center w-full text-[18px] lg:text-2xl font-medium capitalize'>
                        Sofa
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='max-w-[265px]' >
                    <div className='relative transition delay-100  hover:-translate-y-1 hover:scale-90 duration-300'>
                      <img src={img7} alt='' />
                      <div className='absolute text-white bottom-[20px] text-center w-full text-[18px] lg:text-2xl font-medium capitalize'>
                        Wardrobe
                      </div>
                    </div>
                  </SwiperSlide>
              </Swiper>
              </div>
              

          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Newitems
