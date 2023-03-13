import React from 'react'
import Help from './Components/Home/Help';
 import { Route, BrowserRouter, Routes} from "react-router-dom";
import Home from './Components/Home/Home';

import Editprofile from './Components/Profile/Editprofile';
import Profile from './Components/Profile/Profile'
import Changepassword from './Components/UserAuthentication/Changepassword'
import Forgotpass from './Components/UserAuthentication/Forgotpass'
import Login from './Components/UserAuthentication/Login'
import Otppassword from './Components/UserAuthentication/Otppassword'
import Register from './Components/UserAuthentication/Register'
import Resetpassword from './Components/UserAuthentication/Resetpassword'
import Addproduct from './Components/Vendor/Addproduct';
import Venderdetail from './Components/Vendor/Venderdetail'
import Explore from './Components/Home/Explore';
import Navbar from './Components/Home/Navbar';
import Nav from './Components/Home/Nav';



const Routerr = () => {
  return (
    <div>
        <Home/>
        
        {/* <Navbar/>
        <Explore/> */}
        {/* <Changepassword/>
        <Resetpassword/>
        <Otppassword/>
        <Profile/>
        <Editprofile/> 
        <Venderdetail/> */}
        {/* <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgotpassword" element={<Forgotpass />} /> 
            </Routes>
        </BrowserRouter> */}
        {/* <Footer/>
        <Addproduct/> */}
    </div>
  )
}

export default Routerr