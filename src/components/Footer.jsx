import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'

const Footer = () => {
  return (
    <>
    <hr />
    <div className='foot'>
      <div className='oneset'>
        <div className='foot-logo'>
          <img src="/logo.svg" alt="" />
        </div>
        <div className='oneset1'>
          <Link>Home</Link>
           <Link>Documentation</Link>
            <Link className='special'>Purchase now</Link>
        </div>
      </div>
      <div className='oneset2'>
        <p>
          © theFront. 2021, Maccarian. All rights reserved
        </p>
        <p>
          When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.
        </p>
      </div>
    </div>
    </>
  )
}

export default Footer