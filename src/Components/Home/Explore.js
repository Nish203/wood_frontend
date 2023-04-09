import React from 'react'
import img from '../images/retirement.png'
import img1 from '../images/bed.png'
import img2 from '../images/sofa.png'
import img3 from '../images/dining.png'
import img4 from '../images/shelves.png'
import img10 from '../images/photo.png'

import img5 from '../images/desk.png'
import img6 from '../images/dinning-table.png'
import img7 from '../images/night-stand.png'
import img8 from '../images/mirror.png'
import img9 from '../images/gift-box.png'
import img11 from '../images/console-table.png'
import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Explore = () => {
  return (
    <div className=' p-8  justify-center mt-10 '>
     
        <p className=' text-3xl mb-20 text-center'> Explore Our Furniture Range </p>
     
      <div className='grid grid-cols-6 lg:ml-32 text-center '>
      <div className=' h-16 w-14 transition ease-in-out delay-150 hover:text-primary  hover:-translate-y-1 hover:scale-110 duration-300'>
            <img src={img1} className='mb-2'></img>
            <Link to="/bed">  Bed </Link>
        </div>

        <div className=' gap-2 h-16 w-14 transition ease-in-out delay-150 hover:text-primary hover:-translate-y-1 hover:scale-110 duration-300'>
        <img src={img5} className='mb-2'></img>
            <Link to="/table">  Table  </Link>
        </div> 

        <div className=' gap-2 h-16 w-14 transition ease-in-out delay-150 hover:text-primary hover:-translate-y-1 hover:scale-110 duration-300'>
            <img src={img2} className='mb-2'></img>
            <Link to="/consoles">  Sofa  </Link>
        </div>

        <div className=' gap-2 h-16 w-14 transition ease-in-out delay-150 hover:text-primary hover:-translate-y-1 hover:scale-110 duration-300'>
            <img src={img3} className='mb-2'></img>
            <Link to="/chair">  Chair  </Link>
        </div>

        <div className=' gap-2 h-16 w-14 transition ease-in-out delay-150 hover:text-primary hover:-translate-y-1 hover:scale-110 duration-300'>
        <img src={img7} className='mb-2'></img>
            <Link to="/cabinet">  Cabinet  </Link>
        </div> 

        <div className=' gap-2 h-20 w-14 transition ease-in-out delay-150 hover:text-primary hover:-translate-y-1 hover:scale-110 duration-300'>
        <img src={img9} className='mb-2'></img>
            <Link to="giftItems"> Gift_item </Link>
        </div> 
      </div>

      <div className='grid grid-cols-6  text-center mt-14 lg:ml-32'>
        {/* <div className='mb-6 h-16 w-14 transition ease-in-out delay-150 hover:text-primary hover:-translate-y-1 hover:scale-110 duration-300'>
        <img src={img6} className='mb-2'></img>
            <Link to="/exclusive"> Exclusive  </Link>
        </div> */}

        {/* <div className=' h-16 w-14 transition ease-in-out delay-150 hover:text-primary hover:-translate-y-1 hover:scale-110 duration-300'>
            <img src={img6} className='mb-2'></img>
            <NavLink> Dinning  </NavLink>
        </div>

        <div className=' gap-2 h-16 w-14 transition ease-in-out delay-150 hover:text-primary hover:-translate-y-1 hover:scale-110 duration-300'>
            <img src={img7} className='mb-2'></img>
            <NavLink>  Cabinet  </NavLink>
        </div>

        <div className=' gap-2 h-16 w-14 transition ease-in-out delay-150 hover:text-primary hover:-translate-y-1 hover:scale-110 duration-300'>
            <img src={img8} className='mb-2'></img>
            <NavLink> Mirror </NavLink>
        </div>

        <div className=' gap-2 h-16 w-14 transition ease-in-out delay-150  hover:text-primary hover:-translate-y-1 hover:scale-110 duration-300'>
            <img src={img9} className='mb-2'></img>
            <NavLink> Gift_item </NavLink>
        </div> 

       
        <div className='mb-6 h-16 w-14 transition ease-in-out delay-150 hover:text-primary hover:-translate-y-1 hover:scale-110 duration-300 '>
            <img src={img} className='mb-2'></img>
            <NavLink > Rocking_chair </NavLink>
        </div> */}
      </div>
    </div>
  )
}

export default Explore
