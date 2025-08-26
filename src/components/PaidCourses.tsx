import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
// Circular rotation animation
const rotate360 = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const RotatingIcon = styled.div`
  display: inline-block;
  animation: ${rotate360} 2.5s linear infinite;
`;
import {
  Clock,
  Users,
  Star,
  CheckCircle,
  BookOpen,
  Trophy,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PaidCourses = () => {
  const navigate = useNavigate();
  const courses = [
    {
      title: "Complete Web Development Bootcamp",
      price: "PKR 25,000",
      originalPrice: "PKR 35,000",
      duration: "6 Months",
      students: "500+",
      rating: 4.9,
      level: "Beginner to Advanced",
      description:
        "Master full-stack web development from scratch to deployment.",
      features: [
        "HTML5, CSS3, JavaScript ES6+",
        "React.js & Node.js",
        "MongoDB & Express.js",
        "RESTful APIs & Authentication",
        "Deployment & DevOps",
        "Portfolio Projects",
        "Job Placement Support",
        "Lifetime Access to Resources",
      ],
      category: "Development",
      popular: true,
    },
    {
      title: "React Native Mobile App Development",
      price: "PKR 30,000",
      originalPrice: "PKR 40,000",
      duration: "4 Months",
      students: "300+",
      rating: 4.8,
      level: "Intermediate",
      description: "Build cross-platform mobile apps using React Native.",
      features: [
        "React Native Fundamentals",
        "Navigation & State Management",
        "API Integration",
        "Firebase Backend",
        "App Store Deployment",
        "Real Projects",
        "Code Review Sessions",
        "Industry Mentorship",
      ],
      category: "Mobile",
    },
    {
      title: "Advanced Digital Marketing",
      price: "PKR 20,000",
      originalPrice: "PKR 28,000",
      duration: "3 Months",
      students: "400+",
      rating: 4.7,
      level: "All Levels",
      description:
        "Complete digital marketing mastery with practical campaigns.",
      features: [
        "SEO & Content Marketing",
        "Social Media Marketing",
        "Google Ads & Facebook Ads",
        "Email Marketing",
        "Analytics & Reporting",
        "Live Campaign Management",
        "Certification Preparation",
        "Freelancing Guidance",
      ],
      category: "Marketing",
    },
    {
      title: "Data Science & Machine Learning",
      price: "PKR 35,000",
      originalPrice: "PKR 45,000",
      duration: "8 Months",
      students: "200+",
      rating: 4.9,
      level: "Intermediate to Advanced",
      description: "Become a data scientist with Python and machine learning.",
      features: [
        "Python for Data Science",
        "Statistical Analysis",
        "Machine Learning Algorithms",
        "Deep Learning with TensorFlow",
        "Data Visualization",
        "Real-world Projects",
        "Kaggle Competitions",
        "Career Guidance",
      ],
      category: "Data Science",
    },
    {
      title: "Professional Graphic Design",
      price: "PKR 18,000",
      originalPrice: "PKR 25,000",
      duration: "4 Months",
      students: "350+",
      rating: 4.6,
      level: "Beginner to Advanced",
      description:
        "Master graphic design with industry-standard tools and techniques.",
      features: [
        "Adobe Creative Suite Mastery",
        "Brand Identity Design",
        "Print & Digital Design",
        "Typography & Color Theory",
        "Client Project Management",
        "Portfolio Development",
        "Freelance Business Setup",
        "Design Trends & Best Practices",
      ],
      category: "Design",
    },
    {
      title: "Cybersecurity Professional",
      price: "PKR 28,000",
      originalPrice: "PKR 38,000",
      duration: "5 Months",
      students: "150+",
      rating: 4.8,
      level: "Intermediate",
      description: "Become a cybersecurity expert with hands-on experience.",
      features: [
        "Ethical Hacking Techniques",
        "Network Security",
        "Incident Response",
        "Security Auditing",
        "Compliance & Governance",
        "Lab Exercises",
        "Industry Certifications Prep",
        "Job Placement Assistance",
      ],
      category: "Security",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Development":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Mobile":
        return "bg-green-100 text-green-800 border-green-200";
      case "Marketing":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Data Science":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Design":
        return "bg-pink-100 text-pink-800 border-pink-200";
      case "Security":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

const pulseText = keyframes`
  0% { transform: scale(1); }
  20% { transform: scale(1.08); }
  40% { transform: scale(0.98); }
  60% { transform: scale(1.06); }
  80% { transform: scale(0.99); }
  100% { transform: scale(1); }
`;
const PulseHeading = styled.h2`
  animation: ${pulseText} 1.2s infinite;
  background: linear-gradient(90deg, #3b82f6 40%, #ef4444 60%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

  return (
    <section id="paid-courses" className="w-full bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <PulseHeading className="font-display text-4xl md:text-5xl font-bold mb-6">
            Professional Certification Courses
          </PulseHeading>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Invest in your future with our industry-recognized certification programs
          </p>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6 bg-white rounded-xl shadow-lg animate__animated animate__fadeInTopRight">
            <RotatingIcon><Trophy className="mx-auto text-primary mb-4" size={32} /></RotatingIcon>
            <h3 className="font-semibold mb-2">Industry Certification</h3>
            <p className="text-sm text-muted-foreground">
              Get recognized certifications
            </p>
          </Card>
          <Card className="text-center p-6 bg-white rounded-xl shadow-lg animate__animated animate__fadeInBottomLeft">
            <RotatingIcon><Users className="mx-auto text-primary mb-4" size={32} /></RotatingIcon>
            <h3 className="font-semibold mb-2">Personal Mentorship</h3>
            <p className="text-sm text-muted-foreground">One-on-one guidance</p>
          </Card>
          <Card className="text-center p-6 bg-white rounded-xl shadow-lg animate__animated animate__fadeInTopRight">
            <RotatingIcon><BookOpen className="mx-auto text-primary mb-4" size={32} /></RotatingIcon>
            <h3 className="font-semibold mb-2">Practical Projects</h3>
            <p className="text-sm text-muted-foreground">
              Real-world experience
            </p>
          </Card>
          <Card className="text-center p-6 bg-white rounded-xl shadow-lg animate__animated animate__fadeInBottomLeft">
            <RotatingIcon><Calendar className="mx-auto text-primary mb-4" size={32} /></RotatingIcon>
            <h3 className="font-semibold mb-2">Job Placement</h3>
            <p className="text-sm text-muted-foreground">
              Career support included
            </p>
          </Card>
        </div>

        {/* Course Cards */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card
                key={index}
                className={`group transition-all duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-2xl hover:border-primary/40 flex flex-col ${
                  course.popular
                    ? "border-2 border-primary shadow-primary/30"
                    : "border border-muted"
                } animate__animated animate__fadeInUp animate__zoomIn animate__slow animate__delay-${index + 1}s`}
                style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="relative">
                {course.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-accent text-white shadow-md">
                    Most Popular
                  </Badge>
                )}
                <div className="flex items-start justify-between mb-2">
                  <Badge className={getCategoryColor(course.category)}>
                    {course.category}
                  </Badge>
                  <div className="text-right text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Star
                        size={14}
                        className="text-yellow-500 fill-current"
                      />
                      {course.rating}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors mb-2">
                  {course.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm mb-4">
                  {course.description}
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-primary">
                    {course.price}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    {course.originalPrice}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    {course.students}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex flex-col flex-grow">
                <div className="space-y-4 flex-grow">
                  <div className="bg-muted p-2 rounded text-center text-sm font-medium">
                    Level: {course.level}
                  </div>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle
                          size={16}
                          className="text-accent mt-0.5 flex-shrink-0"
                        />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                  <Button
                    className="bg-blue-800 text-white font-bold px-6 py-3 rounded-lg mt-4 hover:bg-red-600 hover:scale-105 transition-all duration-300"
                    onClick={() => navigate("/contact")}
                  >
                    Enroll Now
                  </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaidCourses;