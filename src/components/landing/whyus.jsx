import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="py-12 px-4" data-aos="fade-up">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
        ¿Por qué elegirnos?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="text-center">
          <h3 className="font-semibold text-xl mb-2">Experiencia comprobada</h3>
          <p>
            Contamos con un equipo de profesionales experimentados y capacitados en la gestión de procesos de visa para diferentes destinos.
          </p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-xl mb-2">Asesoría personalizada</h3>
          <p>
            Entendemos que cada caso es único. Por eso, ofrecemos asesoría personalizada y adaptada a tus necesidades.
          </p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-xl mb-2">Actualización constante</h3>
          <p>
            Nuestros expertos se mantienen informados sobre las últimas leyes y regulaciones de inmigración.
          </p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-xl mb-2">Soporte integral</h3>
          <p>
            Desde la preparación de documentos hasta la presentación de la solicitud, te brindamos un acompañamiento completo en cada paso del proceso.
          </p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-xl mb-2">Precios competitivos</h3>
          <p>
            Creemos que el acceso a una vida mejor no debería ser costoso. Por eso, ofrecemos nuestros servicios a precios asequibles sin sacrificar la calidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
