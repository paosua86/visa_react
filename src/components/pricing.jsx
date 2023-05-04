import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Pricing = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const prices = [
    {
      subtitle: 'USA',
      price: '$40',
      features: ['Llenado de formulario', 'Estrategia para embajada', 'Seguimiento de cita y actualizaciones de fecha', 'Asesoría para entrevista'],
      description: 'Los resultados finales dependen de la embajada.',
    },
    {
      subtitle: 'CANADA',
      price: '$70',
      features: ['Llenado de formulario', 'Estrategia para embajada', 'Seguimiento de cita'],
      description: 'Los resultados finales dependen de la embajada.',
    },
    {
      subtitle: 'EUROPA',
      price: '$80',
      features: ['Llenado de formulario e información sobre viaje', 'Estrategia para embajada', 'Seguimiento de cita', 'Asesoría para entrevista'],
      description: 'Los resultados finales dependen de la embajada.',
    },
    {
      subtitle: 'MEXICO',
      price: '$80',
      features: ['Llenado de formulario', 'Estrategia para embajada', 'Seguimiento de cita y actualizaciones de fecha', 'Asesoría para entrevista'],
      description: 'Los resultados finales dependen de la embajada.',
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <div className="flex flex-col items-center">
            <h2 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Precios</h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">6% de descuento en transferencia o depósito bancario</p>

          </div>

        </div>

        <div className="flex flex-wrap -m-4">
          {prices.map((price, index) => (
            <div key={index} className="p-4 xl:w-1/4 md:w-1/2 w-full" data-aos="fade-up" data-aos-delay={index * 200}>
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{price.subtitle}</h2>
                <div className="flex items-center">
                  <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">{price.price}</h1>
                </div>

                {price.features.map((feature, featureIndex) => (
                  <p key={featureIndex} className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    {feature}
                  </p>
                ))}

                <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Contáctanos
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="text-xs text-gray-500 mt-3">{price.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
