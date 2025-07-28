
import { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src="/src/assets/dr-sindhu-logo.png" alt="Dr. Sindhu Pericherla" className="h-10 w-10 mr-3" />
            <Link to="/" className="text-xl font-bold text-primary hover:text-primary/80 transition-colors">
              Dr. Sindhu Pericherla
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/services') 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                About
              </Link>
              <Link 
                to="/blogs" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/blogs') 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Phone className="h-4 w-4 mr-1" />
              <span>+91 8639351695</span>
            </div>
            <Button 
              onClick={() => window.open('https://wa.me/918639351695?text=Hi, I would like to book an appointment with Dr. Sindhu Pericherla', '_blank')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background shadow-lg border-t">
            <Link 
              to="/" 
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                isActive('/') ? 'text-primary bg-accent' : 'text-foreground hover:text-primary'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                isActive('/services') ? 'text-primary bg-accent' : 'text-foreground hover:text-primary'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                isActive('/about') ? 'text-primary bg-accent' : 'text-foreground hover:text-primary'
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/blogs" 
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                isActive('/blogs') ? 'text-primary bg-accent' : 'text-foreground hover:text-primary'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                isActive('/contact') ? 'text-primary bg-accent' : 'text-foreground hover:text-primary'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 pb-3 border-t border-border">
              <Button 
                onClick={() => {
                  window.open('https://wa.me/918639351695?text=Hi, I would like to book an appointment with Dr. Sindhu Pericherla', '_blank');
                  setIsOpen(false);
                }}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Appointment
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
