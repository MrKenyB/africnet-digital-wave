
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";

const Portfolio = () => {
  const [openProject, setOpenProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: "E-Boutique Artisanat Africain",
      category: "E-commerce",
      thumbnail: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      images: [
        "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1788&q=80"
      ],
      client: "Coopérative Artisanale Bamako",
      objectives: "Créer une plateforme e-commerce pour vendre des produits artisanaux africains à l'international.",
      solution: "Développement d'une boutique en ligne complète avec paiement sécurisé, gestion de stock et expédition internationale.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      testimonial: {
        text: "AFRIC'NET a transformé notre activité en nous permettant de vendre nos produits dans le monde entier. Notre chiffre d'affaires a augmenté de 300% en 6 mois!",
        author: "Aminata Koné, Directrice"
      }
    },
    {
      title: "Site Institutionnel ONG",
      category: "Site Vitrine",
      thumbnail: "https://images.unsplash.com/photo-1593697821028-7cc59cfd7399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      images: [
        "https://images.unsplash.com/photo-1593697821028-7cc59cfd7399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      ],
      client: "Éducation Pour Tous",
      objectives: "Créer une présence en ligne pour promouvoir les actions de l'ONG et faciliter les dons.",
      solution: "Conception d'un site responsive avec présentation des projets, système de don en ligne et blog d'actualités.",
      technologies: ["WordPress", "Divi", "WooCommerce Donations"],
      testimonial: {
        text: "Le site développé par AFRIC'NET nous a permis d'augmenter notre visibilité et de collecter plus facilement des fonds pour nos projets éducatifs.",
        author: "Ibrahim Touré, Coordinateur"
      }
    },
    {
      title: "Système de Gestion pour Cabinet Médical",
      category: "Application Web",
      thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      images: [
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      ],
      client: "Clinique de la Santé",
      objectives: "Développer un système de gestion des patients, rendez-vous et dossiers médicaux.",
      solution: "Création d'une application web sécurisée pour la gestion complète du cabinet médical.",
      technologies: ["React", "Firebase", "TailwindCSS"],
      testimonial: {
        text: "Cette application a révolutionné notre gestion quotidienne. Nous avons gagné un temps précieux et amélioré la qualité de service à nos patients.",
        author: "Dr. Fatou Diop, Directrice"
      }
    },
    {
      title: "Installation de Vidéosurveillance",
      category: "Sécurité",
      thumbnail: "https://images.unsplash.com/photo-1557784704-985238fb9ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80",
      images: [
        "https://images.unsplash.com/photo-1557784704-985238fb9ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
      ],
      client: "Supermarché Dakar Express",
      objectives: "Sécuriser le magasin avec un système de surveillance moderne et accessible à distance.",
      solution: "Installation d'un système complet de caméras HD avec enregistrement et accès mobile.",
      technologies: ["Caméras IP", "NVR", "Application Mobile"],
      testimonial: {
        text: "Depuis l'installation du système par AFRIC'NET, nous avons constaté une baisse significative des vols et une meilleure gestion de notre commerce.",
        author: "Modou Faye, Propriétaire"
      }
    }
  ];
  
  const openProjectDetails = (idx: number) => {
    setOpenProject(idx);
  };
  
  const closeProjectDetails = () => {
    setOpenProject(null);
  };
  
  const ProjectDetails = ({ project }: { project: typeof projects[0] }) => (
    <div className="space-y-4">
      <div className="mb-6">
        <img 
          src={project.images[0]} 
          alt={project.title} 
          className="w-full rounded-lg object-cover h-[300px]" 
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-africanet-orange">Client</h4>
          <p>{project.client}</p>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-africanet-orange">Catégorie</h4>
          <p>{project.category}</p>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-africanet-orange">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span key={i} className="bg-africanet-gray-light text-xs py-1 px-2 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="text-lg font-semibold mb-2">Objectifs</h4>
        <p className="text-gray-700 mb-4">{project.objectives}</p>
        
        <h4 className="text-lg font-semibold mb-2">Notre Solution</h4>
        <p className="text-gray-700 mb-4">{project.solution}</p>
        
        <div className="bg-africanet-gray-light p-4 rounded-lg border-l-4 border-africanet-orange mt-6">
          <p className="italic text-gray-700 mb-2">"{project.testimonial.text}"</p>
          <p className="text-sm font-medium">— {project.testimonial.author}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="py-20 bg-africanet-blue/5">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Nos Réalisations</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mt-6 mb-12">
          Découvrez quelques-uns de nos projets récents et comment nous avons aidé nos clients à atteindre leurs objectifs numériques.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-xs font-medium text-white bg-africanet-orange rounded-full py-1 px-3">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.objectives}</p>
                <Button 
                  variant="outline"
                  className="w-full border-africanet-orange text-africanet-orange hover:bg-africanet-orange hover:text-white"
                  onClick={() => openProjectDetails(idx)}
                >
                  Voir les détails
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {openProject !== null && (
          <Dialog open={openProject !== null} onOpenChange={closeProjectDetails}>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">{projects[openProject].title}</DialogTitle>
                <DialogDescription className="text-africanet-orange">
                  {projects[openProject].category}
                </DialogDescription>
              </DialogHeader>
              <ProjectDetails project={projects[openProject]} />
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
