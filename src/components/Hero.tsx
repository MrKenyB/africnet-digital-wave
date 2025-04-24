
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:py-40 bg-gradient-to-br from-africanet-blue/95 to-africanet-blue">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDF8fHRlY2hub2xvZ3l8ZW58MHx8fHwxNjE0NzM1MDEw&ixlib=rb-1.2.1')] bg-cover bg-center"></div>
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Solutions Numériques Innovantes pour l'Afrique
          </h1>
          <p className="text-xl text-white/90 mb-10 animate-fade-in-up">
            AFRIC'NET accompagne les particuliers, PME et ONG dans leur transformation digitale avec des services adaptés et personnalisés.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button size="lg" className="bg-africanet-orange hover:bg-africanet-orange/90 text-white">
              Découvrir nos services
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-africanet-blue">
              Contactez-nous <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="container mx-auto px-6 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Sites Web',
                description: 'Sites vitrines et e-commerce adaptés à vos besoins',
                icon: '🌐'
              },
              {
                title: 'Maintenance IT',
                description: 'Support technique et maintenance de vos systèmes',
                icon: '🛠️'
              },
              {
                title: 'Formations',
                description: 'Formations adaptées pour tous les niveaux',
                icon: '📚'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:-translate-y-2 hover:shadow-xl"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
