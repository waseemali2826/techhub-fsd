"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import { Code, Users, Award, Briefcase, Monitor, Smartphone } from "lucide-react";
import "animate.css";

const Services = () => {
  // Variants for animation reuse
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const services = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Web Development Training",
      description: "Comprehensive courses in HTML, CSS, JavaScript, React, and backend technologies. Build real-world projects with industry-standard practices.",
      features: ["Frontend Development", "Backend Development", "Full-Stack Projects", "Modern Frameworks"]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Mobile App Development", 
      description: "Learn to build native and cross-platform mobile applications using React Native, Flutter, and native development tools.",
      features: ["React Native", "Flutter", "iOS Development", "Android Development"]
    },
    {
      icon: <Monitor className="h-8 w-8 text-primary" />,
      title: "UI/UX Design",
      description: "Master the art of user interface and user experience design with modern tools and methodologies.",
      features: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"]
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Certification Programs",
      description: "Industry-recognized certifications that validate your skills and enhance your career prospects.",
      features: ["Professional Certificates", "Skill Validation", "Industry Recognition", "Career Advancement"]
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Corporate Training",
      description: "Customized training solutions for organizations looking to upskill their teams in latest technologies.",
      features: ["Team Training", "Custom Curriculum", "On-site Training", "Flexible Scheduling"]
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Career Placement",
      description: "Dedicated career support including job placement assistance, interview preparation, and industry connections.",
      features: ["Job Placement", "Interview Prep", "Resume Building", "Industry Networking"]
    }
  ];

  return (
    <section className="w-full bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <motion.h1
            animate={{
              scale: [1, 1.1, 1],
              opacity: [1, 0.95, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            <motion.span
              animate={{
                scale: [1, 1.15, 1],
                opacity: [1, 0.75, 1],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block animate__animated animate__fadeInTopLeft bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent"
            >
              Our Services
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl text-black max-w-3xl mx-auto animate__animated animate__fadeInTopRight animate__slower"
          >
            Comprehensive IT training and development services designed to{" "}
            <strong className="animate__animated animate__fadeInTopLeft animate__slow">
              transform your career
            </strong>{" "}
            and drive technological innovation.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleUp}
              transition={{ delay: index * 0.2 }}
              className="border-2 border-primary/40 rounded-xl shadow-lg animate__animated animate__fadeInUp animate__slow"
            >
              <Card className="hover:scale-105 transition-transform duration-500 hover:shadow-2xl h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {service.icon}
                    <CardTitle className="text-xl font-bold animate__animated animate__fadeInTopLeft animate__slow">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-black leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-black">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >
          <motion.h2
            animate={{
              scale: [1, 1.1, 1],
              opacity: [1, 0.85, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-3xl font-bold mb-6"
          >
            <motion.span
              animate={{
                scale: [1, 1.15, 1],
                opacity: [1, 0.75, 1],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block animate__animated animate__fadeInTopRight animate__slower bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent"
            >
              Ready to Start Your Tech Journey?
            </motion.span>
          </motion.h2>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with our expert training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-primary transition-all duration-300"
            >
              Get Started Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
