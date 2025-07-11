import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Amit Verma",
    role: "Patient",
    content: "Facing cancer is tough, but having the right doctor makes all the difference. Dr. Sindhu Pericherla is not just a doctor; she is a true healer who treats with both science and heart. Forever grateful!",
    rating: 5
  },
  {
    name: "Rajesh Kumar", 
    role: "Patient",
    content: "Dr. Sindhu Pericherla gave me hope when I needed it most. Her expertise and compassion helped me through my toughest days. Today, I'm cancer-free and grateful!",
    rating: 5
  },
  {
    name: "Pooja Sharma",
    role: "Patient", 
    content: "Chemotherapy was scary, but Dr. Sindhu's team treated me like family. Their care and encouragement made all the difference. I couldn't have asked for better support!",
    rating: 5
  },
  {
    name: "Venkatesh Rao",
    role: "Patient",
    content: "I was unsure about my treatment, but Dr. Sindhu explained everything patiently. Her confidence reassured me, and I knew I was in safe hands. She's truly a life-saver!",
    rating: 5
  },
  {
    name: "Sangeeta Reddy", 
    role: "Patient",
    content: "After my diagnosis, I felt lost, but Dr. Sindhu guided me at every step. Her personalized treatment gave me hope and strength. Today, I'm living life with confidence!",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-medical-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Reviews From Our Patients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from patients who found hope, healing, and compassionate care 
            with Dr. Sindhu Pericherla's expert oncology treatment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-medical-blue mr-3 opacity-60" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-medical-blue">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};