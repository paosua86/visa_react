import React, { useRef, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import AboutUs from './components/aboutUs';
import Services from './components/services';
import Contact from './components/contact';
import FAQ from './components//landing/FAQ';
import Footer from './components/footer';
import Consultoria from './components/consultoria';
import Process from './components/process';
import Testimonial from './components/testimonial';
import Pricing from './components/pricing';
import Header from './components/landing/Header';
import WhyUs from './components/landing/whyus';
import ServicesLanding from './components/landing/Services';
import CallToAction from './components/landing/CallToAction';
import TestimonialLanding from './components/landing/TestimonialLanding';
import ContactSocialMedia from './components/landing/ContactSocialMedia';
import AOS from 'aos';
import Whatsapp from './components/whatsapp';


const App = () => {
  const footerRef = useRef(null);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (

    <div className="app">
      <Whatsapp />
      <Routes>

        <Route
          exact
          path="/"
          element={
            <div>
              <Hero />
              <Navbar />
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
        <Route
          exact
          path="/landing"
          element={
            <div>
              <Header />
              <WhyUs />
              <ServicesLanding />
              <CallToAction />
              <TestimonialLanding />
              <FAQ />
              <ContactSocialMedia />
            </div>
          }
        />
      </Routes>
      <Footer ref={footerRef} />
    </div>

  );
};

export default App;
