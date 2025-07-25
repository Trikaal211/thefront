import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Pricing from './pages/Pricing';
import GlobalLayout from './layouts/GlobalLayout';

const Routers = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<Faq />} />
          <Route path="pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default Routers;
