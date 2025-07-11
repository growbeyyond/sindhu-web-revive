
import { Button } from './ui/button';
import { ArrowRight, Award, Users, Calendar } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-medical-accent to-background min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Expert Oncology Care with Dr. Sindhu – 
                <span className="text-primary block">Your Path to Recovery</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Dr. Sindhu Pericherla, a leading oncologist in Hyderabad, provides advanced cancer treatment, 
                early detection, and compassionate care. Your journey to recovery starts here.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-2">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">7+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">1000+</div>
                <div className="text-sm text-muted-foreground">Patients Treated</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-2">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">Expert</div>
                <div className="text-sm text-muted-foreground">Cancer Care</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => window.open('https://wa.me/918639351695?text=Hi, I would like to book a consultation with Dr. Sindhu Pericherla', '_blank')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              >
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary/10 px-8 py-3"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Doctor Profile Card */}
          <div className="relative animate-fade-in">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
              <div className="w-48 h-48 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-6xl font-bold text-primary-foreground">Dr. SP</span>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Dr. Sindhu Pericherla</h3>
                <p className="text-primary font-semibold">Medical Oncologist</p>
                <p className="text-muted-foreground">American Oncology Institute</p>
                <div className="pt-4">
                  <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm text-green-700 font-medium">Available for Consultation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
