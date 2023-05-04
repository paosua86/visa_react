import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesLanding = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="py-12 px-4" data-aos="fade-up">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
        Nuestros servicios
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="text-center">
          <h3 className="font-semibold text-xl mb-2">Consultoría inicial</h3>
          <p>
            Evaluaremos tu caso y te brindaremos información detallada sobre los requisitos y el proceso específico para la visa que deseas obtener.
          </p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-xl mb-2">Revisión de documentos</h3>
          <p>
            Revisaremos todos los documentos necesarios y te proporcionaremos recomendaciones para mejorar tus posibilidades de éxito.
          </p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-xl mb-2">Preparación de la solicitud</h3>
          <p>
            Te ayudaremos a completar correctamente todos los formularios y a organizar los documentos necesarios para presentar tu solicitud.
          </p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-xl mb-2">Seguimiento y actualizaciones</h3>
          <p>
            Mantendremos un seguimiento constante del estado de tu solicitud y te mantendremos informado de cualquier actualización.
          </p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-xl mb-2">Preparación para la entrevista</h3>
          <p>
            Te proporcionaremos consejos y orientación para asegurar que estés listo y seguro durante la entrevista en la embajada o consulado.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesLanding;
