import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import AboutUs from './components/aboutUs';
import Services from './components/services';
import Contact from './components/contact';
import FAQ from './components/FAQ';
import Footer from './components/footer';
import Consultoria from './components/consultoria';
import Process from './components/process';
import Testimonial from './components/testimonial';
import Pricing from './components/pricing';
import AOS from 'aos';

const App = () => {
  const footerRef = useRef(null);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Navbar />
        {window.location.pathname === '/' && <Hero footerRef={footerRef} />}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <AboutUs />
                <Testimonial />
                <Services />
                <Pricing />
                <Process />
                <Consultoria />
                <Contact />
                <FAQ />
              </div>
            }
          />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer ref={footerRef} />
      </div>
    </Router>
  );
};

export default App;
