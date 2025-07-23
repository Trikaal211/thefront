import React from 'react'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';

import '../styles/header.css'

const Header = () => {
    const [togglestate, Settogglestate] = useState(false);
    function handleToggle(){
        Settogglestate(prev=>!prev)
    };
  return (

    <nav>
        <div className='logo'><Link to=''><img src="/logo.svg" alt="" /></Link></div>

       <div className='scnd'>
        <Link to=''>Home</Link>
        <Link to='about'>About</Link>
        <Link to='contact'>Contact</Link>
        <Link to='faq'>Faq</Link>
        <Link to='pricing'>Pricing</Link>
        <Link className='login'  to=''>Login</Link>
        </div>
        <div className='navicon'>
            <IoMenu className='icon' onClick={handleToggle} />
        </div>
        <>
        {togglestate && (
            <div className='nav2'>
            {/* <Link to=''><img src="logo.svg" alt="" /></Link>     */}
            <Link to=''>Home</Link>
            <Link to='about'>About</Link>
            <Link to='contact'>Contact</Link>
            <Link to='faq'>Faq</Link>
            <Link to='pricing'>Pricing</Link>
             <Link  to='login'>Login</Link>
        </div>
        )
       
        }
        </>
       
    </nav>
    
    
  )
}

export default Header