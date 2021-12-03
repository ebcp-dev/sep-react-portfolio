import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Page components
import Home from '../pages/Home/Home';
import Portfolio from '../pages/Portfolio/Portfolio';
import Contact from '../pages/Contact/Contact';
import NotFound from '../pages/NotFound/NotFound';
// Common layout components
import Navbar from '../components/Layout/Navbar/Navbar';
import Footer from '../components/Layout/Footer/Footer';

import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
