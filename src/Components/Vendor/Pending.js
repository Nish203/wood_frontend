import React from 'react'
import * as te from "tw-elements";
import { Link, useNavigate } from 'react-router-dom'
import Product1Img from '../images/website/bench/bench__9.webp';
import {
    IoChevronDown
  } from "react-icons/io5";
import Card from '../Card';
import Swal from "sweetalert2";
import { baseUrl } from '../BaseUrl/BaseUrl';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Pending = () => {
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
        .post(
          baseUrl + `product/get-product?id=${userData?._id}&status=${status}`,{},
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
  
const onDelete = (id) => {
  axios
    .delete(baseUrl + `product/delete-product?id=${id}`, config)
    .then((res) => {
      console.log("res", res);
      getProduct();
      // getCount();
    })
    .catch((err) => {
      console.log("err", err);
    });
};
    useEffect(() => {
      getProduct()
    }, [status])
  return (
    <div className='container'>
        {/* <Card/> */}
    {/* <div class="relative" data-te-dropdown-ref>
                
                <a
                  class="flex items-center text-xl rounded mt-10 text-white p-1 w-32 ml-8 bg-yellow-900 text-center   "
                  id="dropdownMenuButton1"
                  data-te-dropdown-toggle-ref
                  aria-expanded="false"
                  data-te-ripple-init
                >
                  Product
                  <span class="ml-1">
                    <IoChevronDown />
                  </span>
                </a>
                <ul
                  class=" item-center py-2 pr-3 absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                  aria-labelledby="dropdownMenuButton1"
                  data-te-dropdown-menu-ref
                >
                  <li className=" py-2  ">
                    <Link> Pending </Link>
                  </li>
                  <li className=" py-2 ">
                    <Link> Approve </Link>
                  </li>
                  <li className=" py-2  ">
                    <Link> Rejected </Link>
                  </li>
                 
                </ul>
              </div> */}
    <div class="md:col-span-2">
                    <select id="countries" name='category'  value={status} onChange={(e)=>setStatus(e.target.value)} class="bg-gray-200 border mt-1 border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4 w-25">
                    <option value="Approved">Approved</option>
        <option value="Pending">Pending</option>
        <option value="Rejected">Rejected</option>
                    </select>
                </div>

        <div className='container py-4 flex items-center gap-3 ml-3'>
        <div className='container sm:grid grid-cols-3 gap-3 pb-16 '>
            {data?.map((val)=>{
                return(

            <div className=''>
            <div className=''>
                <div className='col-span-1'>
                    <div class="bg-white shadow rounded overflow-hidden">  
                        <div className='relative' onClick={()=> navigate(`/productdetail/${val?._id}`)}>
                        <div className='min-h-50 aspect-w-1 border-2 border-black aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80 '>
                            <img src={val?.image} alt='' className='h-100 w-100' />
                        </div>
                        </div>
                        <div className='pt-4 pb-3 px-4 text-start'>
                            <Link className='uppercase font-medium text-lb  mb-2 text-black hover:text-primary transition text-start'> {val?.name} </Link>
                           
                            <p>category: {val?.category?.name}</p>
                            <p>Sub_category: {val?.subCategory?.name}</p>
                            <p>Material: {val?.material}</p>
                            <p>Size: {val?.size} Inch</p>
                            <p>Ship_by: {val?.shippingDays} Days</p>
                          
                            <div className='flex items-baseline space-x-2 font-roboto'>
                                <p className='text-lb text-primary font-semibold'> ₹{val?.price - val?.discPrice} </p>
                                <p className='text-sm text-gray-400 line-through'> ₹{val?.price} </p>                                   
                            </div>
                            <p className='text-sm text-primary font-semibold mb-4'> Quantity: {val?.quantity} </p>
                            <button className='text-white bg-yellow-900 border-2 outline outline-2 outline-yellow-900 rounded-md mx-2 text-sm w-24 h-8 ' onClick={()=> navigate(`/updateproduct/${val?._id}`)}>Update</button>
                            <button className='text-white bg-yellow-900 border-2 outline outline-2 outline-yellow-900 rounded-md mx-1 text-sm w-24 h-8 ' onClick={() => {
                            Swal.fire({
                              text: "Are you sure you want to Delete ?",
                              icon: "warning",
                              showCancelButton: true,
                              showConfirmButton: true,
                              confirmButtonText: "Yes, Delete",
                              confirmButtonColor: "#D72852",
                              cancelButtonColor: "transparent",
                              cancelButtonText: "No, Cancel",
                            }).then((res) => {
                              if (res.isConfirmed) {
                                onDelete(val?._id);
                              }
                            });
                          }}>Delete</button>
                        </div>
                        
                    </div>      
                </div>
            </div>  
            </div>
                )
            })}

            {/* <div className=''>
                <div className='col-span-1'>
                    <div class="bg-white shadow rounded overflow-hidden">  
                        <div className='relative'>
                        <div className='min-h-50 aspect-w-1 border-2 border-black aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                            <img src={Product1Img} alt='' />
                        </div>
                        <div className='absolute inset-0  flex justify-end'>
                                
                            </div>
                        </div>
                        <div className='pt-4 pb-3 px-4 text-start'>
                            <Link className='uppercase font-medium text-lb  mb-2 text-black hover:text-primary transition text-start'> Product_Name </Link>
                            <p>category:</p>
                            <p>Sub_category:</p>
                            <p>Material:</p>
                            <p>Size:</p>
                            <p>Ship_by:</p>
                            <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                                <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                                <p className='text-sm text-gray-400 line-through'> ₹3800 </p>                                   
                            </div>
                            <p className='text-sm text-primary font-semibold mb-4'> Quantity: 30 </p>
                            <button className='text-white bg-yellow-900 border-2 outline outline-2 outline-yellow-900 rounded-md mx-2 text-sm w-24 h-8 '>Update</button>
                            <button className='text-white bg-yellow-900 border-2 outline outline-2 outline-yellow-900 rounded-md mx-1 text-sm w-24 h-8 '>Delete</button>
                        </div>
                        
                    </div>      
                </div>
            </div>  

            <div className=''>
                <div className='col-span-1'>
                    <div class="bg-white shadow rounded overflow-hidden">  
                        <div className='relative'>
                        <div className='min-h-50 aspect-w-1 border-2 border-black aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                            <img src={Product1Img} alt='' />
                        </div>
                        <div className='absolute inset-0  flex justify-end'>
                                
                            </div>
                        </div>
                        <div className='pt-4 pb-3 px-4 text-start'>
                            <Link className='uppercase font-medium text-lb  mb-2 text-black hover:text-primary transition text-start'> Product_Name </Link>
                            <p>category:</p>
                            <p>Sub_category:</p>
                            <p>Material:</p>
                            <p>Size:</p>
                            <p>Ship_by:</p>
                            <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                                <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                                <p className='text-sm text-gray-400 line-through'> ₹3800 </p>                                   
                            </div>
                            <p className='text-sm text-primary font-semibold mb-4'> Quantity: 30 </p>
                            <button className='text-white bg-yellow-900 border-2 outline outline-2 outline-yellow-900 rounded-md mx-2 text-sm w-24 h-8 '>Update</button>
                            <button className='text-white bg-yellow-900 border-2 outline outline-2 outline-yellow-900 rounded-md mx-1 text-sm w-24 h-8 '>Delete</button>
                        </div>
                        
                    </div>      
                </div>
            </div>  
            <div className=''>
                <div className='col-span-1'>
                    <div class="bg-white shadow rounded overflow-hidden">  
                        <div className='relative'>
                        <div className='min-h-50 aspect-w-1 border-2 border-black aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80'>
                            <img src={Product1Img} alt='' />
                        </div>
                        <div className='absolute inset-0  flex justify-end'>
                                
                            </div>
                        </div>
                        <div className='pt-4 pb-3 px-4 text-start'>
                            <Link className='uppercase font-medium text-lb  mb-2 text-black hover:text-primary transition text-start'> Product_Name </Link>
                            <p>category:</p>
                            <p>Sub_category:</p>
                            <p>Material:</p>
                            <p>Size:</p>
                            <p>Ship_by:</p>
                            <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                                <p className='text-lb text-primary font-semibold'> ₹3500 </p>
                                <p className='text-sm text-gray-400 line-through'> ₹3800 </p>                                   
                            </div>
                            <p className='text-sm text-primary font-semibold mb-4'> Quantity: 30 </p>
                            <button className='text-white bg-yellow-900 border-2 outline outline-2 outline-yellow-900 rounded-md mx-2 text-sm w-24 h-8 '>Update</button>
                            <button className='text-white bg-yellow-900 border-2 outline outline-2 outline-yellow-900 rounded-md mx-1 text-sm w-24 h-8 '>Delete</button>
                        </div>
                        
                    </div>      
                </div>
            </div>   */}

           
        </div>
            
        </div>    
    </div>
  )
}

export default Pending