import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Database, Phone, Mail } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Shield className="h-12 w-12 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your privacy and confidentiality are fundamental to our practice
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
                <CardTitle className="flex items-center">
                  <Eye className="h-5 w-5 mr-2 text-primary" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Personal Information</h3>
                  <p className="text-muted-foreground">
                    We collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                    <li>Schedule an appointment or consultation</li>
                    <li>Contact us through our website or phone</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Fill out forms on our website</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Medical Information</h3>
                  <p className="text-muted-foreground">
                    As a medical practice, we collect and maintain protected health information (PHI) including:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                    <li>Medical history and current health status</li>
                    <li>Diagnostic test results and imaging</li>
                    <li>Treatment plans and medication records</li>
                    <li>Insurance and billing information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Technical Information</h3>
                  <p className="text-muted-foreground">
                    We automatically collect certain information when you visit our website:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                    <li>IP address and browser information</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referral source and search terms used</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-5 w-5 mr-2 text-primary" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Medical Care</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Provide medical treatment and consultation</li>
                    <li>Coordinate care with other healthcare providers</li>
                    <li>Maintain accurate medical records</li>
                    <li>Follow up on treatment progress</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Communication</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Respond to your inquiries and requests</li>
                    <li>Send appointment reminders and follow-ups</li>
                    <li>Provide educational health information</li>
                    <li>Share relevant medical updates (with consent)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Legal and Administrative</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Comply with healthcare regulations and laws</li>
                    <li>Process insurance claims and billing</li>
                    <li>Maintain quality assurance and safety standards</li>
                    <li>Protect against fraud and unauthorized access</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Information Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in these circumstances:
                </p>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Healthcare Operations</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>With other healthcare providers involved in your care</li>
                    <li>For referrals to specialists or facilities</li>
                    <li>With insurance companies for payment processing</li>
                    <li>For quality assurance and peer review</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Legal Requirements</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>When required by law or regulation</li>
                    <li>To comply with court orders or subpoenas</li>
                    <li>For public health and safety purposes</li>
                    <li>To prevent serious harm or danger</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">With Your Consent</h3>
                  <p className="text-muted-foreground">
                    We will always obtain your written consent before sharing your information for purposes not covered by this policy.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We implement appropriate security measures to protect your personal and medical information:
                </p>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Physical Safeguards</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Secure facilities with controlled access</li>
                    <li>Locked filing cabinets for paper records</li>
                    <li>Secure disposal of confidential documents</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Technical Safeguards</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Encrypted data transmission and storage</li>
                    <li>Secure user authentication systems</li>
                    <li>Regular security updates and monitoring</li>
                    <li>HIPAA-compliant technology platforms</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Administrative Safeguards</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Employee training on privacy policies</li>
                    <li>Access controls and user permissions</li>
                    <li>Regular privacy and security audits</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Under healthcare privacy laws, you have the following rights:
                </p>
                
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Access:</strong> Request copies of your medical records</li>
                  <li><strong>Amendment:</strong> Request corrections to your medical information</li>
                  <li><strong>Restriction:</strong> Request limits on how we use or share your information</li>
                  <li><strong>Confidential Communication:</strong> Request communication through specific methods or locations</li>
                  <li><strong>Accounting:</strong> Request a list of disclosures we have made</li>
                  <li><strong>Notification:</strong> Be notified of any breaches affecting your information</li>
                </ul>

                <p className="text-muted-foreground mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
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
                  This Privacy Policy may be updated from time to time. We will notify you of any material changes by posting the new policy on our website with an updated effective date.
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

export default Privacy;