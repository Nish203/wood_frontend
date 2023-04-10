import React, { useState } from "react";
import img1 from "../images/website/dining/dining__2.webp";
import { BsHandbagFill, BsFillSuitHeartFill } from "react-icons/bs";
import {IoIosHeartDislike} from "react-icons/io"
import axios from "axios";
import { baseUrl } from "../BaseUrl/BaseUrl";
import { useEffect } from "react";
import {FaBuysellads} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import { ErrorToast, SuccessToast } from "../../Toast";

// let status = false
function Productdetail() {
  const id = window.location.pathname
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }
  }
  const [data,setData] = useState([])
  console.log('data', data)
  const [status,setStatus] = useState(false)
  const [statusData,setStatusData] = useState({})
  console.log('status', status)
  const getData = () =>{
    let data = []
    let body = {}
    axios.post(baseUrl + "product/get-product",body,config).then((res)=>{
        console.log('res', res)
       data = res?.data?.product.filter((v)=>{
          if(v?._id === id.split("/")[2]){
            return v
          }
        })
        setData(data[0])
    }).catch((err)=>{
        console.log('err', err)
    })
  }
  const handleSubmit = () =>{
    let body ={}
    // setStatus(true)
    axios.post(baseUrl + `wishlist/add-wishlist?id=${id.split("/")[2]}`,body,config).then((res)=>{
      console.log('res', res?.data?.create?.isWishlisted)
      SuccessToast(res?.data?.message)
      setStatus(res?.data?.create?.isWishlisted)
  }).catch((err)=>{
      console.log('err', err)
  })
  }
  const handleUpdate = () =>{
    let body ={}
    axios.delete(baseUrl + `wishlist/delete-wishlist?id=${statusData?._id}`,config).then((res)=>{
      console.log('res', res?.data?.create?.isWishlisted)
      SuccessToast(res?.data?.message)
      setStatus(false)
  }).catch((err)=>{
      console.log('err', err)
  })
  }
  const getWishList = () =>{
    let data = []
    axios.get(baseUrl + "wishlist/get-wishlist",config).then((res)=>{
      console.log('res', res)
     data = res?.data?.product.filter((v)=>{
        if(v?.productId?._id === id.split("/")[2]){
          return v
        }
      })
      console.log('data11111', data?.length)
      setStatus(data?.length === 1 ? true : false)
      setStatusData(data[0])
  }).catch((err)=>{
      console.log('err', err)
  })
  }
  const navigate = useNavigate()
  let json = [
    {
    name:"test",
    category:"test",
    quntity:2,
    price:500,
  },
  {
    name:"demo",
    category:"demo",
    quntity:2,
    price:500,
  }]
  const [dataBuy,setDataBuy] = useState(json)

  // const handleSubmitBuy = (e) =>{
  //   let config = {
  //     headers: {
  //       'Authorization': 'Bearer ' + localStorage.getItem("token")
  //     }
  //   }
  //   e.preventDefault()
  //   console.log('data', data)
  //   axios.post(baseUrl + "product/buy-product",dataBuy,config).then((res)=>{
  //     console.log('res', res)
  //     if(res?.data?.data){
  //       window.open(res?.data?.data)
  //     }
  //   }).catch((err)=>{
  //     console.log('err', err)
  //   })
  // }
  const handleSubmit1 = (id) =>{
    let body={
        productId:id,
        productQuantity:1
    }
    axios.post(baseUrl +`product/addToCart`,body,config).then((res)=>{
        console.log('res', res)
        SuccessToast(res?.data?.message)
        getData()
    }).catch((err)=>{
        console.log('err', err)
        ErrorToast(err?.response?.data?.message)
    })
  }
  const handleSubmit2 = (id) =>{
    let body={
        productId:id,
        productQuantity:1
    }
    axios.post(baseUrl +`product/addToCart`,body,config).then((res)=>{
        console.log('res', res)
        // SuccessToast(res?.data?.message)
        navigate("/addtocart")
        getData()
    }).catch((err)=>{
        console.log('err', err)
        ErrorToast(err?.response?.data?.message)
    })
  }
  useEffect(()=>{
    getData()
    getWishList()
  },[status])
  let [num, setNum] = useState(0);
  let incNum = () => {
    if (num < 20) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };

  return (
    <div>
      <div className="grid sm:grid-cols-2  ml-10 py-10 ">
        <div>
          <img src={data?.image} className="w-10/12 " style={{height:"100%"}}></img>
          <br />
        </div>
        <div className="mt-5">
          <h3 className="text-3xl font-medium uppercase flex items-center mb-4">
            {" "}
            {data?.name}{" "}
          </h3>
          {/* Details */}
          <div className="space-y-1 ">
           

            <p className="text-gray-800 font-semibold space-x-2 flex items-center mb-2">
              <span className="text-gray-800 font-semibold"> Item:</span>
              <span className="text-gray-600"> {data?.category?.name}</span>
            </p>
            {data?.subCategory?.name && <p className="text-gray-800 font-semibold space-x-2 flex items-center mb-2">
              <span className="text-gray-800 font-semibold">Item Type:</span>
              <span className="text-gray-600"> {data?.subCategory?.name}</span>
            </p>}
            <p className="text-gray-800 font-semibold space-x-2 flex items-center mb-2">
              <span className="text-gray-800 font-semibold"> Material:</span>
            <span className="text-gray-600"> {data?.material} </span>
            </p>
            <p className="text-gray-800 font-semibold space-x-2 flex items-center mb-2">
              <span className="text-gray-800 font-semibold"> Size :</span>
              <span className="text-gray-600"> {data?.size} inch</span>
            </p>
            <p className="text-gray-800 font-semibold space-x-2 flex items-center mb-2">
              <span className="text-gray-800 font-semibold"> Ship by:</span>
              <span className="text-gray-600"> {data?.shippingDays} Day </span>
            </p>

            <p className="text-gray-800 font-semibold space-x-2 flex items-center mb-2 mt-3">
              <span className="text-2xl text-primary font-semibold"> ₹{data?.price - data?.discPrice}</span>
              <span className="text-base text-gray-400 line-through"> ₹{data?.price} </span>
            </p>
          </div>
          <div className="mt-4">
            <span className=" text-gray-800 font-semibold"> Description:</span>
            <p className=" mt-2 text-gray-600 mr-6 text-left">
              {data?.desc}
            </p>
          </div>
          {/* quantity start */}
          <div className="mt-3 ">
            <span className="text-gray-800 font-semibold "> Quantity</span>
            <div className=" mt-3 flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                <button type="button" onClick={decNum}>
                  -
                </button>
              </div>
              <div className="h-8 w-12 text-base  items-center justify-center">
                <input
                  type="text"
                  className="form-control h-8 w-9 items-center justify-center"
                  value={num}
                  onChange={handleChange}
                />
              </div>
              <div className="h-8 w-9 text-xl flex items-center justify-center cursor-pointer select-none">
                <button type="button" onClick={incNum}>
                  +
                </button>
              </div>
            </div>
          </div>

          {/* cart button */}
          <div className="flex gap-3 border-gray-200 pb-5 mt-6">
            {data?.quantity !== 0 ?<><a
              href="#"
              class="bg-yellow-900 text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2  transition"
              onClick={()=> handleSubmit1(data?._id)}
            >
              <i className="fas fa-shopping-bag">
                <BsHandbagFill />
              </i>
              Add to Cart
            </a>
            <a
              href="#"
              class="bg-yellow-900 text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2  transition"
              onClick={()=>handleSubmit2(data?._id)}
            >
              <i className="fas fa-shopping-bag">
                <FaBuysellads />
              </i>
              Buy Now
            </a></>:<a
              href="#"
              class="bg-yellow-900 text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2  transition"
            >
              <i className="fas fa-shopping-bag">
                <BsHandbagFill />
              </i>
              Out of stock
            </a>}
            {!status ?  <a
              href="#"
              class="bg-yellow-900 text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2  transition"
              onClick={handleSubmit}
            >
              <i className="fas fa-heart">
                <BsFillSuitHeartFill />
              </i>
              Wishlist
            </a> : <a
              href="#"
              class="bg-yellow-900 text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2  transition"
              onClick={handleUpdate}
            >
              <i className="fas fa-heart">
                <IoIosHeartDislike />
              </i>
              UnWishlist
            </a> }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productdetail;