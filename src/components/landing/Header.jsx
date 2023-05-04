import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="text-center py-12 px-4" data-aos="fade-up">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        ¡Obtén tu visa de forma fácil y rápida con nuestros servicios de asesoría!
      </h1>
      <p className="text-xl md:text-2xl">
        Simplifica el proceso de obtener tu visa para Estados Unidos, Canadá, Europa y México.
      </p>
    </div>
  );
};

export default Header;

