import {useContext, useState} from 'react'
import { authContext } from '../../context/AuthContext'
import MyBookings from './MyBookings'
import Profile from './Profile'
import { BASE_URL } from '../../config'
import useGetProfile from '../../hooks/useFetchData'
import Loading from '../../components/Loader/Loading'
import Error from '../../components/Error/Error'

const MyAccount = () => {

  const {dispatch} = useContext(authContext);
  const [tab, setTab] = useState('bookings')

  const {data: userData, loading, error} = useGetProfile(`${BASE_URL}/users/profile/me`)

  console.log(userData,'user Data ');

  const handleLogout = () =>{
    dispatch({type:'LOGOUT'});
  }
  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
      {loading && <Loading/>}

      {error && <Error errMessage={error}/>}
      {
        !loading && !error && <div className='grid md:grid-cols-3 gap-10'>
        <div className='pb-[50px] px-[30px] rounded-md'>
          <div className='flex items-center justify-center'>
            <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor'>
              <img src={userData.photo} alt="" className='w-full h-full rounded-full'/>
            </figure>
          </div>

          <div className='text-center mt-4'>
            <h3 className='text-[18px] leading-[30px] text-headingColor font-bold'>{userData.name}</h3>
            <p className='text-textColor text-[15px] leading-6 font-medium'>{userData.email}</p>
            <p className='text-textColor text-[15px] leading-6 font-medium'>Blood type: <span className='ml-2 text-red-600 text-[22px] leading-8'>{userData.bloodType}</span></p>
          </div>

          <div className='mt-[50px] md:mt-[100px]'>
            <button className='w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white' onClick={handleLogout}>Logout</button>
            <button className='w-full bg-red-600 p-3 text-[16px] leading-7 mt-4 rounded-md text-white'>Delete Account</button>
            
          </div>
        </div>

        <div className='md:col-span-2 md:ps-[30px]'>
          <div>
            <button className={`${tab === 'bookings' && 'bg-primaryColor text-white font-normal'} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
            onClick={() => setTab("bookings")}>
              My Bookings 
            </button>

            <button className={` ${tab === 'settings' && 'bg-primaryColor text-white font-normal'} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
            onClick={() => setTab("settings")}>
              Profile Settings 
            </button>
          </div>

          {tab === 'bookings'? <MyBookings/> : <Profile user={userData}/>}
        </div>
      </div>
      }
    </div>
    </section>
  )
}

export default MyAccount