import React, { useRef, useEffect } from 'react';
import avion from '../assets/avion.png';

function Hero({ footerRef }) {
  const planeRef = useRef(null);
  const titleRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const plane = planeRef.current;

      if (plane) {
        const moveFactor = 25; // Controla qué tan lejos se moverá la imagen respecto al movimiento del mouse

        const x = (event.clientX - window.innerWidth / 2) / moveFactor;
        const y = (event.clientY - window.innerHeight / 2) / moveFactor;

        plane.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    const handleScroll = () => {
      const title = titleRef.current;
      const plane = planeRef.current;

      if (title) {
        const scrollPos = window.scrollY;
        title.style.transform = `translateY(-${scrollPos}px)`;
        title.style.opacity = 1 - scrollPos / 800;

        // Agrega la animación de transparencia del avión
        if (plane) {
          plane.style.opacity = 1 - scrollPos / 800;
        }
      }
    };

    const handleIntersection = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        window.removeEventListener('scroll', handleScroll);
      } else {
        window.addEventListener('scroll', handleScroll);
      }
    };

    if (footerRef.current) {
      observerRef.current = new IntersectionObserver(handleIntersection, {
        threshold: 0.1,
      });
      observerRef.current.observe(footerRef.current);
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);

      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [footerRef]);

  return (
    <section className="h-screen flex justify-center items-center bg-gradient-to-t from-white via-blue-500 to-purple-500">
      <div className="relative">
        <img
          ref={planeRef}
          src={avion}
          className="mx-auto transition-all duration-300 ease-out" // Aplica la transición suave con la función de aceleración ease-out
        />

        <h1
          ref={titleRef}
          className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-white text-5xl font-bold tracking-tighter uppercase"
        >
          Welcome to my website
        </h1>
      </div>
    </section>
  );
}

export default Hero;

