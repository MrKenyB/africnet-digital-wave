
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Globe, 
  Settings, 
  Video, 
  Laptop, 
  Code, 
  ShoppingBag,
  Smartphone, 
  HardDrive, 
  Wrench, 
  CameraIcon,
  Monitor, 
  PhoneCall, 
  BookOpen, 
  Award
} from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState("web");

  const services = {
    web: {
      title: "Conception de Sites Web",
      icon: <Globe className="h-12 w-12 text-africanet-orange mb-4" />,
      description: "Nous créons des sites web professionnels, intuitifs et adaptés à vos besoins spécifiques.",
      features: [
        {
          icon: <Code size={20} />,
          title: "Sites Vitrines",
          description: "Présentez votre entreprise avec un site vitrine élégant et professionnel qui met en valeur vos produits et services."
        },
        {
          icon: <ShoppingBag size={20} />,
          title: "E-commerce",
          description: "Vendez en ligne avec une boutique e-commerce complète, sécurisée et facile à gérer."
        },
        {
          icon: <Smartphone size={20} />,
          title: "Design Responsive",
          description: "Tous nos sites s'adaptent automatiquement à tous les appareils (ordinateurs, tablettes, smartphones)."
        },
        {
          icon: <Laptop size={20} />,
          title: "Technologies",
          description: "Nous utilisons les dernières technologies pour créer des sites web modernes, rapides et sécurisés (React, WordPress, etc.)."
        }
      ]
    },
    maintenance: {
      title: "Maintenance Informatique",
      icon: <Settings className="h-12 w-12 text-africanet-orange mb-4" />,
      description: "Nos services de maintenance informatique assurent le bon fonctionnement de vos équipements et systèmes.",
      features: [
        {
          icon: <Wrench size={20} />,
          title: "Diagnostic",
          description: "Identification rapide et précise des problèmes informatiques de votre matériel ou logiciel."
        },
        {
          icon: <HardDrive size={20} />,
          title: "Réparation",
          description: "Réparation professionnelle de vos ordinateurs, serveurs et autres équipements informatiques."
        },
        {
          icon: <Globe size={20} />,
          title: "Maintenance de Sites",
          description: "Mise à jour, sécurisation et optimisation régulières de votre site web pour garantir ses performances."
        },
        {
          icon: <PhoneCall size={20} />,
          title: "Support Technique",
          description: "Assistance technique à distance ou sur site pour résoudre rapidement vos problèmes informatiques."
        }
      ]
    },
    surveillance: {
      title: "Vidéosurveillance",
      icon: <Video className="h-12 w-12 text-africanet-orange mb-4" />,
      description: "Installez un système de vidéosurveillance fiable pour sécuriser vos locaux et biens.",
      features: [
        {
          icon: <CameraIcon size={20} />,
          title: "Types de Caméras",
          description: "Large gamme de caméras adaptées à vos besoins : intérieur, extérieur, infrarouge, haute définition."
        },
        {
          icon: <Monitor size={20} />,
          title: "Accès à Distance",
          description: "Surveillez vos locaux à distance via votre smartphone, tablette ou ordinateur, 24h/24 et 7j/7."
        },
        {
          icon: <Settings size={20} />,
          title: "Installation",
          description: "Installation professionnelle de votre système de vidéosurveillance par nos techniciens qualifiés."
        },
        {
          icon: <HardDrive size={20} />,
          title: "Stockage",
          description: "Solutions de stockage sécurisées pour conserver vos enregistrements vidéo pendant la durée souhaitée."
        }
      ]
    },
    formation: {
      title: "Formation & Coaching",
      icon: <BookOpen className="h-12 w-12 text-africanet-orange mb-4" />,
      description: "Formez-vous aux compétences numériques avec nos programmes adaptés à tous les niveaux.",
      features: [
        {
          icon: <Code size={20} />,
          title: "Développement Web",
          description: "Apprenez à créer des sites web avec HTML, CSS, JavaScript, React et d'autres technologies modernes."
        },
        {
          icon: <Laptop size={20} />,
          title: "Bureautique",
          description: "Maîtrisez les outils bureautiques essentiels comme Microsoft Office ou Google Workspace."
        },
        {
          icon: <Award size={20} />,
          title: "Certifications",
          description: "Préparez-vous à obtenir des certifications reconnues dans le domaine des technologies de l'information."
        },
        {
          icon: <Settings size={20} />,
          title: "Coaching Personnalisé",
          description: "Bénéficiez d'un accompagnement sur mesure pour développer vos compétences numériques selon vos besoins."
        }
      ]
    }
  };

  const ServiceDetail = ({ service }: { service: any }) => (
    <div className="mt-12">
      <div className="text-center mb-12 fade-in-section">
        {service.icon}
        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">{service.description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {service.features.map((feature: any, idx: number) => (
          <div 
            key={idx} 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 fade-in-section"
            style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-africanet-orange/10 rounded-full mr-4">
                <div className="text-africanet-orange">
                  {feature.icon}
                </div>
              </div>
              <h4 className="text-lg font-bold">{feature.title}</h4>
            </div>
            <p className="text-gray-600 ml-14">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Nos Services</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mt-6 mb-12">
          AFRIC'NET propose une gamme complète de services numériques pour répondre aux besoins des particuliers, PME et ONG en Afrique.
        </p>

        <Tabs 
          defaultValue="web" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <TabsTrigger value="web" className="px-4 py-3 data-[state=active]:bg-africanet-orange data-[state=active]:text-white">
                <Globe className="h-4 w-4 mr-2" /> Sites Web
              </TabsTrigger>
              <TabsTrigger value="maintenance" className="px-4 py-3 data-[state=active]:bg-africanet-orange data-[state=active]:text-white">
                <Settings className="h-4 w-4 mr-2" /> Maintenance
              </TabsTrigger>
              <TabsTrigger value="surveillance" className="px-4 py-3 data-[state=active]:bg-africanet-orange data-[state=active]:text-white">
                <Video className="h-4 w-4 mr-2" /> Vidéosurveillance
              </TabsTrigger>
              <TabsTrigger value="formation" className="px-4 py-3 data-[state=active]:bg-africanet-orange data-[state=active]:text-white">
                <BookOpen className="h-4 w-4 mr-2" /> Formation
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="web">
            <ServiceDetail service={services.web} />
          </TabsContent>
          
          <TabsContent value="maintenance">
            <ServiceDetail service={services.maintenance} />
          </TabsContent>
          
          <TabsContent value="surveillance">
            <ServiceDetail service={services.surveillance} />
          </TabsContent>
          
          <TabsContent value="formation">
            <ServiceDetail service={services.formation} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Services;

