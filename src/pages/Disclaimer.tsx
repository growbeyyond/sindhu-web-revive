import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Phone, Heart, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Medical Disclaimer
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Important information about medical advice and website content
            </p>
            <p className="text-sm text-muted-foreground">
              Please read this disclaimer carefully before using our services
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-800">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
                    Medical Emergency Notice
                  </h3>
                  <p className="text-red-700 dark:text-red-300 mb-4">
                    If you are experiencing a medical emergency, do not use this website. Call emergency services immediately or go to the nearest emergency room.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      onClick={() => window.open('tel:108', '_blank')}
                      className="bg-red-600 hover:bg-red-700 text-white"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Emergency: 108
                    </Button>
                    <Button 
                      onClick={() => window.open('tel:+918639351695', '_blank')}
                      variant="outline"
                      className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Urgent: +91 8639351695
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-primary" />
                  Nature of Medical Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Educational Purpose Only</h3>
                  <p className="text-muted-foreground">
                    All medical information provided on this website is for educational and informational purposes only. This content is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">No Doctor-Patient Relationship</h3>
                  <p className="text-muted-foreground">
                    The information and interactions on this website do not establish a doctor-patient relationship between you and Dr. Sindhu Pericherla. A formal consultation and examination are required to establish such a relationship.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Individual Medical Advice Required</h3>
                  <p className="text-muted-foreground">
                    Every individual's medical situation is unique. Treatment recommendations must be tailored to specific circumstances, medical history, and current health status through direct consultation.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Professional Medical Advice</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                  <p className="text-amber-800 dark:text-amber-200 font-medium">
                    Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical condition.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">When to Seek Professional Help</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Any new or worsening symptoms</li>
                    <li>Questions about your current treatment plan</li>
                    <li>Concerns about medication side effects</li>
                    <li>Need for second opinions or specialist referrals</li>
                    <li>Any cancer-related symptoms or concerns</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Never Delay Treatment</h3>
                  <p className="text-muted-foreground">
                    Never disregard professional medical advice or delay in seeking treatment because of something you have read on this website. Early intervention is often crucial in cancer care.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Treatment Outcomes and Expectations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">No Guarantee of Results</h3>
                  <p className="text-muted-foreground">
                    Medical treatment outcomes cannot be guaranteed. While Dr. Sindhu Pericherla strives to provide the highest quality care based on current medical standards, individual results may vary significantly.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Factors Affecting Treatment</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Stage and type of cancer</li>
                    <li>Overall health and medical history</li>
                    <li>Response to previous treatments</li>
                    <li>Individual patient factors</li>
                    <li>Compliance with treatment protocols</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Realistic Expectations</h3>
                  <p className="text-muted-foreground">
                    Cancer treatment involves complex medical decisions with potential risks and benefits. All treatment options, expected outcomes, and potential complications will be discussed during your consultation.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Website Content Accuracy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Information Currency</h3>
                  <p className="text-muted-foreground">
                    Medical knowledge and treatment protocols evolve rapidly. While we strive to keep our content current, information may become outdated. Always verify current medical guidelines with your healthcare provider.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Third-Party Content</h3>
                  <p className="text-muted-foreground">
                    References to third-party websites, research studies, or medical literature are provided for informational purposes only. We do not endorse or take responsibility for the accuracy of external content.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Personal Testimonials</h3>
                  <p className="text-muted-foreground">
                    Patient testimonials and case studies represent individual experiences and may not be typical results. Your experience may differ significantly from those described.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  Consultation Availability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Appointment Scheduling</h3>
                  <p className="text-muted-foreground">
                    Dr. Sindhu Pericherla sees patients by appointment only. Emergency consultations may be available subject to schedule and urgency of the situation.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Response Times</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Routine inquiries: 24-48 hours</li>
                    <li>Urgent medical concerns: Same day when possible</li>
                    <li>Emergency situations: Contact emergency services immediately</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Coverage During Absence</h3>
                  <p className="text-muted-foreground">
                    During planned absences, alternative arrangements for urgent care will be communicated to patients. Emergency situations should always be directed to emergency services.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Legal Limitations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Liability Limitation</h3>
                  <p className="text-muted-foreground">
                    Dr. Sindhu Pericherla and associated parties are not liable for any actions taken based on information from this website. All medical decisions should be made in consultation with qualified healthcare professionals.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Jurisdiction</h3>
                  <p className="text-muted-foreground">
                    This disclaimer is governed by the laws of India and the state of Telangana. Medical practice is subject to applicable healthcare regulations and professional standards.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact for Medical Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For proper medical consultation and personalized advice, please contact Dr. Sindhu Pericherla:
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">drsindhupericharla@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">+91 8639351695</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Acknowledgment:</strong> By using this website, you acknowledge that you have read, understood, and agree to this medical disclaimer. You understand that the information provided is not a substitute for professional medical care and that you should seek appropriate medical attention for any health concerns.
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Disclaimer;