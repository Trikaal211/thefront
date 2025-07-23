import React from 'react'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { CgIfDesign } from "react-icons/cg";
import { PiCursorClick } from "react-icons/pi";
import { FaCode } from "react-icons/fa6";

const Home = () => {
  return (
    <>
        <div className='main'>
            <div className='left'>
                <h2>
                    Turn your ideas
                     into <span>success.</span>
                </h2>
                <p>
                    theFront will make your product <span> look modern</span> and professional while saving you precious time.
                </p>
                <div className='btn'>
            <Link to=''>Viewpages</Link> <Link to=''>Documentation</Link>
            </div>
            </div>
            <div className='rightside'>
                <div className='foty'><img src="/right.jpg" alt="" /></div>
            </div>

        </div>
        <div className='card-up'>
            <h1>Build accessible React apps with speed</h1>
            <p>Build a beautiful, modern website with flexible, fully customizable, atomic MUI components.</p>
        </div>
        <div className='card-impo'>
        <Card title="Built for developers" des="theFront is built to make your life easier. Variables, build tooling, documentation, and reusable components." icon={PiCursorClick} />
         <Card title="Designed to be modern" des="Designed with the latest design trends in mind. theFront feels modern, minimal, and beautiful." icon={CgIfDesign}/>
          <Card title="Documentation for everything" des= "We've written extensive documentation for components and tools, so you never have to reverse engineer anything." icon={ FaCode} />
          </div>
          <div className='mid-main'>
            <div className='mid-wrap'>
                <h1>Build tools and full documention</h1>
                <p>Components, plugins, and build tools are all thoroughly documented with live examples and markup for easier use and customization.</p>
                <div className='mid-image'>
                   <img src="/down.jpg" alt="" />
                </div>
            </div>
          </div>

        </>
  )
}

export default Home