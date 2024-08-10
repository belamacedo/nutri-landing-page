import '@fortawesome/fontawesome-free/css/all.min.css';

const Hero = () => {
  return (
    <section id="home" className="py-20 bg-amber-200">
      <div className="container mx-auto p-4 md:p-6">
        <h1 className="text-4xl font-bold text-amber-700">Andreia Sant'anna</h1>
        <p className="text-xl font-bold mt-4 text-amber-600">
          Nutrição Clínica Funcional | Saúde da Mulher e Estética | Emagrecimento | Fitoterapia
        </p>
        <p className="text-lg text-amber-600">
          Invista na sua saúde, é o seu bem mais precioso!
        </p>
        <div className="mt-8 flex items-center">
          <a
            href="#contact" 
            className="inline-block px-6 py-3 bg-amber-700 text-white font-semibold rounded-lg shadow-lg hover:bg-amber-600 transition"
          >
            Entre em Contato
          </a>
          <div className="ml-4 flex items-start space-x-4">
          <a href="https://wa.me/yourwhatsapplink" className="text-amber-700">
            <i className="fab fa-whatsapp fa-2x"></i>
          </a>
          <a href="https://instagram.com/yourinstagramlink" className="text-amber-700">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
