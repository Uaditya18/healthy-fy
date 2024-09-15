import React  from 'react'
import {doctors} from './../../assets/data/doctors'
import DoctorCard from './DoctorsCard'

const DoctorsList = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5  lg:gap-[38px] mt-[30px] lg:mt-[55px]'>
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctors={doctor}/>
      ))}
    </div>
  )
}

export default DoctorsList