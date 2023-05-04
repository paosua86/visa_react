import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQ = () => {
  AOS.init();

  const faqs = [
    {
      question: ' ¿Cuáles son los requisitos para obtener una visa?',
      answer:
        'Los requisitos varían según el tipo de visa y el país de destino, pero en general, se necesita una solicitud completa, pasaporte válido, fotos, evidencia de solvencia económica y razones de viaje claras.',
    },
    {
      question: '¿Cuánto tiempo tarda el proceso de solicitud de visa?',
      answer:
        'El tiempo varía según el tipo de visa y el país de destino, pero puede tomar desde unos días hasta varios meses.',
    },
    {
      question: '¿Cuánto cuesta obtener una visa?',
      answer:
        'El costo varía según el tipo de visa y el país de destino, pero en general puede oscilar entre los $160 dólares.',
    },
    {
      question: '¿Qué tipo de documentos son necesarios para solicitar una visa?',
      answer:
        'Además de los requisitos generales mencionados anteriormente, puede ser necesario presentar documentos como certificados de nacimiento, antecedentes penales, registros médicos y cartas de apoyo.',
    },
    {
      question: '¿Puedo solicitar una visa en línea?',
      answer:
        'Sí, muchos países ofrecen la opción de solicitar visas en línea.',
    },
    {
      question: '¿Necesito una carta de invitación para solicitar una visa?',
      answer:
        'Depende del tipo de visa y del país de destino. En algunos casos, una carta de invitación puede ser necesaria para demostrar el propósito del viaje y la solvencia económica.',
    },
    {
      question: '¿Cuál es la tasa de aprobación de visas?',
      answer:
        'La tasa de aprobación varía según el tipo de visa y el país de destino, pero en general, las solicitudes que cumplen con los requisitos y presentan documentación completa tienen más probabilidades de ser aprobadas.',
    },
    {
      question: '¿Qué debo hacer si mi solicitud de visa es rechazada?',
      answer:
        'Es importante entender la razón del rechazo y tratar de corregir los errores en la solicitud o presentar documentación adicional si es necesario. Un asesor de visas puede ayudar en este proceso.',
    },
  ];

  return (
    <div className="overflow-hidden p-12 mx-auto bg-medium-red">
      <h2 className="py-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-white mb-2">
        Preguntas Frecuentes
      </h2>
      <ul className="flex flex-wrap items-start gap-8">
        {faqs.map((faq, index) => (
          <li className="w-2/5" key={index}>
            <p className="text-lg font-medium leading-6 text-white">
              {faq.question}
            </p>
            <p className="mt-2 text-base leading-6 text-white" data-aos="fade-up">
              {faq.answer}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;

