import React from 'react';

const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative" id="contact">
      <div className="absolute inset-0 bg-gray-300">
        <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7108.960637562926!2d-78.4959734791321!3d-0.28397924374200245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sec!4v1680563234685!5m2!1sen!2sec" style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-9 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contacto</h2>
          <p className="leading-relaxed mb-5 text-gray-600">Déjenos saber como podemos ayudarle</p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="celular" className="leading-7 text-sm text-gray-600">Celular</label>
            <input type="celular" id="celular" name="celular" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Mensaje</label>
            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Button</button>
          <p className="text-xs text-gray-500 mt-3">Respondemos hasta máximo 24 horas</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
