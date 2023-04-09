import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../BaseUrl/BaseUrl';
import Card from '../Card';
import img from '../images/reset.jpeg'
function Venderview() {
    let userData = JSON.parse(localStorage.getItem("userData"));
  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("Approved");
  const getProduct = async () => {
    await axios
      .get(
        baseUrl + `product/get-product?id=${userData?._id}&status=${status}`,
        config
      )
      .then((res) => {
        console.log("res", res);
        setData(res?.data?.product);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getProduct()
  }, [status])
  
  return (
    
<div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 mb-20">
    {/* <Card/> */}
<div class="md:col-span-2">
                    <select id="countries" name='category'  value={status} onChange={(e)=>setStatus(e.target.value)} class="bg-gray-200 border mt-1 border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4 w-25">
                    <option value="Approved">Approved</option>
        <option value="Pending">Pending</option>
        <option value="Rejected">Rejected</option>
                    </select>
                </div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs  font-semibold text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only"> Sr_Num</span>
                </th>
                <th scope="col" class="px-6 py-3">
                    Image
                </th>
                <th scope="col" class="px-6 py-3">
                    Product_Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Sub_Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Material
                </th>
                <th scope="col" class="px-6 py-3">
                    Size
                </th>
                <th scope="col" class="px-6 py-3">
                    Ship_by
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Discount_Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>

        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    1
                </td>
                <td class="w-40 p-2 ">
                    <img src={img} alt="Apple Watch"/>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    Solid Wood Table
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    wooden Table with solid wood 
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    Table
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    Study Table
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    Teak Wood
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    12 x 44 x 50 inch
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    5 to 6 day
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ₹20,000
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ₹18,000
                </td>

                <td class="px-6 py-4">
                    <div class="flex items-center space-x-3">
                        <button class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span class="sr-only">Quantity button</span>
                            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                        <div>
                            <input type="text" id="first_product" class="bg-gray-50 w-11 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required/>
                        </div>
                        <button class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span class="sr-only">Quantity button</span>
                            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </td>
               
                <td class="px-6 py-4">
                    <NavLink> 
                        <div class=" font-semibold text-green-600 dark:text-green-500 hover:underline">Update </div> 
                    </NavLink>
                </td>
                <td class="px-6 py-4">
                    <NavLink> 
                        <div  class="font-semibold text-red-600 dark:text-red-500 hover:underline">Remove </div> 
                    </NavLink>
                </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    2
                </td>
                <td class="w-40 p-2 ">
                    <img src={img} alt="Apple Watch"/>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    Solid Wood Table
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    wooden Table with solid wood 
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    Table
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    Study Table
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    Teak Wood
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    12 x 44 x 50 inch
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    5 to 6 day
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ₹20,000
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ₹18,000
                </td>

                <td class="px-6 py-4">
                    <div class="flex items-center space-x-3">
                        <button class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span class="sr-only">Quantity button</span>
                            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                        <div>
                            <input type="text" id="first_product" class="bg-gray-50 w-11 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required/>
                        </div>
                        <button class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span class="sr-only">Quantity button</span>
                            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </td>
               
                <td class="px-6 py-4">
                    <NavLink> 
                        <div class=" font-semibold text-green-600 dark:text-green-500 hover:underline">Update </div> 
                    </NavLink>
                </td>
                <td class="px-6 py-4">
                    <NavLink> 
                        <div  class="font-semibold text-red-600 dark:text-red-500 hover:underline">Remove </div> 
                    </NavLink>
                </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    3
                </td>
                <td class="w-40 p-2 ">
                    <img src={img} alt="Apple Watch"/>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    Solid Wood Table
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    wooden Table with solid wood 
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    Table
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    Study Table
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    Teak Wood
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    12 x 44 x 50 inch
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    5 to 6 day
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ₹20,000
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ₹18,000
                </td>

                <td class="px-6 py-4">
                    <div class="flex items-center space-x-3">
                        <button class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span class="sr-only">Quantity button</span>
                            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                        <div>
                            <input type="text" id="first_product" class="bg-gray-50 w-11 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required/>
                        </div>
                        <button class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span class="sr-only">Quantity button</span>
                            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </td>
               
                <td class="px-6 py-4">
                    <NavLink> 
                        <div class=" font-semibold text-green-600 dark:text-green-500 hover:underline">Update </div> 
                    </NavLink>
                </td>
                <td class="px-6 py-4">
                    <NavLink> 
                        <div  class="font-semibold text-red-600 dark:text-red-500 hover:underline">Remove </div> 
                    </NavLink>
                </td>
            </tr>
        </tbody>
    </table>
</div>

 
  )
}

export default Venderview