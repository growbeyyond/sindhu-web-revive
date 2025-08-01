import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Search, User, ArrowRight, MessageCircle, BookOpen, Heart, Microscope } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Footer } from "@/components/Footer";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { name: "All", count: 24 },
    { name: "Cancer Prevention", count: 8 },
    { name: "Treatment Updates", count: 6 },
    { name: "Patient Stories", count: 5 },
    { name: "Research & Innovation", count: 3 },
    { name: "Nutrition & Wellness", count: 2 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "Understanding Precision Medicine in Cancer Treatment",
      excerpt: "How genomic testing is revolutionizing personalized cancer care and improving patient outcomes through targeted therapies.",
      category: "Treatment Updates",
      readTime: "8 min read",
      date: "July 31, 2025",
      author: "Dr. Sindhu Pericherla",
      image: "/blog-precision-medicine.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Early Detection Saves Lives: Cancer Screening Guidelines",
      excerpt: "Comprehensive guide to cancer screening recommendations by age group and risk factors for early detection.",
      category: "Cancer Prevention",
      readTime: "6 min read",
      date: "July 28, 2025",
      author: "Dr. Sindhu Pericherla",
      image: "/blog-screening.jpg",
      featured: true
    }
  ];

  const blogPosts = [
    {
      id: 3,
      title: "Immunotherapy: Harnessing Your Body's Natural Defense",
      excerpt: "Exploring the latest advances in immunotherapy and how it's changing cancer treatment paradigms.",
      category: "Treatment Updates",
      readTime: "10 min read",
      date: "July 25, 2025",
      author: "Dr. Sindhu Pericherla",
      image: "/blog-immunotherapy.jpg"
    },
    {
      id: 4,
      title: "Sarah's Journey: Beating Breast Cancer with Hope",
      excerpt: "A patient's inspiring story of diagnosis, treatment, and recovery with insights into emotional and physical healing.",
      category: "Patient Stories",
      readTime: "5 min read",
      date: "July 22, 2025",
      author: "Dr. Sindhu Pericherla",
      image: "/blog-patient-story.jpg"
    },
    {
      id: 5,
      title: "Nutrition During Cancer Treatment: A Complete Guide",
      excerpt: "Evidence-based nutritional strategies to support your body during cancer treatment and recovery.",
      category: "Nutrition & Wellness",
      readTime: "12 min read",
      date: "July 19, 2025",
      author: "Dr. Sindhu Pericherla",
      image: "/blog-nutrition.jpg"
    },
    {
      id: 6,
      title: "Breakthrough Research: CAR-T Cell Therapy Updates",
      excerpt: "Latest developments in CAR-T cell therapy and its promising results in treating blood cancers.",
      category: "Research & Innovation",
      readTime: "7 min read",
      date: "July 16, 2025",
      author: "Dr. Sindhu Pericherla",
      image: "/blog-cart-therapy.jpg"
    },
    {
      id: 7,
      title: "Managing Cancer Treatment Side Effects",
      excerpt: "Practical strategies and medical approaches to minimize and manage common cancer treatment side effects.",
      category: "Treatment Updates",
      readTime: "9 min read",
      date: "July 13, 2025",
      author: "Dr. Sindhu Pericherla",
      image: "/blog-side-effects.jpg"
    },
    {
      id: 8,
      title: "The Role of Mental Health in Cancer Care",
      excerpt: "Understanding the psychological aspects of cancer treatment and the importance of mental health support.",
      category: "Patient Stories",
      readTime: "6 min read",
      date: "July 10, 2025",
      author: "Dr. Sindhu Pericherla",
      image: "/blog-mental-health.jpg"
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Treatment Updates":
        return <Microscope className="h-4 w-4" />;
      case "Patient Stories":
        return <Heart className="h-4 w-4" />;
      case "Research & Innovation":
        return <BookOpen className="h-4 w-4" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Cancer Care Insights
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Evidence-based articles, patient stories, and latest research updates 
              to help you stay informed about cancer care and treatment options.
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant={category.name === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-white transition-colors px-4 py-2"
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge variant="secondary" className="mb-2">Featured</Badge>
                    <h3 className="text-xl font-bold">{post.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">
                        {getCategoryIcon(post.category)}
                        <span className="ml-1">{post.category}</span>
                      </Badge>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary">
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Blog Posts */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow group bg-background">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="text-xs">
                      {getCategoryIcon(post.category)}
                      <span className="ml-1">{post.category}</span>
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>Dr. Sindhu</span>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary">
                        Read <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Latest Cancer Care Insights
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get evidence-based articles and treatment updates delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="bg-background/10 border-background/20 text-primary-foreground placeholder:text-primary-foreground/70"
            />
            <Button 
              variant="secondary"
              className="bg-background text-primary hover:bg-accent"
            >
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-white/80 mt-4">
            No spam. Unsubscribe anytime. Monthly updates only.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Have Questions About Cancer Care?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Connect with Dr. Sindhu for personalized consultation and expert advice
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => window.open('https://wa.me/918639351695?text=Hi, I have questions about cancer care after reading your blog', '_blank')}
              className="bg-green-600 hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Ask Dr. Sindhu
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Consultation
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blogs;