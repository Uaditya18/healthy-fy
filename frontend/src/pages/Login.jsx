import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
const Login = () => {
  const [formData,SetFormData] = useState(
    {
      email:'',
      password:''
    } 
  )

  const handleInputChange = e=>{
      SetFormData({...formData,[e.target.name]:e.target.value})
  }
  return (
    <section>
      <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md '>
              <div className='flex flex-col items-center '>
              <h3 className="heading text-headingColor leading-12 mb-10 bg-transparent flex flex-row items-center gap-2">
                Hello! 
                <div className='-rotate-6 '>
                <span className="heading bg-blue-400  font-bold text-white shadow-lg  ">
                  Welcome
                </span>
                </div>
                Back..
              </h3>
              </div>
              
              
                  <form className='py-4 md:py-0 ' >
                    <div className='mb-5'>
                      <input type="email" placeholder='enter email' name='email' 
                      value={formData.email}
                      onChange={handleInputChange} 
                      className='w-full m-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                      focus:border-b-primaryColor text-[22px] leading-7 text-headingColor rounded cursor-pointer shadow-md' required />
                    </div>
                    
                    <div className='mb-5'>
                      <input type="password" placeholder='enter password' name='password' 
                      value={formData.password}
                      onChange={handleInputChange} 
                      className='w-full m-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                      focus:border-b-primaryColor text-[22px] leading-7 text-headingColor rounded cursor-pointer shadow-md' required />
                    </div>
                  </form>

                  <div className='flex flex-col items-center pb-5'>
                    <button type='submit' className='btn w-2/3 ] '>Login Here </button>
                  </div>

                  <p className='mt-5 text-textColor text-center my-0'>Don't have an account? 
                    <Link to='/register' className='text-primaryColor font-medium ml-1 text__para'>Register </Link>
                  </p>
              

      
      </div>
    </section>
  )
}

export default Login