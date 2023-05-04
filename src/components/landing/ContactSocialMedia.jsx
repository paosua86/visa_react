import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactSocialMedia = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="py-12 px-4" data-aos="fade-up">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
        Información de contacto y enlaces a redes sociales
      </h2>
      {/* Aquí puedes agregar la información de contacto y los enlaces a las redes sociales en forma de íconos o en el formato que prefieras */}
    </div>
  );
};

export default ContactSocialMedia;
