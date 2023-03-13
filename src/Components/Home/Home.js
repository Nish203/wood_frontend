
import React, { useState,  useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Explore from './Explore'
import Newitems from './Newitems'
import Trending from './Trending'
import Help from './Help'
import Reviewslide from './Reviewslide'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  return (
<div className='w-full '>
    <div class=" bg-cover ">
        
      
        <div className=' pb-40 pt-24  mx-auto max-w-6xl '>
            <div className='flex'>
            <div className='  w-1/2 pt-9 md:p-8 text-center md:text-left space-y-4'>
                <h3 className=' mb-6  text-6xl font-bold text-black font-display'> 
                    We provide our best product 
                </h3>
                <a className='pt-8  max-w-md text-xl leading-relaxed text-black'>
                     Stagwood is site that allows you to buy and sell products and services online.
                </a>
                <div className='flex pt-10 space-x-6'>
                    <button className='flex justify-center  items-center py-3 px-8 fond-bold tarcking-wide leading-7 text-white bg-black rounded-xl hover:shadow-xl '> Explore Now </button>
                </div>
            </div>
            </div>
        </div>

    </div> 
    <Explore/>
    <Newitems/>
    <Trending/>
    <Help/>
    <Reviewslide/>
    </div>
   )
}  


export default Home
