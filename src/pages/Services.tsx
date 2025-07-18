import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Stethoscope, Brain, Activity, Microscope, Users, Clock, Award, MessageCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Cancer Diagnosis & Staging",
      description: "Comprehensive cancer diagnosis using advanced imaging and molecular techniques for accurate staging and treatment planning.",
      features: ["PET/CT Scans", "Molecular Testing", "Biopsy Analysis", "TNM Staging"],
      duration: "2-3 hours",
      price: "Consultation Required"
    },
    {
      icon: Stethoscope,
      title: "Chemotherapy Administration",
      description: "Personalized chemotherapy protocols tailored to each patient's specific cancer type and overall health condition.",
      features: ["IV Chemotherapy", "Oral Medications", "Targeted Therapy", "24/7 Monitoring"],
      duration: "4-8 hours",
      price: "Consultation Required"
    },
    {
      icon: Brain,
      title: "Radiation Therapy Planning",
      description: "Precision radiation therapy using state-of-the-art technology to target cancer cells while protecting healthy tissue.",
      features: ["IMRT", "IGRT", "Stereotactic Surgery", "Brachytherapy"],
      duration: "15-30 minutes",
      price: "Package Available"
    },
    {
      icon: Activity,
      title: "Immunotherapy Treatment",
      description: "Cutting-edge immunotherapy treatments that harness the body's immune system to fight cancer.",
      features: ["Checkpoint Inhibitors", "CAR-T Therapy", "Monoclonal Antibodies", "Cancer Vaccines"],
      duration: "2-4 hours",
      price: "Consultation Required"
    },
    {
      icon: Microscope,
      title: "Precision Medicine",
      description: "Genomic testing and personalized treatment plans based on tumor genetics and patient characteristics.",
      features: ["Genetic Testing", "Biomarker Analysis", "Personalized Protocols", "Treatment Monitoring"],
      duration: "1-2 weeks",
      price: "Consultation Required"
    },
    {
      icon: Users,
      title: "Supportive Care",
      description: "Comprehensive supportive care including pain management, nutrition counseling, and psychological support.",
      features: ["Pain Management", "Nutrition Therapy", "Counseling", "Palliative Care"],
      duration: "Ongoing",
      price: "Included in Treatment"
    }
  ];

  const specializations = [
    "Breast Cancer",
    "Lung Cancer", 
    "Colorectal Cancer",
    "Prostate Cancer",
    "Gynecologic Cancers",
    "Hematologic Malignancies",
    "Head & Neck Cancers",
    "Liver Cancer"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-medical-accent to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive Cancer Care Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Advanced oncology treatments delivered with compassion and expertise. 
              From diagnosis to recovery, we're with you every step of the way.
            </p>
            <Button 
              size="lg" 
              onClick={() => window.open('https://wa.me/918639351695?text=Hi, I would like to know more about your cancer care services', '_blank')}
              className="bg-medical-green hover:bg-medical-teal transition-colors"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-medical-accent rounded-lg">
                      <service.icon className="h-6 w-6 text-medical-blue" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge variant="outline" className="text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {service.duration}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {service.price}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-medical-blue rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-medical-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Cancer Specializations</h2>
            <p className="text-muted-foreground">
              Expert treatment for various types of cancer with specialized protocols
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {specializations.map((spec, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow bg-background">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground">{spec}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Cancer Care</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-medical-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-medical-blue" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Expert Care</h3>
              <p className="text-muted-foreground">
                Board-certified oncologists with years of specialized experience in cancer treatment
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-medical-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Microscope className="h-8 w-8 text-medical-blue" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Advanced Technology</h3>
              <p className="text-muted-foreground">
                State-of-the-art equipment and latest treatment protocols for optimal outcomes
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-medical-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-medical-blue" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Compassionate Care</h3>
              <p className="text-muted-foreground">
                Comprehensive support system for patients and families throughout the treatment journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-medical-blue to-medical-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Treatment Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book your consultation today and take the first step towards recovery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => window.open('https://wa.me/918639351695?text=Hi, I would like to book an appointment for cancer consultation', '_blank')}
              className="bg-white text-medical-blue hover:bg-gray-100"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-medical-blue"
            >
              Call +91 8639351695
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;