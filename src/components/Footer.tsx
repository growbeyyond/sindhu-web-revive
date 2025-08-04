import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Heart, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Dr. Sindhu Pericherla</p>
                  <p>Medical Oncologist</p>
                  <p>American Oncology Institute</p>
                  <p>Hyderabad, Telangana</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+91 8639351695</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">drsindhupericharla@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About Dr. Sindhu
              </a>
              <a href="/blogs" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Blog
              </a>
              <a href="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Legal & Privacy</h3>
            <div className="space-y-2">
              <a href="/privacy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="/disclaimer" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Medical Disclaimer
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Working Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Mon - Sat: 10:00 AM - 6:00 PM</span>
              </div>
              <p className="text-sm text-muted-foreground ml-6">Sunday: Closed</p>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Emergency Contact</h3>
            <div className="space-y-3">
              <Button 
                onClick={() => window.open('https://wa.me/918639351695?text=Emergency consultation needed', '_blank')}
                className="w-full"
                size="sm"
              >
                <Heart className="mr-2 h-4 w-4" />
                WhatsApp Consult
              </Button>
              <Button 
                onClick={() => window.open('tel:+918639351695', '_blank')}
                variant="outline"
                className="w-full"
                size="sm"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              <p>&copy; 2024 Dr. Sindhu Pericherla. All rights reserved.</p>
              <p className="mt-1">Professional Cancer Care & Treatment</p>
            </div>
            
            {/* Developer Credit */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Developed by</span>
              <a 
                href="https://www.growbeyyond.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center space-x-1"
              >
                <span>Grow Beyyond</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};