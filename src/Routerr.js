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
import Productdetail from './Components/Product/Productdetail';
import Shoppage from './Components/Shop/Shoppage';

import Footer from './Components/Home/Footer';
import Venderview from './Components/Vendor/Venderview';
import UpdateProduct from './Components/Vendor/UpdateProduct';
import Addtocart from './Components/Shop/Addtocart';
import Blog from './Components/Blog/Blog';
import Custom from './Components/Service/Custom';
import Address from './Components/Payment/Address';
import Payment from './Components/Payment/Payment';
import Contact from './Components/Contact/Contact';
import About from './Components/Contact/About';
import Wishlist from './Components/Shop/Wishlist';
import Pending from './Components/Vendor/Pending';
import Chair from './Components/Product/Chair';
import Bed from './Components/Product/Bed';
import Cabinet from './Components/Product/Cabinet';

import Exclusive from './Components/Product/Exclusive';
import GiftItems from './Components/Product/GiftItems';
import Table from './Components/Product/Table';
import Card from './Components/Card';
import CheckoutSuccess from './Components/Shop/CheckoutSuccess';
import Writereview from './Components/Review/Writereview';
import Profile1 from './Components/Profile/Profile1';
import Editprofile1 from './Components/Profile/Editprofile1';
import Bed_help from './Components/Help/Bed_help';
import Cabinet_help from './Components/Help/Cabinet_help';
import Sofa_help from './Components/Help/Sofa_help';
import Chair_help from './Components/Help/Chair_help';
import Sofa from './Components/Product/Sofa';
import Policy from './Components/footer/Policy';
import Warranty from './Components/footer/Warranty';



const Routerr = () => {
  const pathName = window.location.pathname.split("/")[1]
  console.log('pathName', pathName)
  return (
    <div>
        <BrowserRouter>
      {pathName === "addtocart" ? "" :<Navbar/>}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgotpassword" element={<Forgotpass />} /> 
              <Route path="/changepassword" element={<Changepassword />} /> 
              <Route path="/resetpassword" element={<Resetpassword />} /> 
              <Route path="/otppassword" element={<Otppassword />} /> 
              <Route path="/profile" element={<Profile />} /> 
              <Route path="/editprofile" element={<Editprofile />} /> 
              <Route path="/venderdetail" element={<Venderdetail />} /> 
              <Route path="/productdetail/:id" element={<Productdetail />} /> 
              <Route path="/shoppage" element={<Shoppage />} /> 
              <Route path="/addproduct" element={<Addproduct />} /> 
              <Route path="/updateproduct/:id" element={<UpdateProduct />} /> 
              <Route path="/venderview" element={<Venderview />} /> 
              <Route path="/addtocart" element={<Addtocart />} /> 
              <Route path="/blog" element={<Blog />} /> 
              <Route path="/custom" element={<Custom />} /> 
              <Route path="/address" element={<Address />} /> 
              <Route path="/payment" element={<Payment />} /> 
              <Route path="/contact" element={<Contact />} /> 
              <Route path="/about" element={<About />} /> 
              <Route path="/wishlist" element={<Wishlist />} /> 
              <Route path="/pending" element={<Pending />} /> 
              <Route path="/chair" element={<Chair />} /> 
              <Route path="/bed" element={<Bed />} /> 
              <Route path="/cabinet" element={<Cabinet />} /> 
              <Route path="/sofa" element={<Sofa />} /> 
              <Route path="/exclusive" element={<Exclusive />} /> 
              <Route path="/giftItems" element={<GiftItems />} /> 
              <Route path="/table" element={<Table />} /> 
              <Route path="/card" element={<Card />} /> 
              <Route path="/checkoutSuccess" element={<CheckoutSuccess />} /> 
              <Route path="/writereview" element={<Writereview />} /> 
              <Route path="/profile1" element={<Profile1 />} /> 
              <Route path="/editProfile1" element={<Editprofile1 />} /> 

              <Route path="/bed_help" element={<Bed_help />} /> 
              <Route path="/cabinet_help" element={<Cabinet_help />} /> 
              <Route path="/sofa_help" element={<Sofa_help />} /> 
              <Route path="/chair_help" element={<Chair_help />} /> 
              <Route path="/policy" element={<Policy />} /> 
              <Route path="/Warranty" element={<Warranty />} /> 
              
             
            </Routes>
        {pathName === "addtocart" ? "" :<Footer/>}
        </BrowserRouter>

        
    </div>
  )
}

export default Routerr