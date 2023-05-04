import React, { useEffect } from 'react';
import AOS from 'aos';

const Feature = ({ title, description, dataAos }) => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div data-aos={dataAos} className="p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

const Features = () => {
  // Lista de características a mostrar
  const features = [
    {
      title: 'Experiencia comprobada',
      description: 'Contamos con un equipo de profesionales experimentados y capacitados en la gestión de procesos de visa para diferentes destinos. Hemos ayudado a miles de personas a cumplir sus sueños de viajar al extranjero.',
      dataAos: 'fade-up',
    },
    // ... (añade las otras características aquí)
  ];

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <Feature key={index} title={feature.title} description={feature.description} dataAos={feature.dataAos} />
        ))}
      </div>
    </section>
  );
};

export default Features;
