
import React, { useState } from 'react'
import {IoLocationOutline,IoPersonOutline,IoStorefrontOutline,IoBagHandleOutline,IoHeartOutline,IoSearchOutline} from 'react-icons/io5'
import { Link } from 'react-router-dom';
import Navlinks from './Navlinks'
   
const Navbar = () => {
    const [open, setOpen] = useState(false);
   

  return (
   
<div className='w-full sticky top-0 z-10'>
<main class='relative' ></main>


<div className='flex justify-between items-center px-4   text-white  bg-black'>
           
           <div className='flex font-bold '>
                <h1 className='text-2xl  '> STAGWOOD </h1>
            </div>

            <div className='flex'>
              <div className='hidden md:flex items-center px-4'>
                   <Link>
                       <IoStorefrontOutline size={25} className='mr-2 '/>
                   </Link>
                   <p> Find a store </p>
               </div>
               <div className='hidden md:flex items-center px-4'>
                   <Link>
                       <IoLocationOutline size={27} className='mr-2'/>
                   </Link>
                   <p> Track order </p>
               </div>
           </div>
         </div> 
 
       <div className=' h-16 flex  font-medium justify-around text-white  bg-black '>
       <main class='relative' ></main>

            <div className='md:w-auto w-full  flex justify-between'>
               
                <div className='text-3xl md:hidden ml-96' onClick={() => setOpen(!open)}>
                    <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
                </div>
            </div>
            <ul className='md:flex hidden uppercase gap-3  '>
                <li >
                    <Link  to="/" className='py-7 px-3 inline-block'> Home </Link>
                </li>
                <Navlinks/>
                <li >
                    <Link  to="/" className='py-7 px-3 inline-block'> Browse all </Link>
                </li>
            </ul>
             <div className=' py-8 gap-2 hidden sm:flex justify-between'>
                <Link>
                    <IoSearchOutline size={27} className=' mr-2  '/>
                </Link>
                <Link to="/">
                    <IoPersonOutline size={24} className='mr-2 '/>
                </Link>
                <Link>
                    <IoHeartOutline size={27} className='mr-2'/>
                </Link>
                <Link to="/Addtocart">
                    <IoBagHandleOutline size={25} className='mr-2'/>
                </Link> 
            </div>
        </div>   
        {/* Mobile navbar */}

         <ul className={`md:hidden bg-slate-50 absolute w-full h-full bottom-0 py-24 pl-4
            duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}>
            <li >
                <Link  to="/" className='py-7 px-3 inline-block'> Home </Link>
            </li>
            <Navlinks/>
            <li >
                <Link  to="/" className='`py-12 px-3 inline-block p-8'> Browse all </Link>
            </li>
        </ul> 
    
    
   
    </div>
   
     
     
    
  )
}

export default Navbar
