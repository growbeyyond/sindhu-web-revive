import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, AlertTriangle, Scale, Phone, Mail } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <FileText className="h-12 w-12 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Please read these terms carefully before using our services
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            
            <Card>
              <CardHeader>
                <CardTitle>Agreement to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By accessing and using the website and services of Dr. Sindhu Pericherla, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-primary" />
                  Medical Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">No Doctor-Patient Relationship</h3>
                  <p className="text-muted-foreground">
                    Information provided on this website does not establish a doctor-patient relationship. Online interactions, emails, or website communications do not constitute medical consultation or treatment.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Educational Information Only</h3>
                  <p className="text-muted-foreground">
                    All content on this website is for educational and informational purposes only. It should not be used as a substitute for professional medical advice, diagnosis, or treatment.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Seek Professional Advice</h3>
                  <p className="text-muted-foreground">
                    Always seek the advice of your physician or other qualified healthcare providers with any questions regarding a medical condition. Never disregard professional medical advice or delay seeking treatment based on information from this website.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Appointment and Consultation Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Scheduling</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Appointments must be scheduled in advance through approved channels</li>
                    <li>Appointment availability is subject to Dr. Sindhu's schedule</li>
                    <li>We reserve the right to confirm appointments before treatment</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Cancellation Policy</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>At least 24 hours notice required for cancellations</li>
                    <li>Emergency cancellations will be accommodated when possible</li>
                    <li>Repeated no-shows may result in discharge from the practice</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Payment Terms</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Payment is due at the time of service</li>
                    <li>We accept cash, cards, and insurance (subject to verification)</li>
                    <li>Patients are responsible for applicable co-pays and deductibles</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Patient Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Accurate Information</h3>
                  <p className="text-muted-foreground">
                    Patients must provide accurate, complete, and truthful information about their medical history, current medications, and symptoms.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Treatment Compliance</h3>
                  <p className="text-muted-foreground">
                    Patients are expected to follow prescribed treatment plans and notify the doctor of any concerns or side effects.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Respectful Behavior</h3>
                  <p className="text-muted-foreground">
                    Patients and visitors must treat all staff members with respect and courtesy. Abusive or threatening behavior will not be tolerated.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="h-5 w-5 mr-2 text-primary" />
                  Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Medical Outcomes</h3>
                  <p className="text-muted-foreground">
                    While Dr. Sindhu Pericherla will provide the highest standard of care, no guarantee is made regarding the outcome of any treatment or procedure. Medical practice involves inherent risks and uncertainties.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Website Content</h3>
                  <p className="text-muted-foreground">
                    We strive to ensure the accuracy of information on our website, but we make no warranties about the completeness, reliability, or accuracy of this information.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Third-Party Links</h3>
                  <p className="text-muted-foreground">
                    Our website may contain links to third-party sites. We are not responsible for the content or privacy practices of these external sites.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  All content on this website, including text, images, logos, and graphics, is the property of Dr. Sindhu Pericherla or licensed to us. Unauthorized use, reproduction, or distribution is prohibited.
                </p>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Permitted Use</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Personal, non-commercial use only</li>
                    <li>No modification or redistribution without permission</li>
                    <li>Proper attribution when sharing educational content</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Privacy and Confidentiality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Patient privacy and confidentiality are protected under HIPAA and other applicable laws. Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your personal and medical information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Modifications to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any modifications constitutes acceptance of the updated terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have questions about these Terms of Service, please contact us:
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

                <p className="text-sm text-muted-foreground mt-6">
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;