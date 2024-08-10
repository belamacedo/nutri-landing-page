
// eslint-disable-next-line react/no-unescaped-entities
import useScrollReveal from '@/app/hooks/useScrollReveal';
import React from 'react';

export const AboutMe = () => {
  const addToRefs = useScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
    easing: 'ease',
    interval: 200,
    reset: true,
  });

  return (
    <section id="about" className="py-20 bg-amber-100">
      <div className="container mx-auto p-4 md:p-6 flex flex-col items-end">
        <h2 className="text-4xl font-bold mb-6 text-amber-700" ref={addToRefs}>Sobre Mim</h2>
        <div className="container text-right text-wrap">
          <p className="text-lg text-amber-600" ref={addToRefs}>
            Sou Andreia Sant'anna, uma profissional apaixonada por Nutrição Clínica Funcional, Saúde da Mulher e Estética, Emagrecimento, e Fitoterapia. 
            Com anos de experiência na área, meu objetivo é ajudar pessoas a alcançarem seus objetivos de saúde e bem-estar de forma equilibrada e sustentável.
          </p>
        </div>       
      </div>
    </section>
  );
};
