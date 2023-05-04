import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TestimonialLanding = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="py-12 px-4" data-aos="fade-up">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
        Testimonios de clientes satisfechos
      </h2>
      {/* Aquí puedes agregar los testimonios en forma de tarjetas o en el formato que prefieras */}
    </div>
  );
};

export default TestimonialLanding;
