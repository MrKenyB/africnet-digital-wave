
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Amadou Diallo',
      role: 'Fondateur & Développeur',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'Expert en développement web avec plus de 8 ans d\'expérience dans la création de solutions digitales.'
    },
    {
      name: 'Fatou Ndiaye',
      role: 'Co-fondatrice & Designer UX',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'Spécialiste en design d\'interface utilisateur qui transforme des idées en expériences digitales intuitives.'
    },
    {
      name: 'Ousmane Keita',
      role: 'Expert Technique & Formation',
      image: 'https://randomuser.me/api/portraits/men/67.jpg',
      bio: 'Formateur passionné avec une expertise en technologies web modernes et maintenance informatique.'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Nous recherchons constamment de nouvelles solutions adaptées au contexte africain.'
    },
    {
      title: 'Proximité',
      description: 'Nous privilégions une relation de confiance et une écoute attentive de nos clients.'
    },
    {
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet pour garantir la satisfaction de nos clients.'
    },
    {
      title: 'Accessibilité',
      description: 'Nous rendons la technologie accessible à tous, quelle que soit leur expertise.'
    }
  ];

  return (
    <section id="about" className="bg-africanet-gray-light py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">À Propos de Nous</h2>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-section">
            <h3 className="text-2xl font-bold mb-4">Notre Histoire</h3>
            <p className="text-gray-700 mb-6">
              AFRIC'NET est née de la passion commune de trois amis informaticiens désireux de démocratiser l'accès aux services numériques en Afrique. Fondée en 2021, notre startup s'est rapidement développée pour devenir un acteur reconnu du paysage numérique local.
            </p>
            <p className="text-gray-700 mb-6">
              Face aux défis uniques du continent africain, nous avons développé des solutions innovantes, accessibles et adaptées aux réalités locales, permettant aux entreprises et particuliers d'embrasser pleinement l'ère numérique.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">Notre Mission</h3>
            <p className="text-gray-700 mb-6">
              Accompagner la transformation digitale en Afrique en proposant des services numériques accessibles et de qualité, tout en formant la nouvelle génération aux métiers du digital.
            </p>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Pourquoi nous faire confiance?</h4>
              <ul className="space-y-3">
                {[
                  'Expertise locale et connaissance du terrain',
                  'Solutions sur mesure adaptées à vos besoins',
                  'Accompagnement personnalisé et proximité',
                  'Rapport qualité/prix optimal',
                  'Formation continue et transfert de compétences'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-africanet-orange mt-1 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 fade-in-section">
            {values.map((value, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="text-lg font-bold text-africanet-blue mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Notre Équipe</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow fade-in-section"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                  <p className="text-africanet-orange font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
