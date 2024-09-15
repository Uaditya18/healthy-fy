import React, { useState } from 'react'
import signupImg from './../assets/images/signup.gif'
import avatar from './../assets/images/doctor-img01.png'
import {Link} from 'react-router-dom'

const Signup = () => {


  const[selectedPhoto,setSelectedPhot] = useState(null)
  const[previewUrl,setPreviewUrl] = useState('')

  const [formData,SetFormData] = useState(
    {
      name:'',
      email:'',
      password:'',
      role:"patient",
      gender:'',
      photo:selectedPhoto

    }
  )

  const handleInputChange = e=>{
      SetFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleFileInputChange= async event=>
  {
    const file = event.target.files[0]
    // later we will use cloudanry to upload file 
  }

  const submitHandler = async event=>{
    event.preventDefault()
  }

  return (
    <section className='px-5 xl:px-0'>
      <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 '>
          {/*========== img box ====== */}
          <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
            <figure className='rounded-l-lg'>
              <img src={signupImg} alt="" className='rounded-l-lg' />
            </figure>
          </div>

          {/*========== Sign up section ==========*/}
          <div className='rounded-l-lg lg:pl-16 py-10'>
            <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>create an <span className='text-primaryColor'>account</span></h3>

            <form onSubmit={submitHandler}> 
              <div className=''>
              <input type="text" placeholder='Full Name' name='name' 
                      value={formData.name}
                      onChange={handleInputChange}
                      className='w-full m-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                      focus:border-b-primaryColor text-[22px] leading-7 text-headingColor rounded cursor-pointer shadow-md' required />
              </div>
              <div className=''>
              <input type="email" placeholder='Enter your email' name='email' 
                      value={formData.email}
                      onChange={handleInputChange}
                      className='w-full m-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                      focus:border-b-primaryColor text-[22px] leading-7 text-headingColor rounded cursor-pointer shadow-md' required />
              </div>
              <div className=''>
              <input type="password" placeholder='enter password' name='name' 
                      value={formData.password}
                      onChange={handleInputChange}
                      className='w-full m-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                      focus:border-b-primaryColor text-[22px] leading-7 text-headingColor rounded cursor-pointer shadow-md' required />
              </div>

              <div className='mb-5 flex item-center justify-between p-4'>
                  <label className='text-headingColor font-bold text-[16px] leading-7'>Are You a: 
                  <select name="role" 
                  value={formData.role}
                  onChange={handleInputChange}
                  className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline '> 
                    <option value="patient">Patient</option>
                    <option value="Doctor">Doctor</option>
                  </select>
                  </label>

                  <label className='text-headingColor font-bold text-[16px] leading-7'>Gender:
                  <select name="gender" 
                  value={formData.gender}
                  onChange={handleInputChange}
                  className='text-textColor font-semibold text--[15px] leading-7 px-4 py-3 focus:outline '> 
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="others">others</option>
                  </select>
                  </label>
              </div>

              <div className='mb-5 flex items-center gap-3'>
                <figure className='w-[60px] rounded-full border-2 border-solid border-primaryColor
                flex items-center justify-center'>
                  <img src={avatar} alt="" className='w-full rounded-full' />
                </figure>

               <div className='relative w-[130px] h-[50px]'>
               <input 
               type="file" 
               name='photo'
               onChange={handleFileInputChange}
               id='customerFile'
               accept='.jpg, .img'
               className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
               />
               <label htmlFor="customerFile" className='absolute top-0 left-0 w-full flex items-center px-[0.75rem] py-[0.375rem]
               text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'>Upload Photo</label>
               </div>
              </div>

              <div className='flex flex-col items-center pb-5'>
                    <button type='submit' className='btn w-2/3 ] '>Sign Up Here </button>
                  </div>

                  <p className='mt-5 text-textColor text-center my-0'>Already have an account? 
                    <Link to='/login' className='text-primaryColor font-medium ml-1 text__para'>Login </Link>
                  </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup