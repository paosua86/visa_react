import React, { useRef, useEffect } from 'react';
import avion from '../assets/travel.png';

function Hero() {
  const planeRef = useRef(null);

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

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="h-screen flex justify-center items-center bg-gradient-to-t from-white via-blue-500 to-purple-500">
      <div className="relative">
        <img
          ref={planeRef}
          src={avion}
          className="z-9 mx-auto transition-all duration-300 ease-out md:max-w-[60%]" // Aplica la transición suave con la función de aceleración ease-out
        />

        <h1
          className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-white text-6xl font-bold tracking-tighter uppercase"
        >
          Mi Visa
        </h1>
        <h2
          className=" absolute top-20 left-0 right-0 bottom-0 flex justify-center items-center text-white text-4xl tracking-tighter"
        >
          Trámite y Asesoría
        </h2>
      </div>
    </section>
  );
}

export default Hero;
