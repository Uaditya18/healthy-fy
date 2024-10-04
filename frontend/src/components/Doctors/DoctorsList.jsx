import React  from 'react'
import DoctorCard from './DoctorsCard'

import { BASE_URL } from '../../config'
import useFetchData from '../../hooks/useFetchData'
import Loading from '../Loader/Loading'
import Error from '../Error/Error'

const DoctorsList = () => {

  const {data:doctors, loading, error} = useFetchData(`${BASE_URL}/doctors`)

  return (
    <>
    {loading && <Loading/>}
      {error && <Error/>}
    {!loading && !error && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5  lg:gap-[38px] mt-[30px] lg:mt-[55px]'>
      {doctors.map((doctors) => (
        <DoctorCard key={doctors._id} doctors={doctors}/>
      ))}
    </div>}

    </>
  )
}

export default DoctorsList