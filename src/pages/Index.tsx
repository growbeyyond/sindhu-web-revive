
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { WorkingHours } from "@/components/WorkingHours";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WorkingHours />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTA />
    </div>
  );
};

export default Index;
