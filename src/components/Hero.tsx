
import { Button } from './ui/button';
import { ArrowRight, Award, Users, Calendar } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Expert Oncology Care with
                <span className="text-blue-600 block">Compassion</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Dr. Sindhu Peri Cherla brings over 15 years of specialized experience in oncology, 
                providing comprehensive cancer care with advanced treatment options and personalized attention.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-2">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-2">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">2000+</div>
                <div className="text-sm text-gray-600">Patients Treated</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-2">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                Learn More
              </Button>
            </div>
          </div>

          {/* Doctor Image */}
          <div className="relative animate-fade-in">
            <div className="relative">
              <img
                src={`https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=600&fit=crop&crop=faces`}
                alt="Dr. Sindhu Peri Cherla"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover h-96"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-sm text-gray-600">Available for</div>
                <div className="text-lg font-semibold text-blue-600">Consultation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
