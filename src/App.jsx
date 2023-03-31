import React from 'react';
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



const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route exact path="/" element={
            <div>
              <Hero />
              <AboutUs />
              <Services />
              <Process />
              <Consultoria />
              <Contact />
              <FAQ />
            </div>
          } />
          <Route path="/services" element={<Services />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

