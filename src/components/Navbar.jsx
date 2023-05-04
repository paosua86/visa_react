import React, { useEffect, useState } from 'react';
import icono from '../assets/icono.svg';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [iconoVisible, setIconoVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);

      if (position > window.innerHeight * 0.3) {
        setIconoVisible(true);
      } else {
        setIconoVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (event, target) => {
    event.preventDefault();

    const targetElement = document.getElementById(target);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Desplaza 100px hacia arriba para que no quede oculto por el navbar
        behavior: 'smooth', // Desplazamiento suave
      });
    }

    setOpen(false);
  };

  return (
    <header className={`text-gray-600 body-font fixed top-0 h-24 w-full z-10 transition-colors duration-300 ${scrollPosition > window.innerHeight * 0.3 ? 'bg-gray-100' : ''
      } flex items-center`}>
      <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">

        {/* Botón de hamburguesa */}
        <button
          className="inline-flex items-center justify-right p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-100 md:hidden"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${open ? 'transform rotate-45' : ''
              }`}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <nav
          className={`${open ? 'block' : 'hidden'
            } md:inline-flex md:flex-grow md:w-auto w-full md:items-center md:justify-end text-base font-medium`}
        >
          <a href="/" onClick={(event) => handleNavClick(event, 'home')} className="block md:inline-block mr-5 hover:text-gray-900">
            Home
          </a>
          <a href="/#aboutus" onClick={(event) => handleNavClick(event, 'aboutus')} className="block md:inline-block mr-5 hover:text-gray-900">
            Nosotros
          </a>
          <a href="/#services" onClick={(event) => handleNavClick(event, 'services')} className="block md:inline-block mr-5 hover:text-gray-900">
            Servicios
          </a>
          <a href="/#contact" onClick={(event) => handleNavClick(event, 'contact')} className="block md:inline-block mr-5 hover:text-gray-900">
            Contáctanos
          </a>
        </nav>
        {/* Icono para mostrar en el navbar */}
        {iconoVisible && (
          <div className="z-10 absolute left-10 top-2/4 transform -translate-y-2/4">
            <img src={icono} alt="mivisa" className="w-24 h-24" />
          </div>
        )}
      </div>

    </header>
  );
};

export default Navbar;

