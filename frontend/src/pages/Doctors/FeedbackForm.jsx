import React, { useState } from 'react'
import {AiFillStar} from 'react-icons/ai'
const FeedbackForm = () => {

  const[rating, setRating] = useState(0)
  const[hover,setHover] = useState(0)
  const[review,setReview] = useState("")

  const handleSubmitRequest = async e=>{
    e.preventDefault()

    // here to use api laterally 
  }
  return (
    <form action="">
      <div>
        <h3 className='text-headingColor leading-6 font-semibold mb-4'>How would you rate overall</h3>

        <div>
          {[...Array(5).keys()].map((_,index)=>{
            index +=1
            return( 
                <button type='button' key={index} 
                className={`
                  ${index <= ((rating && hover) || hover) ? "text-yellowColor" : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer` }
                onClick={()=> setRating(index)}
                onMouseEnter={()=>setHover(index)}
                onMouseLeave={() => setRating(rating)}
                onDoubleClick={
                  () =>{
                  setHover(0)
                  setRating(0)
                  }
                }>
                  <span>
                    <AiFillStar />
                  </span>
                </button>
            )
          })}
        </div>
      </div>
      <div>
      <h3 className='text-headingColor leading-6 font-semibold mb-4'>Share your feedback</h3>
      <textarea name="feedback" id="feedback" className='border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3' placeholder='write your feedBack'></textarea>
      <button type='submit' onChange={()=>setReview(e.target.value)} className='btn'
        onClick={handleSubmitRequest}
        >Submit Feedback</button>
      </div>
    </form>
  )
}

export default FeedbackForm