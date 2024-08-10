'use client'

import useScrollReveal from '@/app/hooks/useScrollReveal';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Hero = () => {
  // Hook para aplicar animação de scroll
  const addToRefs = useScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    easing: 'ease',
    interval: 200,
    reset: true,
  });

  return (
    <section id="home" className="pb-20 pt-28 bg-amber-200">
      <div className="container mx-auto p-4 md:p-6 flex flex-col md:flex-row items-center">
        {/* Content Column */}
        <div className="flex-1 md:pr-8" ref={addToRefs}>
          <h1
            className="text-4xl font-bold text-amber-700"
            
          >
            Andreia Sant'anna
          </h1>
          <p
            className="text-xl font-bold mt-4 text-amber-600"
            ref={addToRefs}
          >
            Nutrição Clínica Funcional | Saúde da Mulher e Estética | Emagrecimento | Fitoterapia
          </p>
          <p
            className="text-lg text-amber-600"
            ref={addToRefs}
          >
            Invista na sua saúde, é o seu bem mais precioso!
          </p>
          <div className="mt-8 flex items-center">
            <a
              href="#contact" 
              className="inline-block px-6 py-3 bg-amber-700 text-white font-semibold rounded-lg shadow-lg hover:bg-amber-600 transition"
              ref={addToRefs}
            >
              Entre em Contato
            </a>
            <div className="ml-4 flex items-start space-x-4">
            <a
                href="https://w.app/MSmP39"
                className="text-amber-700 hover:text-amber-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                ref={addToRefs}
              >
                <i className="fab fa-whatsapp fa-2x"></i>
              </a>
              <a
                href="https://instagram.com/andreiasantannanutri"
                className="text-amber-700 hover:text-amber-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                ref={addToRefs}
              >
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
        {/* Logo Column */}
        <div className="flex-1 mt-8 md:mt-0" ref={addToRefs}>
          <img src="/logo_icon_top.png" alt="Logo" className="h-50 md:mx-0" ref={addToRefs} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
