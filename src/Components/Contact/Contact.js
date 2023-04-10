import axios from 'axios'
import React, { useState } from 'react'
import { ErrorToast, SuccessToast } from '../../Toast'
import { baseUrl } from '../BaseUrl/BaseUrl'
import img from '../images/register2.jpeg'
function Contact() {
    let userData = JSON.parse(localStorage.getItem("userData"))
    let config = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
      }
    const [newData,setNewData] = useState({})
    const handleChange = (e) =>{
        let {name,value} = e.target
        setNewData({...newData,[name]:value})
    }
    const handleSubmit = async(e) =>{
        
        e.preventDefault()
        let body = {
            email:newData?.email,
            subject:newData?.subject,
            message:newData?.message,
        }
        if(userData){
            await axios.post(baseUrl + "contact/addContact",body,config).then((res)=>{
                SuccessToast(res?.data?.message)
                setNewData({
                    email:"",
                    subject:"",
                    message:""
                })
            }).catch((err)=>{
                console.log('err', err)
            })  
        }
        else{
            ErrorToast("Please Login First!")
          }
        
    }
  return (
    <section class="bg-white dark:bg-gray-900">
        <div class="flex flex-col w-full px-0 mx-auto md:flex-row"> 
    <div className='py-8 px-5'>
        <img src={img}></img>
    </div>

    <div class="py-8 lg:py-16 px-1 mx-auto max-w-screen-md sm:w-2/5">
        <h2 class="mb-4 text-4xl tracking-tight  text-center text-yellow-900 dark:text-white">Contact Us</h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-600 dark:text-gray-400 sm:text-xl">For product, order related queries, and pretty much anything else, get in touch with us. </p>
        <form action="#" class="space-y-8">
            <div>
                <label for="email" class="block mb-2 text-bond font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" name='email' value={newData?.email} onChange={(e) => handleChange(e)} id="email"  placeholder="Email" class="shadow-sm bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"  required/>
            </div>
            <div>
                <label for="subject" class="block mb-2 text-bond font-medium text-gray-900 dark:text-gray-300">Subject</label>
                <input type="text" id="subject" name='subject' value={newData?.subject} onChange={(e) => handleChange(e)}  placeholder="Subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"  required/>
            </div>
            <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-bond font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea id="message" rows="6" name='message' value={newData?.message} onChange={(e) => handleChange(e)}   placeholder="Message" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"></textarea>
            </div>
            <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-yellow-900 sm:w-fit hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleSubmit}>Send message</button>
        </form>
    </div>
    </div>
  </section>
  )
}

export default Contact