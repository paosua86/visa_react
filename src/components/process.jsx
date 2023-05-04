import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Process = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const steps = [
    {
      id: 1,
      title: 'Contacto',
      description: 'Comunicarse via whatsapp para agendar una cita telefónica y analizar su caso',
    },
    {
      id: 2,
      title: 'Calificación para visa',
      description: 'Una vez confirmada la información y validado que califica, se procese llenar un formulario que sera enviado por correo electronico.',
    },
    {
      id: 3,
      title: 'Envío de información solicitada',
      description: 'Este formulario debe llenarse con toda la informaciòn solicitada.',
    },
    {
      id: 4,
      title: 'Pagos en la embajada deseada',
      description: 'Realizar el pago de solicitud de visa y nuestro servicio',
    },
    {
      id: 5,
      title: 'Cita telefónica para asesoría antes de cita en embajada',
      description: 'Asesoría para brindar información',
    },
  ];

  return (
    <section className="bg-red-200 dark:bg-red-800">
      <div className="container p-4 mx-auto bg-white max-w-7xl sm:p-6 lg:p-8 dark:bg-gray-800">
        <div className="flex flex-wrap -mx-8">
          <div className="w-full px-8 lg:w-1/2">
            <div className="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl font-heading dark:text-white">
                Pasos para contratar con nosotros
              </h2>
              <p className="mb-8 leading-loose text-gray-500 dark:text-gray-300">
              Los pasos para emitir visas de cada embajada son diferentes pero este es una estructura general de nuestra forma de trabajar:
              </p>
            </div>
          </div>
          <div className="w-full px-8 lg:w-1/2">
            <ul className="space-y-12">
              {steps.map((step) => (
                <li key={step.id} className="flex -mx-4" data-aos="fade-up" data-aos-delay={step.id * 200}>
                  <div className="px-4">
                    <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                      {step.id}
                    </span>
                  </div>
                  <div className="px-4">
                    <h3 className="my-4 text-xl font-semibold dark:text-white">
                      {step.title}
                    </h3>
                    <p className="leading-loose text-gray-500 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

