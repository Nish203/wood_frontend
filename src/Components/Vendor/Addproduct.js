import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { ErrorToast, SuccessToast } from '../../Toast'
import { baseUrl } from '../BaseUrl/BaseUrl'
import {RxCross2} from "react-icons/rx"

function Addproduct() {
  const navigate = useNavigate()
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }
  }
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [material, setMaterial] = useState([])
  const [newData, setNewData] = useState({
    category:"64189ddf75ac0242b4513929"
  })
  const [image, setImage] = useState("")
  console.log('newData', newData)

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewData({ ...newData, [name]: value })
  }

  const getCategory = async () => {
    await axios.get(baseUrl + "category/get-category", config).then((res) => {
      console.log('res', res)
      setCategory(res?.data?.category);
    }).catch((err) => {
      console.log('err', err)
    })
  }
  const getSubCategory = async () => {
    await axios.get(baseUrl + "subcategory/get-subcategory", config).then((res) => {
      console.log('res', res)
      setSubCategory(res?.data?.subcategory);
    }).catch((err) => {
      console.log('err', err)
    })
  }

  const getMaterial = async () => {
    await axios.get(baseUrl + "material/get-material", config).then((res) => {
      console.log('res', res)
      setMaterial(res?.data?.Material);
    }).catch((err) => {
      console.log('err', err)
    })
  }

  const handleSubmit = async () =>{
    let data = subCategory.filter((v)=> v?.categoryId?._id === newData?.category)
    let body = {
      name:newData?.name , 
      category:newData?.category ?? "64189ddf75ac0242b4513929",
      subCategory:newData?.sub ?? data[0]?._id ?? null,
      desc:newData?.description,
      material:newData?.mui ?? "Teak Wood",
      size:`${newData?.size}*${newData?.size1}*${newData?.size2}`,
      price:Number(newData?.price),
      shippingDays:newData?.ship,
      quantity:Number(newData?.quantity),
      discPrice:Number(newData?.diprice),
      image
    }
    console.log('body', body)
    if(newData?.size || newData?.size1 || newData?.size2){
      if (!(newData?.size?.match('[0-9]{4}'))) {
        ErrorToast('Please enter valid size or Maximum 4 number allowed');
      }else if (!(newData?.size1?.match('[0-9]{4}'))) {
        ErrorToast('Please enter valid size or Maximum 4 number allowed');
      } else if(!(newData?.size2?.match('[0-9]{4}'))) {
        ErrorToast('Please enter valid size or Maximum 4 number allowed');
      }else if(newData?.size?.length > 4 || newData?.size1?.length > 4 || newData?.size2?.length > 4) {
        ErrorToast('Please enter valid size or Maximum 4 number allowed');
      }else{
        await axios.post(baseUrl + "product/add-product", body, config).then((res) => {
          console.log('res', res)
          SuccessToast(res?.data.message)
          // toast.success(res?.data?.message)
          navigate("/shoppage")
        }).catch((err) => {
          console.log('err', err)
        })
      }
    }
    
  }

  const handleIamge = async(e) =>{
    console.log('e.target', e.target)
    const formdata = new FormData()
    formdata.append("image",e.target.files[0])
    await axios.post(baseUrl + "image/upload-image",formdata,config).then((res)=>{
      console.log('res', res)
      setImage(res?.data?.url)
    }).catch((err)=>{
      console.log('err', err)
    })
  }
  useEffect(()=>{
    getCategory()
    getSubCategory()
    getMaterial()
  },[])
  return (
    <div className=''>
    <div className='sm:ml-72 ml-10 sm:mr-72 mr-10 mb-5'>
        <div>
             <h2 class=" text-center font-bold text-3xl py-5  text-[#7f5539]"> ADD PRODUCT DETAILS</h2>
        </div>
        <div class=" grid gap-4 gap-y-7 text-m  grid-cols-1 md:grid-cols-5">


        <div class="md:col-span-2">
                  <label for="Category">Product Category</label>
                    <select id="countries" name='category' value={newData?.category} onChange={(e)=> handleChange(e)} class="bg-gray-200 border mt-1 border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {category?.map((v, i) => {
                          return (
                            <>
                              <option value={v?._id}>{v?.name}</option>
                            </>
                          );
                        })}
                    </select>
                </div>

                {newData?.category === "6418b6d3ca7fde5a4e8cb52f" || newData?.category === "6418b6deca7fde5a4e8cb536" ? "" : <div class="md:col-span-3">
                  <label for="Category">Product Type</label>
                    <select id="countries" name="sub" value={newData?.sub} onChange={(e)=> handleChange(e)} class="bg-gray-200 border mt-1 border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {subCategory.filter((v) => v?.categoryId?._id === newData?.category)?.map((v, i) => {
                          return (
                            <>
                              <option value={v?._id}>{v?.name}</option>
                            </>
                          );
                        })} 
                    </select>
                </div>}


                <div class="md:col-span-5 ">
                  <label for="name">Product Name</label>
                  <input type="text" name="name" value={newData?.name} onChange={(e)=> handleChange(e)} id="name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-200"  />
                </div>
                <div class="md:col-span-5">
                  <label for="Image">Product Image</label>
                  <input type="file" onChange={(e) => handleIamge(e)} id="Image" class="h-10 border mt-2 rounded px-4 w-full bg-gray-200" placeholder="" />
                </div>
                {image && <div>
                  <img src={image} alt="" height={100} width={100} className='rounded' />
                  </div>}
                <div class="md:col-span-5">
                  <label for="Description">Product Description</label>
                  <textarea type="text" name="description" value={newData?.description} onChange={(e)=> handleChange(e)} id="Description" class="h-10 border mt-1 rounded px-4 w-full bg-gray-200" placeholder="" />
                </div>
  
             

                <div class="md:col-span-5">
                  <label for="Description">Product Material</label>
                  <select id="countries" name="mui" value={newData?.mui} onChange={(e)=> handleChange(e)} class="bg-gray-200 border mt-1 border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {material?.map((v, i) => {
                          return (
                            <>
                              <option value={v?.name}>{v?.name}</option>
                            </>
                          );
                        })} 
                    </select>
                </div>

                <div class="md:col-span-3">
                  <label for="Description">Product Size</label>
                  <div className='d-flex'>
                  <input type="text" min={0} name="size" pattern='[0-9]{4}' value={newData?.size} onChange={(e)=> handleChange(e)} id="Description" class="h-10 border mt-1 rounded px-4 w-full bg-gray-200" placeholder="In Inch" />
                  <RxCross2 size={50}/><input min={0} type="text" pattern='[0-9]{4}' name="size1" value={newData?.size1} onChange={(e)=> handleChange(e)} id="Description" class="h-10 border mt-1 rounded px-4 w-full bg-gray-200" placeholder="In Inch" />
                  <RxCross2 size={50}/><input min={0} type="text" pattern='[0-9]{4}' name="size2" value={newData?.size2} onChange={(e)=> handleChange(e)} id="Description" class="h-10 border mt-1 rounded px-4 w-full bg-gray-200" placeholder="In Inch" />
                  </div>
                </div>

                <div class="md:col-span-2">
                  <label for="Description">Product Ship_by</label>
                  <div className='d-flex align-items-center'>

                  <input type="number" min={0} name="ship" placeholder="In Days" value={newData?.ship} onChange={(e)=> handleChange(e)} id="Description" class="h-10 border mt-1 rounded px-4 w-full bg-gray-200"  /> <span className='ms-2'> Days</span>
                  </div>
                </div>

                <div class="md:col-span-3">
                <label for="Price">Product Price</label>
                  <input type="number" min={0} name="price" value={newData?.price} onChange={(e)=> handleChange(e)} id="Price" class="h-10 border mt-1 rounded px-4 w-full bg-gray-200"  placeholder="" />
                </div>
  
                <div class="md:col-span-2">
                  <label for="Diprice">Product Discountprice</label>
                  <input type="number"min={0}  name="diprice" value={newData?.diprice} onChange={(e)=> handleChange(e)} id="Diprice" class="h-10 border mt-1 rounded px-4 w-full bg-gray-200"  placeholder="" />
                </div>
  
                <div class="md:col-span-5">
                  <label for="Quantity">Product Quantity</label>
                  <input type="number"min={0}  name="quantity" value={newData?.quantity} onChange={(e)=> handleChange(e)} id="Quantity" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-200" placeholder=""  />
                </div>
                
                

                <div class="md:col-span-5 text-right">
                  <div class="inline-flex items-end">
                    <button class="bg-yellow-900 hover:bg-[#583823] text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>Submit</button>
                  </div>
                </div>
  
              </div>
    </div>
    </div>
  )
}

export default Addproduct