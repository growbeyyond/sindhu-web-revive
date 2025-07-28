import { Button } from './ui/button';
import { Clock, Calendar, MessageCircle, MapPin, Phone, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const WorkingHours = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentDay, setCurrentDay] = useState(new Date().getDay());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      setCurrentDay(now.getDay());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isClinicOpen = () => {
    const hour = currentTime.getHours();
    return currentDay >= 1 && currentDay <= 6 && hour >= 10 && hour < 18;
  };

  const getDayStatus = (dayIndex: number) => {
    const today = currentDay === 0 ? 7 : currentDay; // Convert Sunday (0) to 7
    const dayNum = dayIndex + 1; // Convert array index to day number (1-6)
    
    if (dayNum === today) return 'today';
    if (dayNum < today) return 'past';
    return 'upcoming';
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Accessible Cancer Care
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Expert oncology care with flexible consultation hours—because your health is our priority.
          </p>
          
          {/* Live Status */}
          <div className="inline-flex items-center space-x-2 bg-card rounded-full px-6 py-3 shadow-lg animate-scale-in">
            <div className={`w-3 h-3 rounded-full ${isClinicOpen() ? 'bg-green-500 animate-pulse' : 'bg-destructive'}`}></div>
            <span className="font-medium text-foreground">
              {isClinicOpen() ? 'Open Now' : 'Currently Closed'}
            </span>
            <span className="text-muted-foreground">
              {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            </span>
          </div>
        </div>

        {/* Interactive Day Schedule */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {days.map((day, index) => {
            const status = getDayStatus(index);
            return (
              <div 
                key={day} 
                className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer
                  ${status === 'today' 
                    ? 'bg-primary text-primary-foreground shadow-lg ring-2 ring-primary/50' 
                    : status === 'past'
                    ? 'bg-muted/50 text-muted-foreground'
                    : 'bg-card hover:bg-accent'
                  }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold">{day}</h3>
                    {status === 'today' && (
                      <span className="text-xs font-medium bg-primary-foreground/20 px-2 py-1 rounded-full">Today</span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Clock className="h-4 w-4" />
                    <span className="text-2xl font-bold">10:00 AM - 6:00 PM</span>
                  </div>
                  <Button 
                    variant={status === 'today' ? 'secondary' : 'outline'}
                    size="sm"
                    onClick={() => window.open('https://wa.me/918639351695?text=Hi, I would like to book an appointment', '_blank')}
                    className="w-full group-hover:scale-105 transition-transform"
                  >
                    Book {day}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hospital Information */}
        <div className="bg-card rounded-2xl p-8 mb-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Visit Us At</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">American Oncology Institute</h4>
                    <p className="text-muted-foreground">Nallagandla, Hyderabad</p>
                    <p className="text-sm text-muted-foreground">Comprehensive Cancer Care Center</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">+91 8639351695</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Expert Oncology Team Available</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-6 text-center">
                <h4 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => window.open('https://wa.me/918639351695?text=Hi, I need an immediate consultation with Dr. Sindhu Pericherla', '_blank')}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('tel:+918639351695', '_blank')}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Directly
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-card rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-4">Time's not flexible?</h3>
          <p className="text-muted-foreground mb-6">
            We understand that cancer doesn't follow a schedule. Contact us for emergency consultations 
            or to discuss alternative appointment times that work for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => window.open('https://wa.me/918639351695?text=Hi, I need a flexible appointment time with Dr. Sindhu', '_blank')}
              className="bg-primary hover:bg-primary/90 transition-colors"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Make an Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background"
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