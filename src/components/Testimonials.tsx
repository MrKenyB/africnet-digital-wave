
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sophie Mendy",
      role: "Propriétaire, Boutique en ligne",
      image: "https://randomuser.me/api/portraits/women/62.jpg",
      content: "AFRIC'NET a transformé mon petit commerce en une entreprise prospère grâce à leur site e-commerce. Leur équipe a été très professionnelle et à l'écoute de mes besoins spécifiques. Je recommande vivement leurs services!",
      rating: 5
    },
    {
      id: 2,
      name: "Jean Ndour",
      role: "Directeur, Cabinet Médical",
      image: "https://randomuser.me/api/portraits/men/51.jpg",
      content: "Notre cabinet médical fonctionne désormais de manière beaucoup plus efficace grâce au système de gestion développé par AFRIC'NET. Les rendez-vous sont mieux organisés et nos patients sont satisfaits du service.",
      rating: 5
    },
    {
      id: 3,
      name: "Aminata Diop",
      role: "Coordinatrice, ONG Éducation",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      content: "Le site web créé par AFRIC'NET nous a permis d'augmenter notre visibilité et nos donations. Leur formation a également aidé notre équipe à mieux comprendre les outils numériques. Un grand merci!",
      rating: 5
    },
    {
      id: 4,
      name: "Omar Sall",
      role: "Gérant, Supermarché",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
      content: "Le système de vidéosurveillance installé par AFRIC'NET a considérablement amélioré la sécurité de notre commerce. Le service après-vente est également excellent. Je suis très satisfait de leur travail.",
      rating: 4
    },
    {
      id: 5,
      name: "Fatou Camara",
      role: "Étudiante en Informatique",
      image: "https://randomuser.me/api/portraits/women/26.jpg",
      content: "J'ai suivi la formation en développement web d'AFRIC'NET et j'ai pu rapidement trouver un emploi grâce aux compétences acquises. Les formateurs sont compétents et l'approche pédagogique est excellente.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-16 bg-africanet-gray-light">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Témoignages Clients</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mt-6 mb-12">
          Découvrez ce que nos clients disent de nos services et de notre accompagnement personnalisé.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center space-x-4 mb-6">
                <Avatar className="h-14 w-14 border-2 border-africanet-orange">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "{testimonial.content}"
              </blockquote>
            </div>
          ))}
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.slice(3, 5).map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow flex flex-col md:flex-row gap-6 items-start md:items-center"
            >
              <Avatar className="h-14 w-14 border-2 border-africanet-orange">
                <AvatarImage src={testimonial.image} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center mb-2">
                  <h4 className="font-semibold mr-3">{testimonial.name}</h4>
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
                <blockquote className="text-gray-700 italic">
                  "{testimonial.content}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
