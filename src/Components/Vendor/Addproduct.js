import React from 'react'
//import img1 from '../images/login1.jpeg'
const Addproduct = () => {
  return (
    
    <div className='sm:ml-72 ml-10 sm:mr-72 mr-10 '>
        {/* <img src={img1}></img> */}
        <div>
        <h2 class=" text-center font-bold text-3xl mb-10 text-[#7f5539]"> ADD PRODUCT DETAILS</h2>
        </div>
        <div class=" grid gap-4 gap-y-2 text-m  grid-cols-1 md:grid-cols-5">
                <div class="md:col-span-5">
                  <label for="name">Product Name</label>
                  <input type="text" name="name" id="name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-200"  />
                </div>
  
                <div class="md:col-span-5">
                  <label for="Description">Product Description</label>
                  <input type="text" name="Description" id="Description" class="h-10 border mt-1 rounded px-4 w-full bg-gray-200" placeholder="" />
                </div>
  
                <div class="md:col-span-2">
                  <label for="Category">Product Category</label>
                  <input type="text" name="Category" id="Category" class="h-10 border mt-1 rounded px-4 w-full bg-gray-200"  placeholder="" />
                </div>
  
                <div class="md:col-span-3">
                  <label for="Type">Wooden Type</label>
                  <input type="text" name="Type" id="Type" class="h-10 border mt-1 rounded px-4 w-full bg-gray-200" placeholder="" />
                </div>
  
                <div class="md:col-span-3">
                <label for="Price">Product Price</label>
                  <input type="mobile" name="Price" id="Price" class="h-10 border mt-1 rounded px-4 w-full bg-gray-200"  placeholder="" />
                </div>
  
                <div class="md:col-span-2">
                  <label for="Diprice">Product Discountprice</label>
                  <input type="mobile" name="Diprice" id="Diprice" class="h-10 border mt-1 rounded px-4 w-full bg-gray-200"  placeholder="" />
                </div>
  
                <div class="md:col-span-5">
                  <label for="Quantity">Product Quantity</label>
                  <input type="text" name="Quantity" id="Quantity" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-200" placeholder=""  />
                </div>
                
                <div class="md:col-span-5">
                  <label for="Image">Product Image</label>
                  <input type="file" name="Image" id="Image" class="h-10 border mt-2 rounded px-4 w-full bg-gray-200" placeholder="" />
                </div>

                <div class="md:col-span-5 text-right">
                  <div class="inline-flex items-end">
                    <button class="bg-[#664128] hover:bg-[#583823] text-white font-bold py-2 px-4 rounded">Submit</button>
                  </div>
                </div>
  
              </div>
    </div>
  )
}

export default Addproduct