import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const GlobalLayout = () => {
  return (
    <>
    <Header/>

   <Outlet/>

   <Footer/>

   </>
  )
}

export default GlobalLayout