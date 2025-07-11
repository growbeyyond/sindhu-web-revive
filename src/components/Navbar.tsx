
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
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-medical-blue hover:text-medical-teal transition-colors">
              Dr. Sindhu Peri Cherla
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-medical-blue border-b-2 border-medical-blue' 
                    : 'text-foreground hover:text-medical-blue'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/services') 
                    ? 'text-medical-blue border-b-2 border-medical-blue' 
                    : 'text-foreground hover:text-medical-blue'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-medical-blue border-b-2 border-medical-blue' 
                    : 'text-foreground hover:text-medical-blue'
                }`}
              >
                About
              </Link>
              <Link 
                to="/blogs" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/blogs') 
                    ? 'text-medical-blue border-b-2 border-medical-blue' 
                    : 'text-foreground hover:text-medical-blue'
                }`}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-medical-blue border-b-2 border-medical-blue' 
                    : 'text-foreground hover:text-medical-blue'
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
              <span>+91 98765 43210</span>
            </div>
            <Button 
              onClick={() => window.open('https://wa.me/919876543210?text=Hi, I would like to book an appointment with Dr. Sindhu Peri Cherla', '_blank')}
              className="bg-medical-green hover:bg-medical-teal transition-colors"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
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
                isActive('/') ? 'text-medical-blue bg-medical-accent' : 'text-foreground hover:text-medical-blue'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                isActive('/services') ? 'text-medical-blue bg-medical-accent' : 'text-foreground hover:text-medical-blue'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                isActive('/about') ? 'text-medical-blue bg-medical-accent' : 'text-foreground hover:text-medical-blue'
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/blogs" 
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                isActive('/blogs') ? 'text-medical-blue bg-medical-accent' : 'text-foreground hover:text-medical-blue'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 text-base font-medium transition-colors ${
                isActive('/contact') ? 'text-medical-blue bg-medical-accent' : 'text-foreground hover:text-medical-blue'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 pb-3 border-t border-border">
              <Button 
                onClick={() => {
                  window.open('https://wa.me/919876543210?text=Hi, I would like to book an appointment with Dr. Sindhu Peri Cherla', '_blank');
                  setIsOpen(false);
                }}
                className="w-full bg-medical-green hover:bg-medical-teal transition-colors"
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
