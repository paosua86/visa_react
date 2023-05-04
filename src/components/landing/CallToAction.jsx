import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CallToAction = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="text-center py-12 px-4 bg-blue-500 text-white" data-aos="fade-up">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                ¡No esperes más! Comienza el camino hacia tus sueños hoy mismo.
            </h2>
            <p className="mb-6">
                Contáctanos para agendar tu consulta inicial y descubre cómo nuestro equipo de expertos en visas puede ayudarte a obtener la visa que necesitas para abrir las puertas de un mundo lleno de oportunidades.
            </p>

            <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded hover:bg-blue-200 transition duration-200">
                ¡Agenda tu consulta ahora!
            </button>
        </div >
    );
};

export default CallToAction;

