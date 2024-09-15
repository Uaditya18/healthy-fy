import React from 'react'
import {Link} from 'react-router-dom'
import {IoIosArrowForward} from 'react-icons/io'
const ServiceCard = ({item, index}) => {
  const {name, desc, bgColor, textColor} = item
  return (
    <div className='text-[30px] px-3 lg:px-5'>
      <h2 className='heading text-center'>{name}</h2>
      <p className='text__para text-center'>{desc}</p>

      <div className='flex text-center justify-between mt-[30px]'>
      <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[##181A1E]  flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
            <IoIosArrowForward/>
            </Link>

        <span className='w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600] '
        style={{
          background: `${bgColor}`,
          color: `${textColor}`,
          borderRadius: "6px 0 0 ppx"
        }}>
          {index+1}
          </span>
      </div>
    </div>
  )
}

export default ServiceCard