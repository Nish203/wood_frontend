import React from "react";
import ReactStars from "react-rating-stars-component"
import { Link } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../BaseUrl/BaseUrl";
import { ErrorToast, SuccessToast } from "../../Toast";
import { useEffect } from "react";
import {AiFillStar} from "react-icons/ai"
function Writereview() {
  let config = {
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
    }
}
  const [newData,setNewData] = useState({})
  const [count,setCount] = useState({
    oneStar:"",
    twoStart:"",
    threeStar:"",
    fourStar:"",
    fiveStar:""
  })
  const [countTotal,setCountTotal] = useState()
  const [data,setData] = useState([])
  const [newRating,setNewRating] = useState()
  const ratingChanged = (newRating) => {
    setNewRating(newRating);
  };
  const handleChange = (e) =>{
    let {name,value} = e.target
    setNewData({...newData,[name]:value})
  } 
  const handleSubmit = async(e) =>{
    e.preventDefault()
    let body ={
      name:newData?.name,
      rating:newRating,
      review:newData?.review
    }
    console.log('body', body)
    await axios.post(baseUrl + "review/addReview", body, config).then((res) => {
      console.log('res', res)
      SuccessToast(res?.data?.message)
      setNewData({
        name:"",
        review:""
      })
      setNewRating()
      // localStorage.setItem("userData", JSON.stringify(res?.data?.user))
      // navigate("/profile")
  }).catch((err) => {
      console.log('err', err)
      ErrorToast(err?.response?.data.message)
  })
  }

  const getData = async() =>{
await axios.get(baseUrl + "review/getReview",config).then((res)=>{
  console.log('res', res)
  setData(res?.data?.review)
  setCount({
    oneStar:res?.data?.count?.one,
    twoStart:res?.data?.count?.two,
    threeStar:res?.data?.count?.three,
    fourStar:res?.data?.count?.four,
    fiveStar:res?.data?.count?.five
  })
  let total = res?.data?.count?.one + res?.data?.count?.two + res?.data?.count?.three + res?.data?.count?.four + res?.data?.count?.five
  setCountTotal(total)
}).catch((err)=>{
  console.log('err', err)
})
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="container py-3">
      <div class=" ml-10 font-bold text-center text-3xl py-3    text-[#7f5539]">
        {" "}
        Customer Review{" "}
      </div>
      <div className="py-3 lg:py-10 px-1 mx-auto max-w-screen-md sm:w-3/5  border-b border-black">
        <form action="#" class="space-y-8  ">
          <div>
            <label
              for="name"
              class="block mb-2 text-bond font-medium text-gray-900 dark:text-gray-300"
            >
              Your Name
            </label>
            <input
              type="name"
              name="name"
              placeholder="Name"
              value={newData?.name}
              onChange={handleChange}
              class="shadow-sm bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              class="block mb-2 text-bond font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            {/* <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-yellow-400"
              />
            </div> */}
            <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
          </div>
          <div class="sm:col-span-2">
            <label
              for="review"
              class="block mb-2 text-bond font-medium text-gray-900 dark:text-gray-400"
            >
              Your review
            </label>
            <textarea
              id="review"
              rows="6"
              name="review"
              value={newData?.review}
              onChange={handleChange}
              placeholder="Review"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            ></textarea>
          </div>
          <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-yellow-900 sm:w-fit hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            onClick={handleSubmit}
          >
            Send review
          </button>
        </form>
      </div>

      <div className="container gap-3 mt-5 ">
        <div className=" md:self-start top-0  z-10 col-span-1 bg-white px-4 pb-6 rounded shadow overflow-hidden w-50 m-auto mb-5 ">
          <div className=" divide-y divide-gray-200 space-y-5 ">
            <div>
              <p class="ml-2 text-3xl text-center text-gray-900 dark:text-white">
                4.95 out of 5
              </p>
              <div class="flex items-center ml-32  mt-3 mb-3">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-300 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <p class="text-l font-medium text-center text-gray-500 dark:text-gray-400">
                {data?.length} global ratings
              </p>
              <div class="flex items-center mt-4">
                <span class="text-sm font-medium text-blue-600 dark:text-blue-500">
                  5 star
                </span>
                <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                  <div class="h-5 bg-yellow-400 rounded w-40"></div>
                </div>
                <span class="text-sm font-medium text-blue-600 dark:text-blue-500">
                  {Math.round(count?.fiveStar * 100 / countTotal)}%
                </span>
              </div>
              <div class="flex items-center mt-4">
                <span class="text-sm font-medium text-blue-600 dark:text-blue-500">
                  4 star
                </span>
                <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                  <div class="h-5 bg-yellow-400 rounded w-50"></div>
                </div>
                <span class="text-sm font-medium text-blue-600 dark:text-blue-500">
                {Math.round(count?.fourStar * 100 / countTotal)}%
                </span>
              </div>
              <div class="flex items-center mt-4">
                <span class="text-sm font-medium text-blue-600 dark:text-blue-500">
                  3 star
                </span>
                <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                  <div class="h-5 bg-yellow-400 rounded w-20"></div>
                </div>
                <span class="text-sm font-medium text-blue-600 dark:text-blue-500">
                {Math.round(count?.threeStar * 100 / countTotal)}%
                </span>
              </div>
              <div class="flex items-center mt-4">
                <span class="text-sm font-medium text-blue-600 dark:text-blue-500">
                  2 star
                </span>
                <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                  <div class="h-5 bg-yellow-400 rounded w-10"></div>
                </div>
                <span class="text-sm font-medium text-blue-600 dark:text-blue-500">
                {Math.round(count?.twoStart * 100 / countTotal)}%
                </span>
              </div>
              <div class="flex items-center mt-4">
                <span class="text-sm font-medium text-blue-600 dark:text-blue-500">
                  1 star
                </span>
                <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                  <div class="h-5 bg-yellow-400 rounded w-5"></div>
                </div>
                <span class="text-sm font-medium text-blue-600 dark:text-blue-500">
                {Math.round(count?.oneStar * 100 / countTotal)}%
                </span>
              </div>
            </div>
          </div>
        
        </div>

        <div className="col-span-3 grid grid-cols-3 gap-3">
          {data?.map((val)=>{
            return(
<div className="">
            <div class="bg-white shadow rounded overflow-hidden py-2 px-3">
              <h5 class="text-xl font-semibold mb-4">{val?.name}</h5>
              <div class="flex items-center  mt-3 mb-3">
              {val?.rating === 5 ? <>
                <AiFillStar color="rgb(255, 215, 0)"/>
                <AiFillStar color="rgb(255, 215, 0)"/>
                <AiFillStar color="rgb(255, 215, 0)"/>
                <AiFillStar color="rgb(255, 215, 0)"/>
                <AiFillStar color="rgb(255, 215, 0)"/>
                </> : val?.rating === 4 ? <>
                <AiFillStar color="rgb(255, 215, 0)"/>
                <AiFillStar color="rgb(255, 215, 0)"/>
                <AiFillStar color="rgb(255, 215, 0)"/>
                <AiFillStar color="rgb(255, 215, 0)"/>
                <AiFillStar />
                </>  :val?.rating === 3 ? <>
                <AiFillStar color="rgb(255, 215, 0)"/>
                <AiFillStar color="rgb(255, 215, 0)"/>
                <AiFillStar color="rgb(255, 215, 0)"/>
                <AiFillStar/>
                <AiFillStar />
                </> : val?.rating === 2 ? <>
                <AiFillStar color="rgb(255, 215, 0)"/>
                <AiFillStar color="rgb(255, 215, 0)"/>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                </> : val?.rating === 1 ? <>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                </> : ""}
              </div>
              <p class="mb-4">
                <FaQuoteLeft class="w-6 pr-2 inline-block" />
                {val?.review}
              </p>
            </div>
          </div>
            )
          })}
          

          
        </div>

        {/* <div className="">
          <div className="col-span-1 ">
            <div class="bg-white shadow rounded overflow-hidden py-2 px-3">
              <h5 class="text-xl font-semibold mb-4">Maria Smantha</h5>
              <div class="flex items-center  mt-3 mb-3">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-300 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <p class="mb-4">
                <FaQuoteLeft class="w-6 pr-2 inline-block" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p>
            </div>
          </div>

          <div className="col-span-1 mt-10">
            <div class="bg-white shadow rounded overflow-hidden py-2 px-3">
              <h5 class="text-xl  font-semibold mb-4">Maria Smantha</h5>
              <div class="flex items-center  mt-3 mb-3">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-300 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <p class="mb-4">
                <FaQuoteLeft class="w-6 pr-2 inline-block" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Writereview;
