import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/hero';
// import AboutUs from './components/aboutUs';
import Services from './components/services';
import Contact from './components/contact';
import FAQ from './components/FAQ';
import Footer from './components/footer';
import Consultoria from './components/consultoria';
import Process from './components/process';

const App = () => {
  const footerRef = useRef(null);

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
                {/* <AboutUs />
                <Services /> */}
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
