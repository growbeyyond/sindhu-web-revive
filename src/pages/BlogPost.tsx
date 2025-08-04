import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Share2, BookOpen, MessageCircle, ArrowLeft, Heart } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Footer } from "@/components/Footer";

const BlogPost = () => {
  const { id } = useParams();
  const { toast } = useToast();

  // Mock blog post data - in a real app, this would come from an API
  const blogPost = {
    id: 1,
    title: "Understanding Precision Medicine in Cancer Treatment",
    content: `
      <p>Precision medicine represents one of the most significant advances in cancer treatment in recent decades. By analyzing the genetic makeup of both the patient and their tumor, we can now tailor treatments that are more effective and have fewer side effects.</p>

      <h2>What is Precision Medicine?</h2>
      <p>Precision medicine, also known as personalized medicine, is an approach that takes into account individual variability in genes, environment, and lifestyle for each person. In cancer care, this means analyzing the specific genetic mutations in a patient's tumor to determine the most effective treatment options.</p>

      <h3>Key Components of Precision Medicine:</h3>
      <ul>
        <li><strong>Genomic Testing:</strong> Analyzing tumor DNA to identify specific mutations</li>
        <li><strong>Biomarker Analysis:</strong> Identifying proteins or other substances that indicate cancer presence</li>
        <li><strong>Targeted Therapy:</strong> Using drugs designed to target specific genetic mutations</li>
        <li><strong>Immunotherapy:</strong> Harnessing the immune system to fight cancer</li>
      </ul>

      <h2>Benefits of Precision Medicine</h2>
      <p>The advantages of precision medicine in cancer treatment are substantial:</p>

      <ol>
        <li><strong>Improved Efficacy:</strong> Treatments are more likely to work when they target specific genetic abnormalities in tumors.</li>
        <li><strong>Reduced Side Effects:</strong> By targeting cancer cells specifically, healthy cells are less likely to be damaged.</li>
        <li><strong>Better Prognosis:</strong> Patients often experience improved outcomes and quality of life.</li>
        <li><strong>Cost-Effective:</strong> Avoiding ineffective treatments saves time and resources.</li>
      </ol>

      <h2>Current Applications</h2>
      <p>Precision medicine is currently being used successfully in treating various types of cancer:</p>

      <h3>Breast Cancer</h3>
      <p>HER2-positive breast cancers are treated with targeted therapies like trastuzumab (Herceptin), which specifically targets the HER2 protein overexpressed in these tumors.</p>

      <h3>Lung Cancer</h3>
      <p>EGFR mutations in non-small cell lung cancer can be treated with EGFR inhibitors like erlotinib and osimertinib, leading to significantly improved outcomes.</p>

      <h3>Melanoma</h3>
      <p>BRAF mutations found in about 50% of melanomas can be targeted with BRAF inhibitors, often combined with MEK inhibitors for enhanced effectiveness.</p>

      <h2>The Testing Process</h2>
      <p>The precision medicine process typically involves several steps:</p>

      <ol>
        <li><strong>Tissue Biopsy:</strong> A sample of the tumor is obtained through biopsy.</li>
        <li><strong>Genetic Analysis:</strong> The tumor sample is analyzed in specialized laboratories.</li>
        <li><strong>Report Generation:</strong> A comprehensive report identifies actionable mutations.</li>
        <li><strong>Treatment Planning:</strong> Oncologists use the results to develop personalized treatment plans.</li>
        <li><strong>Monitoring:</strong> Regular follow-ups assess treatment effectiveness and adjust as needed.</li>
      </ol>

      <h2>Challenges and Limitations</h2>
      <p>While precision medicine offers tremendous promise, there are still challenges to overcome:</p>

      <ul>
        <li><strong>Tumor Heterogeneity:</strong> Tumors may have different mutations in different areas</li>
        <li><strong>Resistance Development:</strong> Cancer cells may develop resistance to targeted therapies over time</li>
        <li><strong>Cost and Accessibility:</strong> Advanced testing and treatments can be expensive</li>
        <li><strong>Limited Targets:</strong> Not all cancers have identifiable targetable mutations</li>
      </ul>

      <h2>Future Directions</h2>
      <p>The field of precision medicine continues to evolve rapidly:</p>

      <h3>Liquid Biopsies</h3>
      <p>Blood tests that can detect circulating tumor DNA are becoming more sophisticated, allowing for less invasive monitoring of treatment response and disease progression.</p>

      <h3>Artificial Intelligence</h3>
      <p>AI and machine learning are being integrated to better predict treatment responses and identify new therapeutic targets.</p>

      <h3>Combination Therapies</h3>
      <p>Researchers are exploring combinations of targeted therapies, immunotherapies, and traditional treatments for enhanced effectiveness.</p>

      <h2>Patient Considerations</h2>
      <p>If you're considering precision medicine as part of your cancer treatment, here are important factors to discuss with your oncologist:</p>

      <ul>
        <li>Whether your cancer type is suitable for genomic testing</li>
        
        <li>Clinical trial opportunities</li>
        <li>Timeline for receiving test results</li>
        <li>Alternative treatment options if no targetable mutations are found</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Precision medicine represents a paradigm shift in cancer treatment, moving from a one-size-fits-all approach to truly personalized care. While challenges remain, the continued advancement in genomic testing, targeted therapies, and our understanding of cancer biology promises even more effective treatments in the future.</p>

      <p>As we continue to refine these approaches, patients can expect more effective treatments with fewer side effects, ultimately leading to better outcomes and improved quality of life during and after cancer treatment.</p>
    `,
    category: "Treatment Updates",
    readTime: "8 min read",
    date: "July 15, 2025",
    author: "Dr. Sindhu Pericherla",
    image: "/blog-precision-medicine.jpg"
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Immunotherapy: Harnessing Your Body's Natural Defense",
      category: "Treatment Updates",
      readTime: "10 min read"
    },
    {
      id: 3,
      title: "Early Detection Saves Lives: Cancer Screening Guidelines",
      category: "Cancer Prevention",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Breakthrough Research: CAR-T Cell Therapy Updates",
      category: "Research & Innovation",
      readTime: "7 min read"
    }
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blogPost.title,
        text: 'Check out this insightful article about precision medicine in cancer treatment',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "The article link has been copied to your clipboard.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blogs" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="animate-fade-in">
            <Badge variant="outline" className="mb-4">
              <BookOpen className="h-3 w-3 mr-1" />
              {blogPost.category}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {blogPost.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button 
                onClick={handleShare}
                variant="outline" 
                size="sm"
                className="hover:bg-primary hover:text-white"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share Article
              </Button>
              <Button 
                onClick={() => window.open('https://wa.me/918639351695?text=Hi, I read your article about precision medicine and have some questions', '_blank')}
                variant="outline" 
                size="sm"
                className="hover:bg-green-600 hover:text-white"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Discuss with Dr. Sindhu
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-video relative overflow-hidden rounded-lg">
            <img 
              src={blogPost.image} 
              alt={blogPost.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm opacity-90">Featured Article</p>
              <h2 className="text-2xl font-bold">Precision Medicine in Cancer Care</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <div 
                    className="prose prose-lg max-w-none
                      prose-headings:text-foreground 
                      prose-p:text-muted-foreground 
                      prose-strong:text-foreground
                      prose-li:text-muted-foreground
                      prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4
                      prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3
                      prose-ul:my-4 prose-ol:my-4
                      prose-li:my-2"
                    dangerouslySetInnerHTML={{ __html: blogPost.content }}
                  />
                  
                  {/* Author Bio */}
                  <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-muted rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xl">SP</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">About the Author</h3>
                        <p className="text-muted-foreground mb-3">
                          Dr. Sindhu Pericherla is a renowned medical oncologist with over 8+ years of experience 
                          in cancer care. She specializes in precision medicine and has published extensively on 
                          personalized cancer treatment approaches.
                        </p>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => window.open('https://wa.me/918639351695?text=Hi Dr. Sindhu, I would like to know more about your expertise', '_blank')}
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Connect with Dr. Sindhu
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Table of Contents */}
              <Card className="shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Table of Contents</h3>
                  <nav className="space-y-2 text-sm">
                    <a href="#what-is-precision-medicine" className="block text-muted-foreground hover:text-primary">
                      What is Precision Medicine?
                    </a>
                    <a href="#benefits" className="block text-muted-foreground hover:text-primary">
                      Benefits of Precision Medicine
                    </a>
                    <a href="#current-applications" className="block text-muted-foreground hover:text-primary">
                      Current Applications
                    </a>
                    <a href="#testing-process" className="block text-muted-foreground hover:text-primary">
                      The Testing Process
                    </a>
                    <a href="#challenges" className="block text-muted-foreground hover:text-primary">
                      Challenges and Limitations
                    </a>
                    <a href="#future-directions" className="block text-muted-foreground hover:text-primary">
                      Future Directions
                    </a>
                  </nav>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card className="shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((post) => (
                      <div key={post.id} className="border-b border-border pb-3 last:border-b-0">
                        <Link 
                          to={`/blog/${post.id}`} 
                          className="text-sm font-medium text-foreground hover:text-primary transition-colors line-clamp-2"
                        >
                          {post.title}
                        </Link>
                        <div className="flex items-center space-x-2 mt-1 text-xs text-muted-foreground">
                          <span>{post.category}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="shadow-lg border-0 bg-primary text-white">
                <CardContent className="p-6 text-center">
                  <Heart className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Need Expert Consultation?</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Get personalized cancer care advice from Dr. Sindhu
                  </p>
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="w-full bg-background text-primary hover:bg-accent"
                    onClick={() => window.open('https://wa.me/918639351695?text=Hi, I need consultation about cancer treatment options', '_blank')}
                  >
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Found This Article Helpful?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Share it with others who might benefit from this information
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleShare}
              className="bg-primary hover:bg-primary/90 transition-colors"
            >
              <Share2 className="mr-2 h-5 w-5" />
              Share Article
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open('https://wa.me/918639351695?text=Hi, I have questions about the precision medicine article', '_blank')}
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Ask Questions
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPost;