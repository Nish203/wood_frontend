import React from "react";
import logo from "../images/logo.png";
import {
  IoMenu,
  IoChevronDown,
  IoPersonOutline,
  IoBagHandleOutline,
  IoHeartOutline,
} from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import * as te from "tw-elements";
export default function Navbar({ fixed }) {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className=" sticky top-0  z-30 relative flex flex-wrap items-center justify-between bg-white
       bg-gradient-to-l from-yellow-800">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative  flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img src={logo} className="w-52 h-18  "></img>
            <Link to="" className="">
              <IoBagHandleOutline size={25} className="sm:hidden mt-3.5" />
            </Link>
            <div
              className=" cursor-pointer text-xl leading-none mr-2 py-3 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <IoMenu size={25}></IoMenu>
            </div>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className=" text-black items-center text-lg mr-16 mt-3 flex flex-col  lg:flex-row list-none lg:ml-auto">
              <li className="nav-item mr-8">
                <Link to="/"> Home </Link>
              </li>
              {/* Furniture */}
              <div class="relative cursor-pointer" data-te-dropdown-ref>
                <a
                  class="flex items-center text-l  "
                  id="dropdownMenuButton1"
                  data-te-dropdown-toggle-ref
                  aria-expanded="false"
                  data-te-ripple-init
                >
                  Furniture
                  <span class="ml-1">
                    <IoChevronDown />
                  </span>
                </a>
                <ul
                  class=" item-center py-2 pr-3 absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                  aria-labelledby="dropdownMenuButton1"
                  data-te-dropdown-menu-ref
                >
                  {/* <li className=" py-2  ">
                    <Link to="/shoppage"> All Product </Link>
                  </li> */}
                  <li className=" py-2  ">
                    <Link to="/chair"> Chair </Link>
                  </li>
                  <li className=" py-2 ">
                    <Link to="/bed"> Bed </Link>
                  </li>
                  <li className=" py-2  ">
                    <Link to="/table"> Table </Link>
                  </li>
                  <li className=" py-2 ">
                    <Link to="/cabinet"> Cabinet </Link>
                  </li>
                  <li className=" py-2 ">
                    <Link to="/sofa"> Sofa </Link>
                  </li>
                  <li className=" py-2 ">
                    <Link to="/giftItems"> Gift item </Link>
                  </li>
                  <li className=" py-2 ">
                    <Link to="/exclusive"> Exclusive </Link>
                  </li>
                </ul>
              </div>

             
              {/* service */}

              <li className="nav-item mr-2 sm:ml-5">
                <Link to="/custom"> Service </Link>
              </li>

               {/* blog */}

               <li className="nav-item mr-7  sm:ml-5">
                <Link to="/blog"> Blog </Link>
              </li>

               {/* About us               */}
               <li className="nav-item mr-2">
                <Link to="/about"> About us </Link>
              </li>

              {/* contact us */}

              <li className="nav-item mr-2 sm:ml-5">
                <Link to="/contact"> Contact us </Link>
              </li>

              <li className="nav-item mr-7 sm:ml-5">
                <Link to="/shoppage"> Browse All </Link>
              </li>
             

             

              <div className="ml-28 mt-2 gap-2 hidden sm:flex justify-between">
                {/* search */}
                {/* <form class="flex items-center ml-6">
                      <label for="simple-search" class="sr-only">
                        Search
                      </label>
                      <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="simple-search"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Search"
                          required
                        />
                      </div>
                     
                    </form> */}
                {/* Profile */}
                <div class="relative cursor-pointer" data-te-dropdown-ref>
                  <a
                    class="flex items-center   pb-2 text-l  uppercase text-black "
                    id="dropdownMenuButton1"
                    data-te-dropdown-toggle-ref
                    aria-expanded="false"
                    data-te-ripple-init
                  >
                    <IoPersonOutline size={24} className="mt-2"  />
                  </a>
                  <ul
                    class="absolute py-2 pr-3 z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                    aria-labelledby="dropdownMenuButton1"
                    data-te-dropdown-menu-ref
                  >
                    {!userData && (
                      <li className=" py-2 ">
                        <Link to="/login"> Login </Link>
                      </li>
                    )}
                    {userData && <><li className=" py-2">
                      <Link to="/profile">My Profile </Link>
                    </li>
                    <li className=" py-2">
                      <Link to="/editprofile"> Edit Profile </Link>
                    </li>
                    <li className=" py-2">
                      <Link to="/resetpassword">Change Password  </Link>
                    </li></>}
                    {userData?.role === "640a11bf7387cfb8e11df200" || userData?.role?._id === "640a11bf7387cfb8e11df200" ?<> <li className=" py-2">
                      <Link to="/addproduct"> Add Product </Link>
                    </li>
                    <li className=" py-2">
                    <Link to="/pending
                    "> My Product </Link>
                  </li><li className=" py-2">
                      <Link to="/venderview"> Order </Link>
                    </li></>: userData && <> <li className=" py-2">
                      <Link to="/venderdetail"> Vender </Link>
                    </li></>
                    }
                    
                    {userData && (
                      <li className="py-2">
                        <a
                          onClick={() => {
                            localStorage.clear();
                            navigate("/");
                          }}
                        >
                          {" "}
                          Logout{" "}
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
                <Link to="/wishlist">
                  <IoHeartOutline size={27} className="mt-2" />
                </Link>
                <Link to="/addtocart">
                  <IoBagHandleOutline size={25} className="mt-2"  />
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
