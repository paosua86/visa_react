import React from 'react';
import usa from '../assets/usa.png';
import canada from '../assets/canada.png';
import europa from '../assets/europa.png';
import mexico from '../assets/mexico.png';

const Services = () => {
  const images = [
    { src: usa, subtitle: 'ESTADOS UNIDOS', title: 'Lo mejor de USA', description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.' },
    { src: canada, subtitle: 'CANADA', title: 'El país de las oportunidades', description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.' },
    { src: europa, subtitle: 'EUROPA', title: 'Europa a tu alcance', description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.' },
    { src: mexico, subtitle: 'MEXICO', title: 'México lindo', description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.' }
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Servicios</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Somos expertos en una variedad de visas</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {images.map((image, index) => (
            <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={image.src} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">{image.subtitle}</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{image.title}</h1>
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
