import React, { useState } from "react";
import img1 from "../images/reset.jpeg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../BaseUrl/BaseUrl";
import { toast } from "react-toastify";
import { ErrorToast, SuccessToast } from "../../Toast";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    c_password: "",
    phone: null,
  });
  const [errMsg, setErrMsg] = useState(false);

  function onChangeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
console.log('formData', formData)
  const onClickHandler = async (e) => {
    e.preventDefault()
    if(formData?.phone){
      if (!(formData?.phone.match('[0-9]{10}'))) {
        ErrorToast('Please enter valid phone number');
      }else{
        if (
          formData?.name &&
          formData?.email &&
          formData?.password &&
          formData?.c_password
        ) {
          if (formData?.password === formData?.c_password) {
            let body = {
              name: formData.name,
              email: formData.email,
              password: formData.password,
              phone: formData.phone,
            };
            await axios
              .post(baseUrl + "users/create-user", body)
              .then((res) => {
                console.log("res", res);
                setFormData({
                  name: "",
                  email: "",
                  password: "",
                  c_password: "",
                  phone: null,
                });
                toast.error(res?.data?.message);
                SuccessToast("Successfully Register!")
                navigate("/login");
              })
              .catch((err) => {
                console.log("err", err);
              });
          } else {
            ErrorToast("Password and Confirm Password does not match!")
          }
        } else {
          setErrMsg(true);
          console.log("first");
        }
      }
    }else{
      if (
        formData?.name &&
        formData?.email &&
        formData?.password &&
        formData?.c_password
      ) {
        if (formData?.password === formData?.c_password) {
          let body = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            phone: formData.phone,
          };
          await axios
            .post(baseUrl + "users/create-user", body)
            .then((res) => {
              console.log("res", res);
              setFormData({
                name: "",
                email: "",
                password: "",
                c_password: "",
                phone: null,
              });
              toast.error(res?.data?.message);
              SuccessToast("Successfully Register!")
              navigate("/login");
            })
            .catch((err) => {
              console.log("err", err);
            });
        } else {
          ErrorToast("Password and Confirm Password does not match!")
        }
      } else {
        setErrMsg(true);
        console.log("first");
      }
    }
    
  };
  return (
    <div>
      <section class="bg-gray-50 min-h-screen flex items-center justify-center">
        <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-1 items-center">
          <div class="md:w-1/2 px-7 md:px-16">
            <h2 class="font-bold text-2xl text-[#7f5539]">Register</h2>
            <p class="text-sm mt-2 mb-4 text-[#7f5539]">
              Welcome..! Enter your Detail
            </p>

            <form action="" class="flex flex-col">
              <input
                class="p-2 mt-1 bg-gray-200 rounded border mb-3"
                type="text"
                onChange={(e) => onChangeHandler(e)}
                name="name"
                placeholder="Username"
              />
              {errMsg && !formData?.name && (
                <div className="text-danger mb-3">Name is required!</div>
              )}
              <input
                class="p-2 bg-gray-200 rounded border mb-3"
                type="email"
                onChange={(e) => onChangeHandler(e)}
                name="email"
                placeholder="Email"
              />
              {errMsg && !formData?.email && (
                <div className="text-danger mb-3">Email is required!</div>
              )}
              <div class="relative">
                <input
                  class="p-2 rounded bg-gray-200 border w-full mb-3"
                  type="password"
                  onChange={(e) => onChangeHandler(e)}
                  name="password"
                  placeholder="Password"
                />
                {errMsg && !formData?.password && (
                  <div className="text-danger mb-3">Password is required!</div>
                )}
              </div>
              <div class="relative">
                <input
                  class="p-2 rounded bg-gray-200 border w-full mb-3"
                  type="password"
                  onChange={(e) => onChangeHandler(e)}
                  name="c_password"
                  placeholder="Confirm Password"
                />
                {errMsg && !formData?.c_password && (
                  <div className="text-danger mb-3">
                    Confirm Password is required!
                  </div>
                )}
              </div>
              <input
                class="p-2 rounded bg-gray-200 border mb-3"
                type="text"
                onChange={(e) => onChangeHandler(e)}
                name="phone"
                placeholder="mobile number"
              />
              <button class="bg-[#7f5539] rounded w-40  text-white py-2 hover:scale-105 duration-300" onClick={onClickHandler}>
                Register
              </button>
            </form>

            <div class="mt-4 text-sm flex justify-between items-center text-[#7f5539]">
              <p>Already have an account?</p>
              <Link to="/login">
                <button class="py-1 px-4 mb-2 bg-white border rounded hover:scale-110 duration-300">
                  Login
                </button>
              </Link>
            </div>
          </div>

          <div class="md:block hidden w-1/2">
            <img src={img1}></img>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
