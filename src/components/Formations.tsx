
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Calendar, 
  Landmark,
  BookOpen,
  Users,
  Layers,
  CheckCircle
} from 'lucide-react';

const Formations = () => {
  const formations = [
    {
      title: "Développement Web Frontend",
      description: "Apprenez à créer des interfaces web modernes avec HTML, CSS et JavaScript.",
      duration: "10 semaines",
      schedule: "2 séances par semaine",
      level: "Débutant",
      price: "150 000 FCFA",
      topics: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      benefits: [
        "Créez votre premier site web",
        "Maîtrisez les bases du responsive design",
        "Ajoutez des animations et interactions"
      ]
    },
    {
      title: "WordPress Avancé",
      description: "Maîtrisez WordPress pour créer des sites professionnels et personnalisés.",
      duration: "6 semaines",
      schedule: "2 séances par semaine",
      level: "Intermédiaire",
      price: "120 000 FCFA",
      topics: ["Thèmes", "Plugins", "Personnalisation", "WooCommerce"],
      benefits: [
        "Créez des sites web sans code",
        "Personnalisez votre thème WordPress",
        "Gérez une boutique en ligne"
      ]
    },
    {
      title: "React & Modern JavaScript",
      description: "Développez des applications web modernes avec React et les dernières fonctionnalités JavaScript.",
      duration: "12 semaines",
      schedule: "2 séances par semaine",
      level: "Avancé",
      price: "200 000 FCFA",
      topics: ["ES6+", "React", "State Management", "API Integration"],
      benefits: [
        "Créez des applications web complexes",
        "Maîtrisez les hooks React",
        "Intégrez des API REST"
      ]
    },
    {
      title: "Maintenance Informatique",
      description: "Apprenez à diagnostiquer et réparer les problèmes informatiques courants.",
      duration: "8 semaines",
      schedule: "1 séance par semaine",
      level: "Débutant",
      price: "100 000 FCFA",
      topics: ["Hardware", "Software", "Diagnostics", "Réparation"],
      benefits: [
        "Diagnostiquez les pannes courantes",
        "Réparez votre ordinateur",
        "Optimisez les performances"
      ]
    }
  ];

  const methodologies = [
    {
      icon: <BookOpen className="h-10 w-10 text-africanet-orange" />,
      title: "Cours Théoriques",
      description: "Apprenez les concepts fondamentaux avec des explications claires et des exemples concrets."
    },
    {
      icon: <Layers className="h-10 w-10 text-africanet-orange" />,
      title: "Projets Pratiques",
      description: "Mettez en pratique vos connaissances avec des projets réels guidés par nos formateurs."
    },
    {
      icon: <Users className="h-10 w-10 text-africanet-orange" />,
      title: "Travail d'Équipe",
      description: "Développez vos compétences de collaboration en travaillant sur des projets de groupe."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-africanet-orange" />,
      title: "Suivi Personnalisé",
      description: "Bénéficiez d'un accompagnement individuel pour surmonter vos difficultés et progresser."
    }
  ];

  return (
    <section id="formations" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Nos Formations</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mt-6 mb-12">
          Développez vos compétences numériques avec nos formations adaptées à tous les niveaux, dispensées par des professionnels du secteur.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-16">
          {formations.map((formation, idx) => (
            <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-africanet-blue/5 border-b">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{formation.title}</CardTitle>
                    <CardDescription className="text-gray-600">{formation.description}</CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-africanet-orange text-white border-none">
                    {formation.level}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{formation.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{formation.schedule}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Landmark className="h-4 w-4 mr-2" />
                    <span>{formation.price}</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-sm font-semibold mb-3 text-africanet-blue">Vous apprendrez:</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {formation.topics.map((topic, i) => (
                      <Badge key={i} variant="secondary" className="bg-africanet-gray-medium">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  
                  <h4 className="text-sm font-semibold mb-3 text-africanet-blue">Bénéfices:</h4>
                  <ul className="space-y-2">
                    {formation.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <CheckCircle className="h-4 w-4 text-africanet-orange mr-2 flex-shrink-0 mt-1" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6">
                <Button variant="outline">En savoir plus</Button>
                <Button className="bg-africanet-orange hover:bg-africanet-orange/90">S'inscrire</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center mb-12">Notre Méthodologie</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologies.map((method, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">{method.icon}</div>
                <h4 className="text-lg font-semibold mb-3">{method.title}</h4>
                <p className="text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-africanet-blue rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Vous avez des questions?</h3>
            <p className="mb-8">Contactez-nous pour plus d'informations sur nos formations ou pour organiser une formation sur mesure pour votre entreprise.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-africanet-blue">
                Demander des informations
              </Button>
              <Button className="bg-africanet-orange hover:bg-africanet-orange/90">
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formations;
