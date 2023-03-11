import React from 'react'
import { Route, BrowserRouter, Routes} from "react-router-dom";
import Footer from './Components/Home/Footer'
import Navbar from './Components/Home/Navbar'
import Profile from './Components/Profile/Profile'
import Changepassword from './Components/UserAuthentication/Changepassword'
import Forgotpass from './Components/UserAuthentication/Forgotpass'
import Login from './Components/UserAuthentication/Login'
import Otppassword from './Components/UserAuthentication/Otppassword'
import Register from './Components/UserAuthentication/Register'
import Resetpassword from './Components/UserAuthentication/Resetpassword'
import Venderdetail from './Components/Vendor/Venderdetail'

const Routerr = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Changepassword/>
        <Resetpassword/>
        <Otppassword/>
        <Profile/>
        <Venderdetail/>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgotpassword" element={<Forgotpass />} /> 
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routerr