import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "What types of cancer does Dr. Sindhu Pericherla treat?",
    answer: "Dr. Sindhu specializes in treating various types of cancer including breast cancer, lung cancer, gastrointestinal cancers, gynecologic cancers, genitourinary cancers, lymphoma, and multiple myeloma. She has expertise in both solid tumors and hematologic malignancies."
  },
  {
    question: "What treatment options are available?",
    answer: "We offer comprehensive cancer treatment including chemotherapy, immunotherapy, targeted therapy, hormonal therapy, and supportive care. Treatment plans are personalized based on cancer type, stage, and individual patient factors."
  },
  {
    question: "How do I schedule an appointment?",
    answer: "You can schedule an appointment by calling +91 8639351695 or sending a WhatsApp message. We also accept walk-in consultations during clinic hours at American Oncology Institute, Hyderabad."
  },
  {
    question: "Do you accept insurance?",
    answer: "Yes, we accept most major insurance plans. Our team can help verify your coverage and assist with insurance authorization for treatments. Please bring your insurance card for your appointment."
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring all previous medical records, test results, imaging studies, biopsy reports, current medications list, and your insurance card. This helps us provide the most comprehensive care."
  },
  {
    question: "Are second opinions available?",
    answer: "Absolutely. We encourage patients to seek second opinions for cancer diagnosis and treatment plans. Dr. Sindhu provides thorough second opinion consultations to help patients make informed decisions."
  },
  {
    question: "What support services are available?",
    answer: "We provide comprehensive support including nutrition counseling, pain management, psychological support, patient education, and coordination with other specialists as needed throughout your treatment journey."
  },
  {
    question: "How long does a typical consultation take?",
    answer: "Initial consultations typically take 45-60 minutes to ensure thorough evaluation and discussion of treatment options. Follow-up appointments are usually 15-30 minutes depending on your needs."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about cancer treatment and our services
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Have more questions? We're here to help.
          </p>
          <button
            onClick={() => window.open('https://wa.me/918639351695?text=Hi, I have a question about cancer treatment', '_blank')}
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contact Us Directly
          </button>
        </div>
      </div>
    </section>
  );
};