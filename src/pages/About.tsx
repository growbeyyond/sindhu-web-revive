import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users, Heart, BookOpen, Calendar, MessageCircle, Building } from "lucide-react";

const About = () => {
  const qualifications = [
    {
      degree: "MBBS",
      institution: "Mamata Medical College, Telangana",
      year: "2014",
      description: "Bachelor of Medicine and Bachelor of Surgery"
    },
    {
      degree: "MD - Internal Medicine",
      institution: "Kasturba Medical College, Manipal, Karnataka",
      year: "2018",
      description: "Specialization in Internal Medicine"
    },
    {
      degree: "DM - Medical Oncology",
      institution: "Sri Venkateswara Institute of Medical Sciences, Tirupati",
      year: "2022",
      description: "Super-specialization in Medical Oncology and Cancer Research"
    }
  ];

  const achievements = [
    "7+ years of experience in oncology",
    "Expert in diagnosis, management and treatment planning for all solid and hematologic malignancies",
    "Expertise in personalized cancer therapies - chemotherapy, immunotherapy, targeted therapy",
    "Published several case studies and articles in renowned medical journals",
    "Gold Medal during MBBS in Pathology",
    "Active member of ASCO, ESMO, ISMPO and ICON"
  ];

  const expertise = [
    "Breast Cancer",
    "Gynecologic Cancers - Ovary, Cervix, Endometrium",
    "Lung Cancer",
    "Gastrointestinal Cancer - Esophagus, Stomach, Colorectum",
    "Genitourinary Cancer - Prostate, Kidney and Bladder",
    "Lymphoma",
    "Multiple Myeloma",
    "Clinical Trials"
  ];

  const affiliations = [
    {
      name: "American Oncology Institute",
      role: "Medical Oncologist",
      period: "Present"
    },
    {
      name: "American Society of Clinical Oncology (ASCO)",
      role: "Member",
      period: "Present"
    },
    {
      name: "European Society of Medical Oncology (ESMO)",
      role: "Member", 
      period: "Present"
    },
    {
      name: "Indian Society of Medical and Pediatric Oncology (ISMPO)",
      role: "Member",
      period: "Present"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-medical-accent to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Dr. Sindhu Pericherla
              </h1>
              <div className="space-y-2 mb-6">
                <Badge variant="secondary" className="mr-2">MBBS, MD, DM</Badge>
                <Badge variant="outline" className="mr-2">Medical Oncologist</Badge>
                <Badge variant="outline">Precision Medicine Expert</Badge>
              </div>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Dr. Sindhu is one of the leading Medical Oncologists in Hyderabad, with over seven years of experience 
                in oncology. She is an expert in diagnosis, management and treatment planning for all solid and 
                hematologic malignancies with expertise in personalized cancer therapies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={() => window.open('https://wa.me/918639351695?text=Hi, I would like to schedule a consultation with Dr. Sindhu', '_blank')}
                  className="bg-medical-green hover:bg-medical-teal transition-colors"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Book Consultation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  View Availability
                </Button>
              </div>
            </div>
            <div className="lg:text-center animate-slide-in">
              <div className="bg-white rounded-2xl shadow-xl p-8 border">
                <div className="w-48 h-48 bg-gradient-to-br from-medical-blue to-medical-teal rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">SP</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Senior Consultant</h3>
                  <p className="text-medical-blue font-semibold">Medical Oncology</p>
                  <p className="text-muted-foreground">American Oncology Institute, Hyderabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Qualifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Education & Qualifications</h2>
            <p className="text-muted-foreground">
              Extensive medical training from prestigious institutions worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualifications.map((qual, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-medical-accent rounded-lg">
                      <GraduationCap className="h-5 w-5 text-medical-blue" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{qual.degree}</CardTitle>
                      <Badge variant="outline" className="text-xs">{qual.year}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-medical-blue mb-2">{qual.institution}</p>
                  <CardDescription>{qual.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Achievements */}
      <section className="py-16 bg-medical-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Key Achievements</h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="p-1 bg-medical-green rounded-full mt-1">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-foreground">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Areas of Expertise</h2>
              <div className="grid grid-cols-2 gap-3">
                {expertise.map((area, index) => (
                  <Card key={index} className="text-center bg-background">
                    <CardContent className="p-4">
                      <p className="font-semibold text-foreground">{area}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Affiliations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Professional Affiliations</h2>
            <p className="text-muted-foreground">
              Active participation in leading medical organizations and institutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {affiliations.map((affiliation, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-medical-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="h-6 w-6 text-medical-blue" />
                  </div>
                  <CardTitle className="text-lg">{affiliation.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-medical-blue mb-2">{affiliation.role}</p>
                  <CardDescription>{affiliation.period}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-gradient-to-r from-medical-blue to-medical-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-8 w-8 text-medical-blue" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">My Philosophy</h2>
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            "Every patient is unique, and their treatment should be too. I believe in combining 
            cutting-edge medical science with compassionate care to provide hope and healing. 
            My commitment is not just to treat cancer, but to support the whole person through 
            their journey to recovery."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => window.open('https://wa.me/918639351695?text=Hi, I would like to know more about Dr. Sindhu approach to cancer treatment', '_blank')}
              className="bg-white text-medical-blue hover:bg-gray-100"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Discuss Your Case
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-medical-blue"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              View Publications
            </Button>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Awards & Recognition</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Excellence in Cancer Care</h3>
              <p className="text-muted-foreground">Indian Medical Association 2023</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Research Excellence</h3>
              <p className="text-muted-foreground">Asian Society of Medical Oncology 2022</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Humanitarian Service</h3>
              <p className="text-muted-foreground">Cancer Care Foundation 2021</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;