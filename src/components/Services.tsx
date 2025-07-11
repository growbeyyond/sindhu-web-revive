
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Stethoscope, Heart, Shield, Users, Activity, Microscope } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: "Personalized Cancer Treatment Plans",
    description: "Tailored treatment strategies based on your specific cancer type, stage, and overall health for the best outcomes."
  },
  {
    icon: Activity,
    title: "Chemotherapy & Targeted Therapy",
    description: "Advanced drug-based treatments designed to attack cancer cells while minimizing side effects."
  },
  {
    icon: Shield,
    title: "Immunotherapy & Advanced Oncology Treatments",
    description: "Harnessing the power of your immune system and the latest innovations to fight cancer effectively."
  },
  {
    icon: Microscope,
    title: "Cancer Screening & Early Detection",
    description: "Early diagnosis through advanced screening methods increases treatment success and survival rates."
  },
  {
    icon: Users,
    title: "Palliative & Supportive Care for Cancer Patients",
    description: "Comprehensive pain management and emotional support to improve quality of life during treatment."
  },
  {
    icon: Stethoscope,
    title: "Post-Treatment Rehabilitation & Wellness",
    description: "Guided recovery programs, including nutrition, physiotherapy, and mental health support for holistic healing."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Cancer Treatment & Care in Hyderabad
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert oncology care with personalized treatment strategies, advanced drug therapies, 
            and comprehensive support throughout your cancer treatment journey.
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
