import React, { useEffect } from 'react';
import { FcCustomerSupport } from "react-icons/fc";
import { FcLineChart } from "react-icons/fc";
import { FcSmartphoneTablet } from "react-icons/fc";
import { FcDonate } from "react-icons/fc";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20" data-aos="fade-up">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Sabemos lo que hacemos y lo hacemos muy bien</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Somos mucho más que una asesoria, prestamos un servicio integral a cada cliente. Somos profesionales y trabajamos para asegurar el éxito de nuestros clientes.</p>
        </div>
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos="fade-up">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <FcLineChart className="mb-3 inline-block" size={48} />
              <h2 class="title-font font-medium text-3xl text-gray-900">+10años</h2>
              <p class="leading-relaxed">en el mercado</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos="fade-up" data-aos-delay="100">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <FcCustomerSupport className="mb-3 inline-block" size={48} />
              <h2 class="title-font font-medium text-3xl text-gray-900">Soporte online</h2>
              <p class="leading-relaxed">Ahorro de tiempo y movilización</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos="fade-up" data-aos-delay="200">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <FcSmartphoneTablet className="mb-3 inline-block" size={48} />
              <h2 class="title-font font-medium text-3xl text-gray-900">+1000</h2>
              <p class="leading-relaxed">Clientes satisfechos</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos="fade-up" data-aos-delay="300">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <FcDonate className="mb-3 inline-block" size={48} />
              <h2 class="title-font font-medium text-3xl text-gray-900">Precios</h2>
              <p class="leading-relaxed">Justos y ajustados al mercado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
