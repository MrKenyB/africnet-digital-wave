
import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-africanet-blue text-white pt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              AFRIC<span className="text-africanet-orange">'NET</span>
            </h3>
            <p className="text-white/80 mb-6">
              Solutions numériques innovantes pour particuliers, PME et ONG en Afrique.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 bg-white/10 hover:bg-africanet-orange rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 bg-white/10 hover:bg-africanet-orange rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 bg-white/10 hover:bg-africanet-orange rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/80 hover:text-africanet-orange transition-colors">
                  Conception de Sites Web
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-africanet-orange transition-colors">
                  Maintenance Informatique
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-africanet-orange transition-colors">
                  Installation de Vidéosurveillance
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-africanet-orange transition-colors">
                  Formation & Coaching
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Liens Utiles</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/80 hover:text-africanet-orange transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/80 hover:text-africanet-orange transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#formations" className="text-white/80 hover:text-africanet-orange transition-colors">
                  Formations
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-africanet-orange transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-africanet-orange mr-3 mt-1 flex-shrink-0" />
                <span className="text-white/80">
                  123 Rue Principale<br />Dakar, Sénégal
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-africanet-orange mr-3 flex-shrink-0" />
                <span className="text-white/80">+221 78 123 45 67</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-africanet-orange mr-3 flex-shrink-0" />
                <a href="mailto:contact@africnet.com" className="text-white/80 hover:text-africanet-orange transition-colors">
                  contact@africnet.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} AFRIC'NET. Tous droits réservés.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 text-sm hover:text-africanet-orange transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-white/60 text-sm hover:text-africanet-orange transition-colors">
              Conditions d'utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
