import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Pricing from './pages/Pricing'
import GlobalLayout from './layouts/GlobalLayout'

const Routers = () => {
  return (
    <BrowserRouter  basename="/thefront">

    <Routes>
        <Route path='/' element={<GlobalLayout/>}  >
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='faq' element={<Faq/>}/>
        <Route path='pricing' element={<Pricing/>}/>
        </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default Routers