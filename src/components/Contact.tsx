
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to take the next step in your healthcare journey? Contact us today to schedule 
            a consultation or learn more about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Visit Our Clinic</CardTitle>
              </CardHeader>
               <CardContent className="text-center">
                <div className="text-muted-foreground">
                  American Oncology Institute<br />
                  Near Hi-Tech City<br />
                  Hyderabad, Telangana 500081
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Call Us</CardTitle>
              </CardHeader>
               <CardContent className="text-center">
                <div className="text-muted-foreground">
                  <div className="font-semibold text-foreground">+91 8639351695</div>
                  <div className="text-sm">For appointments & consultations</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Consultation Hours</CardTitle>
              </CardHeader>
               <CardContent className="text-center">
                <div className="text-muted-foreground">
                  <div>Mon - Sat: 10:00 AM - 5:00 PM</div>
                  <div>Sunday: By Appointment</div>
                  <div className="text-xs text-primary mt-2">Emergency consultations available</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Book Your Consultation</CardTitle>
                <CardDescription className="text-center">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input 
                        type="text" 
                        placeholder="Enter your first name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input 
                        type="text" 
                        placeholder="Enter your last name"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input 
                      type="email" 
                      placeholder="Enter your email address"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input 
                      type="tel" 
                      placeholder="Enter your phone number"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred Consultation Type
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>In-person Consultation</option>
                      <option>Video Consultation</option>
                      <option>Phone Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Please describe your concerns or questions..."
                      rows={4}
                      className="w-full"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      onClick={() => window.open('https://wa.me/918639351695?text=Hi, I would like to book a consultation', '_blank')}
                      className="flex-1 bg-primary hover:bg-primary/90"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Book Consultation
                    </Button>
                    <Button type="button" variant="outline" className="flex-1">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
