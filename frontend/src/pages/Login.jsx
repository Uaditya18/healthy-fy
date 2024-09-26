import React, { useContext } from 'react'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { BASE_URL } from '../config'
import {toast} from 'react-toastify';
import { authContext } from '../context/AuthContext.jsx';
import HashLoader from 'react-spinners'




const Login = () => {
  const [formData,SetFormData] = useState(
    {
      email:'',
      password:''
    } 
  )

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const {dispatch} = useContext(authContext);

  const handleInputChange = e=>{
      SetFormData({...formData,[e.target.name]:e.target.value})
  }

  const submitHandler = async event=>{
    event.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`${BASE_URL}/auth/login`,{
        method:'post',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
      })

      const result = await res.json()
      if(!res.ok){
        throw new Error(result.message)
      }
      
      dispatch({
        type:'LOGIN_SUCCESS',
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,
        },
      });
      console.log(result.data,"login successful");
      
      
      setLoading(false)
      toast.success(result.message) // toast is not working
      navigate('/home')
      

    } catch (error) {
      setLoading(false)
    }
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
              
              
                  <form className='py-4 md:py-0' onSubmit={submitHandler} >
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

                    <div className='flex flex-col items-center pb-5'>
                    <button type='submit' className='btn w-2/3 '>{loading?<HashLoader size={25} color="#fff"/>: 'Login Here'} </button>
                  </div>

                  </form>

                  
                  <p className='mt-5 text-textColor text-center my-0'>Don't have an account? 
                    <Link to='/register' className='text-primaryColor font-medium ml-1 text__para'>Register </Link>
                  </p>
              

      
      </div>
    </section>
  )
}

export default Login