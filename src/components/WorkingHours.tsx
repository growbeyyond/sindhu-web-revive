import { Button } from './ui/button';
import { Clock, Calendar, MessageCircle } from 'lucide-react';

export const WorkingHours = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Accessible Cancer Care: Our Working Hours
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Providing expert oncology care with flexible consultation hours to suit your needs—because your health is our priority.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="text-center">
              <div className="bg-medical-accent rounded-lg p-6 mb-4 hover:shadow-lg transition-shadow">
                <Clock className="h-8 w-8 text-medical-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Mon - Sat</h3>
                <p className="text-2xl font-bold text-medical-blue mb-4">10AM - 5PM</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('https://wa.me/918639351695?text=Hi, I would like to book an appointment during regular hours', '_blank')}
                  className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white"
                >
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-medical-accent rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-4">Time's not flexible?</h3>
          <p className="text-muted-foreground mb-6">
            We understand that cancer doesn't follow a schedule. Contact us for emergency consultations 
            or to discuss alternative appointment times that work for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => window.open('https://wa.me/918639351695?text=Hi, I need a flexible appointment time with Dr. Sindhu', '_blank')}
              className="bg-medical-green hover:bg-medical-teal transition-colors"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Make an Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Emergency Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};