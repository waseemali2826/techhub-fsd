"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import "animate.css";

const About = () => {
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
          {/* About Us with heartbeat + gradient */}
          <motion.h1
            animate={{
              scale: [1, 1.1, 1], // heartbeat
              opacity: [5, 0.95, 5], // pulse glow
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
                scale: [1, 1.15, 1], // stronger heartbeat inside span
                opacity: [1, 0.75, 1], // pulse with fade
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block animate__animated animate__fadeInTopLeft bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent"
            >
              About Us
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl text-black max-w-3xl mx-auto animate__animated animate__fadeInTopRight animate__slower"
          >
            Tech Hub Faisalabad is the premier{" "}
            <strong className="animate__animated animate__fadeInTopLeft animate__slow">
              IT learning institute
            </strong>{" "}
            in the region, dedicated to providing{" "}
            <strong className="animate__animated animate__fadeInTopLeft animate__slow">
              top-quality technology education
            </strong>
            .
          </motion.p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              title: "Our Mission",
              text: "To empower individuals with cutting-edge technical skills and practical knowledge that transforms them into industry-ready professionals, while fostering innovation and excellence in technology education.",
            },
            {
              title: "Our Vision",
              text: "To be the leading technology education hub that bridges the gap between academic learning and industry requirements, producing highly skilled professionals who drive technological advancement in Pakistan and beyond.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleUp}
              transition={{ delay: index * 0.3 }}
              className="border-2 border-primary/40 rounded-xl shadow-lg animate__animated animate__fadeInUp animate__slow"
            >
              <Card className="hover:scale-105 transition-transform duration-500 hover:shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold animate__animated animate__fadeInTopLeft animate__slow">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Tech Hub */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16"
        >
          <motion.h2
            animate={{
              scale: [1, 1.15, 1], // heartbeat
              opacity: [1, 0.85, 1], // pulse
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-center text-3xl font-bold mb-8"
          >
            <motion.span
              animate={{
                scale: [1, 1.2, 1], // stronger heartbeat
                opacity: [3, 0.75, 5], // glowing pulse
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block animate__animated animate__fadeInTopRight animate__slower bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent"
            >
              Why Choose Tech Hub?
            </motion.span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Instructors",
                description:
                  "Learn from industry professionals with years of hands-on experience.",
              },
              {
                title: "Practical Learning",
                description:
                  "Focus on real-world projects and hands-on training.",
              },
              {
                title: "Job Placement",
                description:
                  "Dedicated support to help you land your dream tech job.",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.6 }}
                className="border-2 border-primary/40 rounded-xl shadow-lg animate__animated animate__fadeInUp animate__slow"
              >
                <Card className="hover:scale-105 transition-transform duration-500 hover:shadow-14xl">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold animate__animated animate__fadeInTopLeft animate__slow">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
