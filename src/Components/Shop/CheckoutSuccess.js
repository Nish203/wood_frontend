import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { baseUrl } from '../BaseUrl/BaseUrl'

function CheckoutSuccess() {
   let config = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }
    }
   useEffect(()=>{
      axios.post(baseUrl + "product/orderSuccess",{},config).then((res)=>{
         console.log('res', res)
      }).catch((err)=>{
         console.log('err', err)
      })
   },[])
  return (
    <div class="container">
   <div class="row">
      <div class="col-md-6 mx-auto my-5">
         <div class="payment">
            <div class="payment_header">
               <div class="check"><i class="fa fa-check" aria-hidden="true"></i></div>
            </div>
            <div class="content">
               <h1>Payment Success !</h1>
               <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. </p>
               <Link to="/">Go to Home</Link>
            </div>
            
         </div>
      </div>
   </div>
</div>
  )
}

export default CheckoutSuccess