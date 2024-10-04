import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import uploadImageToCloudinary  from '../../utils/uploadCloudinary'
import {toast} from 'react-toastify' 
import { BASE_URL, token } from '../../config'
import {HashLoader} from 'react-spinners'

const Profile = ({user}) => {

  
  const[selectedFile,setSelectedFile] = useState(null)
  const[loading,setLoading]=useState(false);


  const [formData,SetFormData] = useState(
    {
      name:'',
      email:'',
      password:'',
      bloodType:'',
      gender:'',
      photo:null

    }
  )

  const navigate = useNavigate();

  const handleInputChange = e=>{
      SetFormData({...formData,[e.target.name]:e.target.value})
  }


  useEffect(() => {
    SetFormData({ name: user.name, email: user.email, photo: user.photo, gender:user.gender, bloodType: user.bloodType})
  },[user])

  const handleFileInputChange= async event=>
  {
    const file = event.target.files[0]
    //  using cloudanry to upload file 
    const data = await uploadImageToCloudinary(file);
    setSelectedFile(data.url)
    SetFormData({...formData, photo: data.url});

  }

  const submitHandler = async event=>{
    event.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`${BASE_URL}/users/${user._id}`,{
        method:'put',
        headers:{
          'Content-Type':'application/json',
          Authorization:`Bearer ${token}`
        },
        body:JSON.stringify(formData)
      })

      const {message} = await res.json()
      if(!res.ok){
        throw new Error(message)
      }
      
      setLoading(false)
      toast.success(message) // toast is not working
      navigate('/users/profile/me')
      

    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <div className='mt-10'>
      <form onSubmit={submitHandler}> 
        <div className='mb-5'>
        <input type="text" placeholder='Full Name' name='name' 
                value={formData.name}
                onChange={handleInputChange}
                className='w-full m-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                focus:border-b-primaryColor text-[22px] leading-7 text-headingColor rounded cursor-pointer shadow-md' required />
        </div>
        <div className='mb-5'>
        <input
        type="email" 
        placeholder='Enter your email' 
        name='email' 
        value={formData.email}
        onChange={handleInputChange}
        className='w-full m-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
        focus:border-b-primaryColor text-[22px] leading-7 text-headingColor rounded cursor-pointer shadow-md' 
        aria-readonly
        readOnly />
        </div>
        <div className='mb-5' >
        <input 
        type="password"
        placeholder='enter password' name='password' 
          value={formData.password}
          onChange={handleInputChange}
          className='w-full m-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
          focus:border-b-primaryColor text-[22px] leading-7 text-headingColor rounded cursor-pointer shadow-md'  />
        </div>


        <div className='mb-5' >
        <input 
        type="text"
        placeholder='enter blood Type' name='bloodType' 
          value={formData.bloodType}
          onChange={handleInputChange}
          className='w-full m-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
          focus:border-b-primaryColor text-[22px] leading-7 text-headingColor rounded cursor-pointer shadow-md' required />
        </div>

        <div className='mb-5 flex item-center justify-between p-4'>
            

            <label className='text-headingColor font-bold text-[16px] leading-7'>Gender:
                <select name="gender" 
                    value={formData.gender}
                    onChange={handleInputChange}
                    className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline'> 
                      <option value="">select</option>
                      <option value="male">male</option>
                      <option value="female">female</option>
                      <option value="others">others</option>
                </select>
            </label>
        </div>

        <div className='mb-5 flex items-center gap-3'>
        {formData.photo && <figure className='w-[60px] rounded-full border-2 border-solid border-primaryColor
          flex items-center justify-center'>
            <img src={formData.photo} alt="" className='w-full rounded-full' />
          </figure>}

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
        text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'>{selectedFile? selectedFile.name : "Upload Photo"}</label>
        </div>
        </div>

        <div className='flex flex-col items-center pb-5'>
              <button 
              disabled={loading && true}
              type='submit' className='btn w-2/3 ] '>{loading?<HashLoader size={35} color='#ffffff' />:`update`} </button>
            </div>
  </form>
  </div>
  )
}

export default Profile