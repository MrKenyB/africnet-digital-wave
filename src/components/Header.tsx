
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Accueil', link: '#home' },
    { name: 'À propos', link: '#about' },
    { name: 'Services', link: '#services' },
    { name: 'Portfolio', link: '#portfolio' },
    { name: 'Formations', link: '#formations' },
    { name: 'Contact', link: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent'
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold text-africanet-blue">
            AFRIC<span className="text-africanet-orange">'NET</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.link}
              className="font-medium text-gray-700 hover:text-africanet-orange transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-africanet-orange hover:bg-africanet-orange/90">
            Demander un devis
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="Toggle menu"
            className="text-gray-700"
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn(
        'fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform md:hidden pt-20',
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.link}
              className="text-xl font-medium text-gray-700 hover:text-africanet-orange transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-africanet-orange hover:bg-africanet-orange/90 w-full">
            Demander un devis
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
