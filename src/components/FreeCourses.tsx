"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Clock,
  Users,
  CheckCircle,
  Award,
  Calendar,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FreeCourses = () => {
  const courses = [
    {
      title: "Cyber Security",
      duration: "3 Months",
      students: "150+",
      description: "Learn cybersecurity fundamentals.",
      features: ["Network Security", "Ethical Hacking", "Security Auditing", "Incident Response"],
      category: "Security",
    },
    {
      title: "Cloud Computing - AWS",
      duration: "3 Months",
      students: "200+",
      description: "Master cloud computing with Amazon Web Services platform.",
      features: ["EC2", "S3 Storage", "Lambda Functions", "CloudFormation"],
      category: "Cloud",
    },
    {
      title: "Advanced Web Application Development",
      duration: "4 Months",
      students: "300+",
      description: "Build modern web applications using latest technologies.",
      features: ["React.js", "Node.js", "MongoDB", "REST APIs"],
      category: "Development",
    },
    {
      title: "Full Stack Development",
      duration: "6 Months",
      students: "250+",
      description: "Complete full-stack web development from frontend to backend.",
      features: ["HTML/CSS/JS", "React", "Express.js", "Database Design"],
      category: "Development",
    },
    {
      title: "Graphic Designing (UI/UX Designer)",
      duration: "3 Months",
      students: "180+",
      description: "Create stunning user interfaces and user experiences.",
      features: ["Adobe Creative Suite", "Figma", "UI Design", "UX Research"],
      category: "Design",
    },
    {
      title: "Digital Forensic & Cyber Security",
      duration: "4 Months",
      students: "120+",
      description: "Investigate digital crimes and secure digital assets.",
      features: ["Digital Investigation", "Forensic Tools", "Evidence Analysis", "Legal Procedures"],
      category: "Security",
    },
    {
      title: "Advanced Python Programming & Applications",
      duration: "3 Months",
      students: "220+",
      description: "Master Python programming for various applications.",
      features: ["Python Basics", "Data Structures", "Web Scraping", "Automation"],
      category: "Programming",
    },
    {
      title: "JavaScript Full Stack (MEAN/MERN)",
      duration: "5 Months",
      students: "190+",
      description: "Build complete web applications using JavaScript stack.",
      features: ["MongoDB", "Express.js", "Angular/React", "Node.js"],
      category: "Development",
    },
    {
      title: "Google UX Design",
      duration: "4 Months",
      students: "140+",
      description: "Learn UX design principles following Google's methodology.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
      category: "Design",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Security":
        return "bg-red-100 text-red-700 border-red-300";
      case "Cloud":
        return "bg-blue-100 text-blue-700 border-blue-300";
      case "Development":
        return "bg-green-100 text-green-700 border-green-300";
      case "Design":
        return "bg-purple-100 text-purple-700 border-purple-300";
      case "Programming":
        return "bg-orange-100 text-orange-700 border-orange-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  // Feature item animation
  const featureContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const featureItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  // Card rotation animation
  const cardAnimation = {
    hidden: { opacity: 0, rotateY: 90, rotateX: 90, scale: 0.8 },
    visible: { opacity: 1, rotateY: 0, rotateX: 0, scale: 1, transition: { stiffness: 100, damping: 15 } },
  };

  const navigate = useNavigate();
  return (
    <section id="free-courses" className="w-full bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full px-4 md:px-6 lg:px-8 py-16">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Free Course Enrollment
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Join the <span className="font-semibold">Prime Minister's Youth Skills Development Program</span> and get internationally recognized certifications completely free of cost.
          </p>
        </div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Card className="max-w-5xl mx-auto mt-10 border-2 border-primary/10 bg-white shadow-lg rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="group flex flex-col items-center">
                  <span className="inline-block transition-transform duration-700 group-hover:rotate-[360deg]">
                    <Calendar className="text-primary mb-2" size={36} />
                  </span>
                  <h3 className="font-bold text-lg">Course Duration</h3>
                  <p className="text-gray-600">3-6 Months</p>
                </div>
                <div className="group flex flex-col items-center">
                  <span className="inline-block transition-transform duration-700 group-hover:rotate-[360deg]">
                    <Award className="text-primary mb-2" size={36} />
                  </span>
                  <h3 className="font-bold text-lg">Certification</h3>
                  <p className="text-gray-600">International</p>
                </div>
                <div className="group flex flex-col items-center">
                  <span className="inline-block transition-transform duration-700 group-hover:rotate-[360deg]">
                    <MapPin className="text-primary mb-2" size={36} />
                  </span>
                  <h3 className="font-bold text-lg">Class Type</h3>
                  <p className="text-gray-600">On Campus</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg text-center">
                <h4 className="font-semibold text-primary mb-1">Eligibility Criteria:</h4>
                <p className="text-gray-600">Minimum Qualification - Intermediate</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              id={course.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '').replace(/[^a-z0-9-]/g, '')}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardAnimation}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="group flex flex-col h-[28rem] border-2 border-blue-500 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <Badge className={`${getCategoryColor(course.category)} font-medium`}>
                      {course.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock size={14} />
                      {course.duration}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm mt-1">{course.description}</p>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col justify-between">
                  <motion.div
                    className="space-y-2 max-h-40 overflow-y-auto pr-1"
                    variants={featureContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {course.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-2"
                        variants={featureItem}
                      >
                        <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      {course.students} enrolled
                    </div>
                    <div className="font-semibold text-primary">Free</div>
                  </div>

                  <Button
                    className="bg-blue-800 text-white font-bold px-6 py-3 rounded-lg mt-4 hover:bg-red-600 hover:scale-105 transition-all duration-300"
                    onClick={() => navigate("/contact")}
                  >
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeCourses;
