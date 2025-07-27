import { Button } from './ui/button';
import { MessageCircle, Phone, Calendar, ArrowRight } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Journey to Recovery?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Don't wait to get the expert cancer care you deserve. Schedule your consultation 
            with Dr. Sindhu Pericherla today and take the first step towards healing.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Book Appointment</h3>
              <p className="text-sm opacity-90">Schedule your consultation online or by phone</p>
            </div>
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Get Support</h3>
              <p className="text-sm opacity-90">Comprehensive care and emotional support</p>
            </div>
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <ArrowRight className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Start Treatment</h3>
              <p className="text-sm opacity-90">Personalized treatment plan for your recovery</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => window.open('https://wa.me/918639351695?text=Hi, I would like to schedule a consultation with Dr. Sindhu Pericherla for cancer treatment', '_blank')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('tel:+918639351695', '_blank')}
              className="border-foreground text-foreground hover:bg-foreground hover:text-background"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call +91 8639351695
            </Button>
          </div>

          <div className="mt-8 text-sm opacity-75">
            <p>Available Mon-Sat: 10AM-5PM | Emergency consultations by appointment</p>
          </div>
        </div>
      </div>
    </section>
  );
};