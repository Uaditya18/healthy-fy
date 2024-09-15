import React from 'react'
import {Link } from 'react-router-dom'
import logo from './../../assets/images/logo.png'
import {RiLinkedinFill} from 'react-icons/ri'
import{ AiFillGithub} from 'react-icons/ai'
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    path: "https://github.com/Uaditya18",
    icon: <AiFillGithub  className='group-hover:text-white w-4 h-5'/>
  },
  {
    path: "www.linkedin.com/in/uaditya18",
    icon: <RiLinkedinFill  className='group-hover:text-white w-4 h-5'/>
  },
  {
    path: "https://x.com/uaditya1889",
    icon: <FaXTwitter  className='group-hover:text-white w-4 h-5'/>
  },
]

const quickLinks01 =[
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
]
const quickLinks02 =[
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get a Opinion",
  },
]

const quickLinks03 =[
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
  
]



const Footer = () => {
  const year = new Date().getFullYear()
  return (
    
    <footer>
     
      <div className="container">
        <div className='flex flex-col justify-between md:flex-row lg:flex-row flex-wrap text-textColor'>
          <div><img src={logo} alt="" />
          <p className='text-[16px] leading-7 font-[400] text-textColor'> Copyright © {year} developed by Aditya Upadhyay all right reserved.</p>
          
              <div className='flex items-center gap-3 mt-4'>
                {socialLinks.map((link,index) =>(
                  <Link to={link.path} key={index}>
                    {link.icon}
                  </Link>
                ))}
              </div>
          </div>
          
            <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Quick Links</h2>
                  <ul>
                    {quickLinks01.map((item,index) =>(
                      <li>
                        <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
                      </li>
                    ))}
                  </ul>
            </div>
            <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>I Want To:</h2>
                  <ul>
                    {quickLinks02.map((item,index) =>(
                      <li>
                        <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
                      </li>
                    ))}
                  </ul>
            </div>
            <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Support</h2>
                  <ul>
                    {quickLinks03.map((item,index) =>(
                      <li>
                        <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
                      </li>
                    ))}
                  </ul>
            </div>
         
         
        </div>
      </div>
    </footer>
  )
}

export default Footer