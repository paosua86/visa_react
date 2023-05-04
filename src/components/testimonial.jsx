const Testimonial = () => {
  return (
    <section className="text-gray-600 body-font bg-custom-bg bg-cover h-screen">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center" data-aos="fade-up">Testimonios</h2>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2 w-full" data-aos="fade-right">
            <div className="h-full bg-gray-100 p-8 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                {/* SVG path */}
              </svg>
              <p className="leading-relaxed mb-6">Fue de gran ayuda tener el asesoramiento, llenar el formulario puede ser un proceso tedioso y largo, pero con la asesoría recibida y el acompañamiento los pasos a dar fueron mucho más sencillos y manejables.</p>
              <a className="inline-flex items-center">
                <img alt="testimonial" src="https://dummyimage.com/106x106" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">Belen García</span>
                  <span className="text-gray-500 text-sm">CLIENTA SATISFECHA</span>
                </span>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/2 w-full" data-aos="fade-left">
            <div className="h-full bg-gray-100 p-8 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                {/* SVG path */}
              </svg>
              <p className="leading-relaxed mb-6">Finalmente estamos aquí cumpliendo un sueño con mi familia, muchas gracias por la asesoría durante el proceso</p>
              <a className="inline-flex items-center">
                <img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">Santiago Armijo</span>
                  <span className="text-gray-500 text-sm">CLIENTE SATISFECHO</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
