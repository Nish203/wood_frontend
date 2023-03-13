import React from "react";
import logo from '../images/logo.png'
import { NavLink } from "react-bootstrap";
import {IoLocationOutline,IoMenu, IoChevronDown, IoPersonOutline,IoStorefrontOutline,IoBagHandleOutline,IoHeartOutline,IoSearchOutline} from 'react-icons/io5'
export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative  md:flex  flex-wrap items-center justify-between  px-2 bg-gray-300 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative hidden md:flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
              <img src={logo} className="w-52 h-12 "></img>
              {/* Stagwood */}
            </div>
          </div>

          <ul className=" text-l hidden md:flex flex-col lg:flex-row list-none lg:ml-auto">
            <div className="flex">
              <div className="hidden md:flex items-center px-3">
                <IoStorefrontOutline size={25} className="mr-2 " />
                <NavLink>
                  <p> Find a store </p>
                </NavLink>
              </div>
              <div className="hidden md:flex items-center px-3">
                <IoLocationOutline size={27} className="mr-2" />
                <NavLink>
                  {" "}
                  <p> About Us </p>{" "}
                </NavLink>
              </div>
            </div>
          </ul>
        </div>
      </nav>
{/* Bottom Navbar */}
      <nav className="relative flex flex-wrap items-center justify-between px-2  bg-gray-300">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative  flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block md:hidden mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              <img src={logo} className="w-52 h-12 "></img>
              {/* Stagwood */}
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <IoMenu></IoMenu>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className=" text-xl mr-10 flex flex-col  lg:flex-row list-none lg:ml-auto">
              
              <li className="nav-item mr-7">
                <NavLink to="/"> Home </NavLink>
              </li>
              <li className="nav-item mr-7">
                <NavLink to="/"> Table </NavLink>
              </li>
              <li className="nav-item mr-7">
                <NavLink to="/"> Exclusive </NavLink>
              </li>
              <li className="nav-item mr-7">
                <NavLink to="/"> Contact us </NavLink>
              </li>
  {/* Furniture */}
                  <div class="relative" data-te-dropdown-ref>
                    <a
                      class="flex items-center   pb-2 text-l text-black "
                      id="dropdownMenuButton1"
                      data-te-dropdown-toggle-ref
                      aria-expanded="false"
                      data-te-ripple-init
                    >
                     Furniture
                      <span class="ml-2 w-2">
                       <IoChevronDown/>
                      </span>
                    </a>
                    <ul
                      class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                      aria-labelledby="dropdownMenuButton1"
                      data-te-dropdown-menu-ref
                    >
                      <li className=" py-2 px-4">
                        <NavLink > Chair </NavLink>
                      </li>
                      <li className=" py-2 px-4">
                        <NavLink > Bed </NavLink>
                      </li>
                      <li className=" py-2 px-4">
                        <NavLink > Bench </NavLink>
                      </li>
                    </ul>
                  </div>
                

              <div className="ml-40  py-2 gap-2 hidden sm:flex justify-between">
                <NavLink>
                  <IoSearchOutline size={27} className=" mr-2  " />
                </NavLink>
  {/* Profile */}
                <div class="relative" data-te-dropdown-ref>
                    <a
                      class="flex items-center   pb-2 text-l  uppercase text-black "
                      id="dropdownMenuButton1"
                      data-te-dropdown-toggle-ref
                      aria-expanded="false"
                      data-te-ripple-init
                    >
                     <IoPersonOutline size={24} className="mr-2 " />
                    </a>
                    <ul
                      class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                      aria-labelledby="dropdownMenuButton1"
                      data-te-dropdown-menu-ref
                    >
                      <li className=" py-2 px-4">
                        <NavLink > Login </NavLink>
                      </li>
                      <li className=" py-2 px-4">
                        <NavLink > Vender </NavLink>
                      </li>
                      <li className=" py-2 px-4">
                        <NavLink > Profile </NavLink>
                      </li>
                      <li className=" py-2 px-4">
                        <NavLink > Update Profile </NavLink>
                      </li>
                    </ul>
                  </div>
                <NavLink>
                  <IoHeartOutline size={27} className="mr-2" />
                </NavLink>
                <NavLink to="/Addtocart">
                  <IoBagHandleOutline size={25} className="mr-2" />
                </NavLink>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}