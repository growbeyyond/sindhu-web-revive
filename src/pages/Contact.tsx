import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, Car, Building, Calendar, Users } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Footer } from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    appointmentType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `
Hi Dr. Sindhu, I would like to book an appointment:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Appointment Type: ${formData.appointmentType}
Message: ${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/918639351695?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Redirecting to WhatsApp",
      description: "You will be redirected to WhatsApp to send your appointment request.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      appointmentType: '',
      message: ''
    });
  };

  const appointmentTypes = [
    "First Consultation",
    "Follow-up Appointment",
    "Second Opinion",
    "Treatment Discussion",
    "Post-Treatment Review",
    "Emergency Consultation"
  ];

  const clinicLocations = [
    {
      name: "American Oncology Institute - Hyderabad",
      address: "Gachibowli - Nallagandla Rd, Nallagandla, Hyderabad, Telangana 500019",
      phone: "+91 8639351695",
      timings: "Mon-Sat: 10:00 AM - 5:00 PM",
      type: "Primary Clinic"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Schedule your consultation today. We're here to provide expert cancer care 
              and support you throughout your treatment journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => window.open('https://wa.me/918639351695?text=Hi, I would like to book an urgent consultation', '_blank')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Quick WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground hover:text-background"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Book an Appointment</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll connect you via WhatsApp for quick scheduling
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          placeholder="+91 9876543210"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="appointmentType">Appointment Type *</Label>
                      <Select onValueChange={(value) => setFormData({...formData, appointmentType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select appointment type" />
                        </SelectTrigger>
                        <SelectContent>
                          {appointmentTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Please describe your condition or any specific concerns..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      size="lg"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Send via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center">
                    <Phone className="mr-2 h-5 w-5 text-primary" />
                    Quick Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Primary Number</p>
                      <p className="text-muted-foreground">+91 8639351695</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground">drpsindhu.onco@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">WhatsApp</p>
                      <p className="text-muted-foreground">+91 8639351695</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-primary" />
                    Emergency Contact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                    <p className="font-semibold text-destructive mb-2">24/7 Emergency Helpline</p>
                    <p className="text-destructive">+91 8639351695</p>
                    <p className="text-sm text-destructive/80 mt-2">
                      For urgent medical emergencies and critical patient care
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Locations */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Clinic Locations</h2>
            <p className="text-muted-foreground">
              Multiple convenient locations across Hyderabad for your consultation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clinicLocations.map((clinic, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-background">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-foreground">{clinic.name}</CardTitle>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      clinic.type === 'Primary Clinic' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-accent text-accent-foreground'
                    }`}>
                      {clinic.type}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <p className="text-sm text-muted-foreground">{clinic.address}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <p className="text-sm text-foreground">{clinic.phone}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-primary" />
                    <p className="text-sm text-muted-foreground">{clinic.timings}</p>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-4"
                    onClick={() => window.open(`https://wa.me/918639351695?text=Hi, I would like to book an appointment at ${clinic.name}`, '_blank')}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Here
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Find Us</h2>
            <p className="text-muted-foreground">
              Our location at American Oncology Institute, Nallagandla, Hyderabad
            </p>
          </div>
          
          <div className="bg-muted rounded-lg p-8 text-center">
            <Building className="h-16 w-16 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              We're working on integrating an interactive map to help you find our locations easily
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline"
                onClick={() => window.open('https://maps.google.com/?q=American Oncology Institute Nallagandla Hyderabad', '_blank')}
              >
                <MapPin className="mr-2 h-4 w-4" />
                View on Google Maps
              </Button>
              <Button 
                onClick={() => window.open('https://wa.me/918639351695?text=Hi, I need directions to your clinic', '_blank')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Car className="mr-2 h-4 w-4" />
                Get Directions via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;