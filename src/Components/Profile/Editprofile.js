import React from 'react'

const Editprofile = () => {
  return (
    <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
    <div class="container max-w-screen-lg mx-auto">
      <div>
        <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div class="text-gray-600">
              <p class="font-medium text-lg">Update Profile</p>
              <p>Please fill out all the fields.</p>
            </div>
  
            <div class="lg:col-span-2">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div class="md:col-span-5">
                  <label for="full_name">Full Name</label>
                  <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
                </div>
  
                <div class="md:col-span-5">
                  <label for="email">Email Address</label>
                  <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                </div>
  
                <div class="md:col-span-3">
                  <label for="address">Address</label>
                  <input type="text" name="address" id="address" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
                </div>
  
                <div class="md:col-span-2">
                  <label for="city">City</label>
                  <input type="text" name="city" id="city" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                </div>
  
                <div class="md:col-span-2">
                <label for="mobile">Mobile no</label>
                  <input type="mobile" name="mobile" id="mobile" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
                </div>
  
                <div class="md:col-span-2">
                  <label for="state">State</label>
                  <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input name="state" id="state" placeholder="State" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />
                   
                  </div>
                </div>
  
                <div class="md:col-span-1">
                  <label for="zipcode">Pincode</label>
                  <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value="" />
                </div>
                <div class="md:col-span-5 text-right">
                  <div class="inline-flex items-end">
                    <button class="bg-orange-800 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded">Save Change </button>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Editprofile
