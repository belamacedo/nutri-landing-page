'use client'

import { useState } from 'react';
import Image from 'next/image';

const servicesData = [
  {
    id: 1,
    icon: '/services/service-1.png',
    title: 'Plano Alimentar Individualizado',
    description: 'Um plano alimentar totalmente personalizado que leva em consideração suas necessidades nutricionais específicas, seu histórico de saúde, e os resultados dos seus exames. Este plano é projetado para ajudá-lo a alcançar seus objetivos de saúde e bem-estar, seja para emagrecimento, ganho muscular, ou manutenção da saúde geral. Acompanhe o progresso com ajustes regulares para garantir que o plano esteja sempre alinhado com suas metas e necessidades.'
  },
  {
    id: 2,
    icon: '/services/service-2.png',
    title: 'Avaliação Nutricional',
    description: 'Realizamos uma avaliação detalhada do seu estado nutricional com base no seu histórico alimentar, estilo de vida, e exames clínicos. Esta avaliação abrangente é crucial para identificar deficiências nutricionais, desequilíbrios e áreas que necessitam de melhoria. O objetivo é fornecer recomendações baseadas em evidências para melhorar a sua saúde geral e bem-estar, com um plano de ação claro e personalizado.'
  },
  {
    id: 3,
    icon: '/services/service-3.png',
    title: 'Nutrição Esportiva',
    description: 'Oferecemos planos alimentares especializados para atletas e pessoas ativas que buscam melhorar seu desempenho físico e acelerar a recuperação. A nutrição esportiva envolve a criação de estratégias alimentares que suportam a demanda de treinamento intenso, promovem a recuperação rápida e melhoram a performance geral. Nossos planos são adaptados para diferentes tipos de esportes e objetivos, garantindo que você tenha a energia e os nutrientes necessários para alcançar o seu melhor.'
  }
];

export const Services = () => {
  // Inicializa o estado com o ID do primeiro serviço
  const [activeService, setActiveService] = useState<number>(servicesData[0].id);

  const handleClick = (id: number) => {
    if (activeService !== id) {
      setActiveService(id);
    }
  };

  return (
    <section id="services" className="py-20 bg-amber-200">
      <div className="container mx-auto p-4 md:p-6 flex flex-col items-start">
        <h2 className="text-3xl font-bold mb-6 text-amber-700 text-center">Serviços</h2>
        <div className="flex flex-wrap gap-6">
          {/* Cards Container */}
          <div className="flex-1 flex flex-col gap-6">
            {servicesData.map(service => (
              <div
                key={service.id}
                className={`bg-white p-4 rounded-lg shadow-lg cursor-pointer hover:bg-amber-100 transition ${
                  activeService === service.id ? 'border-2 border-amber-500' : ''
                }`}
                onClick={() => handleClick(service.id)}
              >
                <div className="mb-4 flex justify-center">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="text-amber-700"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">{service.title}</h3>
              </div>
            ))}
          </div>
          {/* Descriptions Container */}
          <div className="flex-1 pl-6 flex items-center justify-center">
            {activeService && (
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-2">
                  {servicesData.find(service => service.id === activeService)?.title}
                </h3>
                <p className="text-sm text-gray-700">
                  {servicesData.find(service => service.id === activeService)?.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
