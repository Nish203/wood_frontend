import React from 'react'
import {FaQuoteLeft} from 'react-icons/fa'
import {AiFillStar} from 'react-icons/ai'


const Reviewslide = () => {
  return (
    
  

 
<section class="mb-20 text-gray-700 px-6">
  <div class="text-center md:max-w-xl lg:max-w-3xl mx-auto">
    <h3 class="text-3xl  mb-16 text-gray-800 "> Customer Review </h3>
   
  </div>

  <div class=" grid md:grid-cols-3 gap-6 lg:gap-12 text-center">
    <div class="  mb-12 md:mb-0">
      
      <h5 class="text-xl font-semibold mb-4">Maria Smantha</h5>
      <h6 class="font-semibold text-primary mb-4">Web Developer</h6>
      <p class="mb-4">
       <FaQuoteLeft class="w-6 pr-2 inline-block"/>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic
        tenetur quae quaerat ad velit ab hic tenetur.
      </p>
      <ul class="flex justify-center mb-0">
        <li>
        <AiFillStar size={20} class=" text-yellow-500"/>
        </li>
        <li>
        <AiFillStar size={20} class=" text-yellow-500"/>
        </li>
        <li>
        <AiFillStar size={20} class=" text-yellow-500"/>
        </li>
        <li>
        <AiFillStar size={20} class=" text-yellow-500"/>
        </li>
        <li>
        <AiFillStar size={20} class=" text-yellow-500"/>
        </li>
      </ul>
    </div>
    <div class="   mb-12 md:mb-0">
      
      <h5 class="text-xl font-semibold mb-4">Lisa Cudrow</h5>
      <h6 class="font-semibold text-primary mb-4">Graphic Designer</h6>
      <p class="mb-4">
      <FaQuoteLeft class="w-6 pr-2 inline-block"/>
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
        laboriosam, nisi ut aliquid commodi.
      </p>
      <ul class="flex justify-center mb-0">
        <li>
        <AiFillStar size={20} class=" text-yellow-500"/>
        </li>
        <li>
        <AiFillStar size={20} class=" text-yellow-500"/>
        </li>
        <li>
        <AiFillStar size={20} class=" text-yellow-500"/>
        </li>
        <li>
        <AiFillStar size={20} class=" text-yellow-500"/>
        </li>
        <li>
        <AiFillStar size={20} class=" text-yellow-500"/>
        </li>
      </ul>
    </div>
    <div class="  mb-0">
      
      <h5 class="text-xl font-semibold mb-4">John Smith</h5>
      <h6 class="font-semibold text-primary mb-4">Marketing Specialist</h6>
      <p class="mb-4">
      <FaQuoteLeft class="w-6 pr-2 inline-block"/>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
        praesentium voluptatum deleniti atque corrupti.
      </p>
      <ul class="flex justify-center mb-0">
        <li>
        <AiFillStar size={20} class=" text-yellow-500"/>
        </li>
        <li>
        <AiFillStar size={20} class=" text-yellow-500"/>
        </li>
        <li>
        <AiFillStar size={20} class=" text-yellow-500"/>
        </li>
        <li>
        <AiFillStar size={20} class=" text-yellow-500"/>
        </li>
        <li>
        <AiFillStar size={20} class=" text-yellow-500"/>
        </li>
      </ul>
    </div>
    
  </div>
</section>

  )
}

export default Reviewslide




