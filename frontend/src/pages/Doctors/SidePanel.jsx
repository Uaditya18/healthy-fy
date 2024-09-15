import React from 'react'

const SidePanel = () => {
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
      
            <div className='flex text-center justify-between '>
              <p className='text__para mt-0 font-semibold'>Ticket Price</p>
              <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor'>500 BDT</span>
            </div>
            <div className='flex flex-col'>
              <p>Available Time Slots:</p>
            </div>

            <ul>
                  <li className='flex flex-row items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>Sunday</p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>4:00 PM - 9:30 pm</p>
                  </li>
                  <li className='flex flex-row items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>Sunday</p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>4:00 PM - 9:30 pm</p>
                  </li>
                  <li className='flex flex-row items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>Sunday</p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>4:00 PM - 9:30 pm</p>
                  </li>
                  
            </ul>

        <button className='btn rounded-md px-2 w-full'>Book Appointment</button>
      </div>
    
  )
}

export default SidePanel