
import { Button } from './ui/button';
import { GraduationCap, Award, BookOpen, Users2 } from 'lucide-react';

const qualifications = [
  "MBBS - Andhra Medical College",
  "MD (General Medicine) - NIMS, Hyderabad",
  "DM (Medical Oncology) - AIIMS, New Delhi",
  "Fellowship in Hematology - Tata Memorial Hospital"
];

const achievements = [
  {
    icon: GraduationCap,
    title: "Education Excellence",
    description: "Graduated with distinction from premier medical institutions"
  },
  {
    icon: Award,
    title: "Professional Recognition",
    description: "Multiple awards for outstanding patient care and research"
  },
  {
    icon: BookOpen,
    title: "Research Publications",
    description: "50+ research papers in international medical journals"
  },
  {
    icon: Users2,
    title: "Medical Leadership",
    description: "Active member of various oncology societies and committees"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Meet Dr. Sindhu Pericherla
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Dr. Sindhu Pericherla is a distinguished Medical Oncologist with over 15 years of experience
                in providing comprehensive cancer care. She is known for her patient-centric approach, 
                combining advanced medical expertise with compassionate care.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Her areas of expertise include solid tumors, hematological malignancies, and personalized 
                cancer therapy. Dr. Cherla is committed to staying at the forefront of oncological advances 
                to provide the best possible outcomes for her patients.
              </p>
            </div>

            {/* Qualifications */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Qualifications</h3>
              <ul className="space-y-2">
                {qualifications.map((qualification, index) => (
                  <li key={index} className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {qualification}
                  </li>
                ))}
              </ul>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Schedule Consultation
            </Button>
          </div>

          {/* Achievements */}
          <div className="space-y-8">
            <img
              src={`https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=400&fit=crop&crop=center`}
              alt="Medical consultation"
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
            
            <div className="grid grid-cols-1 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-sm border">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
