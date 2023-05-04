import React, { useEffect } from 'react';
import usa from '../assets/usa.png';
import canada from '../assets/canada.png';
import europa from '../assets/europa.png';
import mexico from '../assets/mexico.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const images = [
    { src: usa, subtitle: 'ESTADOS UNIDOS', title: 'Diversidad cultural, paisajes impresionantes, ciudades vibrantes, entretenimiento de clase mundial y gastronomía deliciosa.' },
    { src: canada, subtitle: 'CANADA', title: 'El país de las oportunidades', description: 'Naturaleza, diversidad cultural, seguridad y calidad de vida son algunas de las razones para visitar Canadá.' },
    { src: europa, subtitle: 'EUROPA', title: 'Europa a tu alcance', description: 'Europa es un continente lleno de historia, cultura y paisajes impresionantes. Ofrece experiencias únicas, gastronomía y diversidad.' },
    { src: mexico, subtitle: 'MEXICO', title: 'México lindo', description: 'Mexico ofrece una rica cultura, hermosos paisajes naturales, gastronomía única, sitios arqueológicos, playas y ciudades vibrantes.' }
  ];

  return (
    <section className="text-gray-600 body-font" id="services">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Servicios</h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Somos expertos en una variedad de visas</p>
          </div>
        <div className="flex flex-col items-center md:flex-wrap md:flex-row  -m-4">
          {images.map((image, index) => (
            <div key={index} className="lg:w-1/3 p-4" data-aos="zoom-in" data-aos-delay={index * 200}>
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={image.src} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h3 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">{image.subtitle}</h3>
                  <h2 className="title-font text-lg font-medium text-gray-900 mb-3">{image.title}</h2>
                  <p className="leading-relaxed">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
