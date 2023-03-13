import React from 'react'
import { Link } from 'react-router-dom'
import { Slider, RangeSlider } from 'rsuite';
import {IoBagHandleOutline} from 'react-icons/io5'
import Product1Img from '../images/website/bench/bench__9.webp';
import Product2Img from '../images/website/cabinate/cabinate__25.webp';
import {AiOutlineHome} from 'react-icons/ai'
import {FiChevronRight} from 'react-icons/fi'
import {IoSearchOutline,IoHeartOutline} from 'react-icons/io5'

const Shoppage = () => {
  return (
    <div>
        <div className='container py-4 flex items-center gap-3'>
            <Link>
              <AiOutlineHome/>
            </Link>
            <span className='text-sm text-black'>
                <FiChevronRight/>
            </span>
            <p className='text-black font-medium'> Shop </p>
        </div>
 
        {/* SIDEBAR */}

        <div className='container sm:grid grid-cols-4 gap-3 pb-16  '>
            <div className=' md:self-start  col-span-1 bg-white px-4 pb-6 rounded shadow overflow-hidden '>
                <div className=' divide-y divide-gray-200 space-y-5 '>
{/* Short by */}
                    <div className='py-4'> 
                            <h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>Short by </h3>
                            <div className='space-y-2 space-x-2'>
                                <div className='flex items-center'>
                                    <input type="checkbox" id="cat-1" className='ml-2 text-primary focus:ring-0 rounded-sm cursor-pointer'/>  
                                    <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer'>Latest</label>
                                
                                </div>

                                <div className='flex items-center'>
                                    <input type="checkbox" id="cat-1" className='text-primary focus:ring-0 rounded-sm cursor-pointer'/>  
                                    <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer '>Fast shipping</label>
                                    
                                </div>

                                <div className='flex items-center'>
                                    <input type="checkbox" id="cat-1" className='text-primary focus:ring-0 rounded-sm cursor-pointer'/>  
                                    <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer'>Price (Low to High)</label>
                                    
                                </div>

                                <div className='flex items-center'>
                                    <input type="checkbox" id="cat-1" className='text-primary focus:ring-0 rounded-sm cursor-pointer'/>  
                                    <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer'>Price (High to Low)</label>
                                    
                                </div>
                            </div>
                    </div>
{/* Categories                    */}
                    <div className=''>
                        <h3 className='text-xl text-gray-800 mb-3 uppercase font-medium '>  Categories </h3>
                        <div className='space-y-2 space-x-2'>
                            <div className='flex items-center'>
                                <input type="checkbox" id="cat-1" className='ml-2 text-primary focus:ring-0 rounded-sm cursor-pointer'/>  
                                <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer '>Bed</label>
                                <div className='ml-auto text-gray-600 textp-sm'>(10)</div>
                            </div>

                            <div className='flex items-center'>
                                <input type="checkbox" id="cat-1" className='text-primary focus:ring-0 rounded-sm cursor-pointer'/>  
                                <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer'>Sofa</label>
                                <div className='ml-auto text-gray-600 textp-sm'>(15)</div>
                            </div>

                            <div className='flex items-center'>
                                <input type="checkbox" id="cat-1" className='text-primary focus:ring-0 rounded-sm cursor-pointer'/>  
                                <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer'>Table</label>
                                <div className='ml-auto text-gray-600 textp-sm'>(20)</div>
                            </div>

                            <div className='flex items-center'>
                                <input type="checkbox" id="cat-1" className='text-primary focus:ring-0 rounded-sm cursor-pointer'/>  
                                <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer'>Cabinate</label>
                                <div className='ml-auto text-gray-600 textp-sm'>(09)</div>
                            </div>
                        </div>
                    </div>

                    <div className='py-4'> 
                        <h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'> Wooden type </h3>
                        <div className='space-y-2 space-x-2'>
                            <div className='flex items-center'>
                                <input type="checkbox" id="cat-1" className='ml-2 text-primary focus:ring-0 rounded-sm cursor-pointer'/>  
                                <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer '>Sal wood</label>
                               
                            </div>

                            <div className='flex items-center'>
                                <input type="checkbox" id="cat-1" className='text-primary focus:ring-0 rounded-sm cursor-pointer'/>  
                                <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer'>Indian Rosewood</label>
                                
                            </div>

                            <div className='flex items-center'>
                                <input type="checkbox" id="cat-1" className='text-primary focus:ring-0 rounded-sm cursor-pointer'/>  
                                <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer'>Oak Wood</label>
                                
                            </div>

                            <div className='flex items-center'>
                                <input type="checkbox" id="cat-1" className='text-primary focus:ring-0 rounded-sm cursor-pointer'/>  
                                <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer'>Mulberry Wood</label>
                                
                            </div>
                        </div>
                    </div>
                    
{/* Price */}

                    <div>
                        
                        <h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'> Price  </h3>
                        <div className=''>
                            <RangeSlider defaultValue={[10, 50]} />
                        </div>
                    </div>
{/* Discount */}
                    <div className='py-4'> 
                            <h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>Discount </h3>
                            <div className='space-y-2 space-x-2'>
                                <div className='flex items-center'>
                                    <input type="checkbox" id="cat-1" className='ml-2 text-primary focus:ring-0 rounded-sm cursor-pointer'/>  
                                    <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer'>All Discount</label>
                                
                                </div>

                                <div className='flex items-center'>
                                    <input type="checkbox" id="cat-1" className='text-primary focus:ring-0 rounded-sm cursor-pointer'/>  
                                    <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer '>20% and above</label>
                                    
                                </div>

                                <div className='flex items-center'>
                                    <input type="checkbox" id="cat-1" className='text-primary focus:ring-0 rounded-sm cursor-pointer'/>  
                                    <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer'>30% and above</label>
                                    
                                </div>

                                <div className='flex items-center'>
                                    <input type="checkbox" id="cat-1" className='text-primary focus:ring-0 rounded-sm cursor-pointer'/>  
                                    <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer'>40% and above</label>
                                    
                                </div>

                                <div className='flex items-center'>
                                    <input type="checkbox" id="cat-1" className='text-primary focus:ring-0 rounded-sm cursor-pointer'/>  
                                    <label for="cat-1" className='text-gray-600 ml-3 cursol-pointer'>50% and above</label>
                                    
                                </div>
                            </div>
                    </div>
                </div>
            </div>
{/* product view */}
            <div className=''>
                <div className='col-span-1'>
                    <div class="bg-white shadow rounded overflow-hidden">  
                        <div className='relative'>
                        <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                            <img src={Product1Img} alt='' />
                        </div>
                            <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2'>
                                <Link className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-black transition'>
                                    <IoSearchOutline/>
                                </Link>

                                <Link className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-black transition'>
                                    <IoHeartOutline/>
                                </Link>

                            </div>
                        </div>
                        <div className='pt-4 pb-3 px-4 text-start'>
                            <Link className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Wooden Table </Link>
                            <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                                <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                                <p className='text-sm text-gray-400 line-through'> ₹3800 </p>
                            </div>
                        </div>
                        
                    </div>      
                </div>
                    
                <div className='col-span-1 mt-10'>
                    <div class="bg-white shadow rounded overflow-hidden">  
                        <div className='relative'>
                        <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                            <img src={Product1Img} alt='' />
                        </div>
                            <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2'>
                                <Link className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-black transition'>
                                    <IoSearchOutline/>
                                </Link>

                                <Link className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-black transition'>
                                    <IoHeartOutline/>
                                </Link>

                            </div>
                        </div>
                        <div className='pt-4 pb-3 px-4 text-start'>
                            <Link className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Wooden Table </Link>
                            <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                                <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                                <p className='text-sm text-gray-400 line-through'> ₹3800 </p>
                            </div>
                        </div>
                        
                    </div>      
                </div>

                <div className='col-span-1 mt-10'>
                    <div class="bg-white shadow rounded overflow-hidden">  
                        <div className='relative'>
                        <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                            <img src={Product1Img} alt='' />
                        </div>
                            <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2'>
                                <Link className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-black transition'>
                                    <IoSearchOutline/>
                                </Link>

                                <Link className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-black transition'>
                                    <IoHeartOutline/>
                                </Link>

                            </div>
                        </div>
                        <div className='pt-4 pb-3 px-4 text-start'>
                            <Link className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Wooden Table </Link>
                            <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                                <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                                <p className='text-sm text-gray-400 line-through'> ₹3800 </p>
                            </div>
                        </div>
                       
                    </div>      
                </div>
            </div>

            <div className=''>
                <div className='col-span-1'>
                    <div class="bg-white shadow rounded overflow-hidden">  
                        <div className='relative'>
                        <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                            <img src={Product1Img} alt='' />
                        </div>
                            <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2'>
                                <Link className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-black transition'>
                                    <IoSearchOutline/>
                                </Link>

                                <Link className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-black transition'>
                                    <IoHeartOutline/>
                                </Link>

                            </div>
                        </div>
                        <div className='pt-4 pb-3 px-4 text-start'>
                            <Link className='uppercase font-medium text-lg  mb-2 text-gray-800 hover:text-primary transition text-start'> Wooden Table </Link>
                            <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                                <p className='text-lg text-primary font-semibold'> ₹3500 </p>
                                <p className='text-sm text-gray-400 line-through'> ₹3800 </p>
                            </div>
                        </div>
                        
                    </div>      
                </div>
                    
                <div className='col-span-1 mt-10'>
                    <div class="bg-white shadow rounded overflow-hidden">  
                        <div className='relative'>
                        <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                            <img src={Product1Img} alt='' />
                        </div>
                            <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2'>
                                <Link className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-black transition'>
                                    <IoSearchOutline/>
                                </Link>

                                <Link className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-black transition'>
                                    <IoHeartOutline/>
                                </Link>

                            </div>
                        </div>
                        <div className='pt-4 pb-3 px-4 text-start'>
                            <Link className='uppercase font-medium text-lg  mb-2 text-gray-800 hover:text-primary transition text-start'> Wooden Table </Link>
                            <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                                <p className='text-lg text-primary font-semibold'> ₹3500 </p>
                                <p className='text-sm text-gray-400 line-through'> ₹3800 </p>
                            </div>
                        </div>
                        
                    </div>      
                </div>
            </div>

           <div className=''>
                <div className='col-span-1'>
                    <div class="bg-white shadow rounded overflow-hidden">  
                        <div className='relative'>
                        <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                            <img src={Product1Img} alt='' />
                        </div>
                            <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2'>
                                <Link className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-black transition'>
                                    <IoSearchOutline/>
                                </Link>

                                <Link className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-black transition'>
                                    <IoHeartOutline/>
                                </Link>

                            </div>
                        </div>
                        <div className='pt-4 pb-3 px-4 text-start'>
                            <Link className='uppercase font-medium text-lg  mb-2 text-gray-800 hover:text-primary transition text-start'> Wooden Table </Link>
                            <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                                <p className='text-lg text-primary font-semibold'> ₹3500 </p>
                                <p className='text-sm text-gray-400 line-through'> ₹3800 </p>
                            </div>
                        </div>
                        
                    </div>      
                </div>
                    
                <div className='col-span-1 mt-10'>
                    <div class="bg-white shadow rounded overflow-hidden">  
                        <div className='relative'>
                        <div className='min-h-50 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                            <img src={Product1Img} alt='' />
                        </div>
                            <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2'>
                                <Link className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-black transition'>
                                    <IoSearchOutline/>
                                </Link>

                                <Link className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-black transition'>
                                    <IoHeartOutline/>
                                </Link>

                            </div>
                        </div>
                        <div className='pt-4 pb-3 px-4 text-start'>
                            <Link className='uppercase font-medium text-lb  mb-2 text-gray-800 hover:text-primary transition text-start'> Wooden Table </Link>
                            <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                                <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                                <p className='text-sm text-gray-400 line-through'> ₹3800 </p>
                            </div>
                        </div>
                        
                    </div>      
                </div>
            </div>

           
        </div>
            
           
    </div>
  )
}

export default Shoppage
