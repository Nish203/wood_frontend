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
  const getProduct = async () => {
    await axios
      .get(
        baseUrl + `product/getOrder`,
        config
      )
      .then((res) => {
        console.log("res", res);
        setData(res?.data?.getOrder);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getProduct()
  }, [])
  
  return (
    
<div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 mb-20">
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
            </tr>
        </thead>

        <tbody>
            {data?.map((val)=>{
                return(
<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    1
                </td>
                <td class="w-40 p-2 ">
                    <img src={val?.productId?.image} alt="Apple Watch" width={100} height={100} className='rounded'/>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {val?.productId?.name}
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {val?.productId?.desc} 
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {val?.category?.name}
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {val?.subCategory?.name}
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {val?.productId?.material}
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {val?.productId?.size} INCH
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {val?.productId?.shippingDays} day
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ₹{val?.productId?.price}
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                ₹{val?.productId?.discPrice}
                </td>

                <td class="px-6 py-4">
                    {val?.productQuantity}
                </td>
            </tr>
                )
            })}
            
        </tbody>
    </table>
</div>

 
  )
}

export default Venderview