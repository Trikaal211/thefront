import React from 'react'
import '../styles/contact.css'
import Info from '../components/Info';
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  return (
    <>
    <div>
    <div className='contact'>
      <div>
        <h1>Contact us</h1>
       <p>theFront will make your product look modern and professional while saving you precious time.</p>
      </div>
     
      <div className='contact-right'>
        <img src="/awkit.svg" alt="" />
      </div>
    </div>
    </div>
    <div className='contact-detail-wrap'>
      <div className='contact-detail'>
        <h1>Contact details</h1>
        <p>
          Rather than worrying about switching offices every couple years, you can instead stay in the same location and grow-up from your shared coworking space to an office that takes up an entire floor.
        </p>
        <div className='info'>
          <Info icon= {IoIosCall} contact = 'Phone' detail='+39 659-657-0133' />
          <Info icon={IoIosMail} contact = 'Email' detail='hi@maccarianagency.com'/>
          <Info icon={FaLocationDot} contact = 'Address' detail= 'Via Venini 33, 20147'/>

        </div>
        <div className='map'>
            <div className='map-image'>
              <img src="/map.jpg" alt="" />
            </div>
        </div>
              </div>
    </div>

    </>
  )
}

export default Contact