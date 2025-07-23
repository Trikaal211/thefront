import React from 'react'
import Count from '../components/Count'
import Profile from '../components/Profile'
import '../styles/About.css'

const About = () => {
  return (
   <>
   <div className='top'>
    <h1>About us</h1>
    <p>
      We take you by hand on each step of the process
    </p>
    <p>
      As experts in both design & development, we help you go through the complete process. From your new website idea, to design, development, launch and scale!

    </p>
   </div>
   <div className='card-main'>
    <div className='card-wrap'>
      <div className='image1'> <img src="/img21.jpg" alt='study' /></div>
      <div className='image2'><img src="/img22.jpg" alt="study" /></div>
    </div>
    <div className='card-wrap1'>
      <div className='image3'><img src="img24.jpg" alt="study" /></div>
      <div className='image4'><img src="img25.jpg" alt="study" /></div>
    </div>
   </div>
   <div className='count-wrap'>
    <Count count='12'para='12 years in business.' />
    <Count count='5,2K' para = '5.200 sold copies'/>
    <Count count='99%'  para = '99% customer statisfication.'/>
   </div>
   <hr className='line' />
   <div className='center-page'>
    <div className='center1'>
      <p className='left-half'>
        We design and implement creative solutions to everyday business problems
      </p>
      <p className='right-half'>
        We are a team of creative consultants who help bridge the digital gap between companies and their clients with websites that not only serve as marketing platforms but also provide solutions to online business problems and digital marketing strategies that connect you with the ideal client and help create a loyal customer.

We are a team of creative consultants who help bridge the digital gap between companies and their clients with websites that not only serve as marketing platforms but also provide solutions to online business problems and digital marketing strategies that connect you with the ideal client and help create a loyal customer.
      </p>
    </div>
    <div className='center2'>
      <div><img src="fitbit-original.svg" alt="" /></div>
      <div><img src="google-original.svg" alt="" /></div>
      <div><img src="netflix-original.svg" alt="" /></div>
      <div><img src="paypal-original.svg" alt="" /></div>
      <div><img src="react.svg" alt="" /></div>
    </div>
   </div>
   <hr className='line2' />
   <div className='profile-wrap'>
    <Profile img={`${import.meta.env.BASE_URL}img21.jpg`} name='Chary Smith' occupation='SEO at Comoti' dis='I am an ambitious workaholic, but apart from that, pretty simple person.'/>
     <Profile img = "/img21.jpg" name='Clara Bertoletti' occupation='Junior Designer' dis='I am an ambitious workaholic, but apart from that, pretty simple person.'/>
      <Profile img = "/img21.jpg" name='Jhon Anderson' occupation='Senior Frontend Developer' dis='I am an ambitious workaholic, but apart from that, pretty simple person.
'/>
   </div>
   </>
  )
}

export default About