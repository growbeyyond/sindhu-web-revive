
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Stethoscope, Heart, Shield, Users, Activity, Microscope } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: "Medical Oncology",
    description: "Comprehensive medical treatment for various types of cancer using chemotherapy, immunotherapy, and targeted therapy."
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Individual treatment plans tailored to each patient's specific cancer type, stage, and personal health profile."
  },
  {
    icon: Shield,
    title: "Preventive Oncology",
    description: "Cancer screening, genetic counseling, and preventive measures to reduce cancer risk and enable early detection."
  },
  {
    icon: Users,
    title: "Patient Support",
    description: "Comprehensive support services including counseling, nutrition guidance, and emotional support for patients and families."
  },
  {
    icon: Activity,
    title: "Advanced Diagnostics",
    description: "State-of-the-art diagnostic services including imaging, biopsies, and molecular testing for accurate cancer staging."
  },
  {
    icon: Microscope,
    title: "Research & Innovation",
    description: "Access to cutting-edge clinical trials and innovative treatment options for better patient outcomes."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Oncology Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Providing world-class cancer care with advanced treatment options, 
            cutting-edge technology, and compassionate support throughout your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
