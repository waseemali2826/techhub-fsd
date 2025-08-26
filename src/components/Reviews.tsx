import React from "react";
import {
  Star,
  Quote,
  ThumbsUp,
  TrendingUp,
  MapPin,
  Calendar,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion, Variants } from "framer-motion";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Waseem Ali",
      course: "Full Stack Development",
      rating: 5,
      review:
        "Tech Hub completely transformed my career. The instructors are highly skilled and the practical approach to learning is exceptional. I landed a job at a leading tech company within 2 months of graduation.",
      position: "Software Developer at Systems Ltd",
      batch: "Batch 2023",
      location: "Faisalabad",
    },
    {
      id: 2,
      name: "Fatima Khan",
      course: "Digital Marketing",
      rating: 5,
      review:
        "The digital marketing course exceeded my expectations. The curriculum is up-to-date with industry trends and the mentorship provided was invaluable. I started my own digital agency after completing the course.",
      position: "Founder, Digital Boost Agency",
      batch: "Batch 2023",
      location: "Lahore",
    },
    {
      id: 3,
      name: "Muhammad Hassan",
      course: "Cybersecurity",
      rating: 5,
      review:
        "Outstanding training program! The hands-on labs and real-world scenarios prepared me well for the industry. The job placement support was excellent and I got multiple job offers.",
      position: "Cybersecurity Analyst at Bank Al Habib",
      batch: "Batch 2024",
      location: "Karachi",
    },
    {
      id: 4,
      name: "Aisha Malik",
      course: "Graphic Design",
      rating: 5,
      review:
        "The graphic design course at Tech Hub is comprehensive and practical. Instructors are industry experts who share real insights. The portfolio I built during the course helped me secure freelance projects immediately.",
      position: "Freelance Graphic Designer",
      batch: "Batch 2023",
      location: "Islamabad",
    },
    {
      id: 5,
      name: "Bilal Ahmad",
      course: "Data Science",
      rating: 5,
      review:
        "Excellent data science program with focus on practical applications. The machine learning projects were challenging and rewarding. Faculty support throughout the journey was remarkable.",
      position: "Data Scientist at Telenor",
      batch: "Batch 2024",
      location: "Faisalabad",
    },
    {
      id: 6,
      name: "Zara Sheikh",
      course: "React Native Development",
      rating: 5,
      review:
        "Best mobile app development course I could find in Pakistan. The project-based learning approach and industry mentorship made all the difference. Highly recommend Tech Hub to everyone.",
      position: "Mobile App Developer at Zameen.com",
      batch: "Batch 2024",
      location: "Lahore",
    },
  ];

  const stats = [
    {
      icon: TrendingUp,
      value: "95%",
      label: "Job Placement Rate",
      color: "text-green-600",
    },
    {
      icon: ThumbsUp,
      value: "4.9/5",
      label: "Student Satisfaction",
      color: "text-blue-600",
    },
    {
      icon: Star,
      value: "100%",
      label: "Course Completion",
      color: "text-yellow-600",
    },
  ];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getCourseColor = (course: string) => {
    const colorMap: { [key: string]: string } = {
      "Full Stack Development": "bg-blue-100 text-blue-800",
      "Digital Marketing": "bg-orange-100 text-orange-800",
      Cybersecurity: "bg-red-100 text-red-800",
      "Graphic Design": "bg-purple-100 text-purple-800",
      "Data Science": "bg-green-100 text-green-800",
      "React Native Development": "bg-indigo-100 text-indigo-800",
    };
    return colorMap[course] || "bg-gray-100 text-gray-800";
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  // Animation variants (typed with Variants)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1] },
    },
  };

  return (
      <section
        className="pt-2 pb-12 bg-background"
        aria-labelledby="reviews-heading"
        role="region"
      >
        <div className="px-4 sm:px-6 lg:px-8">
        {/* Heading with animation */}
        <motion.header
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 id="reviews-heading" className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Students Say
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our successful graduates who transformed their careers
            with Tech Hub&apos;s comprehensive training programs and landed
            their dream jobs in the tech industry.
          </p>
        </motion.header>

        {/* Stats with animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={cardVariants}>
                <Card className="group relative p-6 text-center hover-lift hover:shadow-primary/10 overflow-hidden">
                  {/* Cover overlay animation */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/70 to-primary/30 transition-all duration-700 opacity-100 group-hover:opacity-0 z-20 pointer-events-none"></div>
                  <div className="relative z-30">
                    <div className="flex justify-center mb-4">
                      <span className="inline-block transition-transform duration-700 group-hover:rotate-[360deg]">
                        <stat.icon
                          className={`${stat.color}`}
                          size={40}
                        />
                      </span>
                    </div>
                    <div className="font-display text-3xl font-bold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground inline-block transition-transform duration-700 group-hover:rotate-[360deg]">{stat.label}</div>
                  </div>
                </Card>
            </motion.div>
          ))}
  </motion.div>

        {/* Reviews with stagger animation */}
        <motion.main
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reviews.map((review) => (
            <motion.article key={review.id} variants={cardVariants} aria-label={`Review by ${review.name}`}> 
              <Card className="group transition-all duration-300 shadow-2xl border-2 border-gray-400 rounded-2xl bg-gradient-to-br from-white via-background to-primary/5 animate__animated animate__fadeInUp hover-lift hover:shadow-xl" style={{ minWidth: '240px', maxWidth: '420px', width: '100%' }}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/70 to-primary/30 transition-all duration-700 opacity-100 group-hover:opacity-0 z-20 pointer-events-none"></div>
                <CardContent className="p-6 text-black relative z-30">
                  <Quote className="text-primary/20 mb-4" size={32} aria-hidden="true" />

                  <div className="flex items-center gap-1 mb-4" aria-label={`Rating: ${review.rating} out of 5`}>
                    {renderStars(review.rating)}
                    <span className="text-sm text-muted-foreground ml-2">
                      <span className="text-black ml-2">({review.rating}/5)</span>
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    <span className="text-black mb-6 leading-relaxed">"{review.review}"</span>
                  </p>

                  <div className="border-t pt-4">
                    <div className="flex items-center gap-4 mb-3">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                          {getInitials(review.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">
                          <span className="text-black font-semibold">{review.name}</span>
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          <span className="text-black text-sm">{review.position}</span>
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Badge className={getCourseColor(review.course)}>
                        {review.course}
                      </Badge>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1 text-black">
                          <Calendar size={12} aria-label="Batch" />
                          {review.batch}
                        </div>
                        <div className="flex items-center gap-1 text-black">
                          <MapPin size={12} aria-label="Location" />
                          {review.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
  </motion.main>

        {/* Call to Action */}
        <motion.footer
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Card className="p-8 bg-gradient-primary text-primary-foreground text-center">
            <div className="max-w-3xl mx-auto">
              {/* Animated Heading */}
              <motion.h2
                className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Join Our <span className="text-yellow-300">Success Stories</span>
              </motion.h2>

              {/* Animated Paragraph */}
              <motion.p
                className="text-base md:text-lg mb-6 opacity-90 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                Be the <motion.span
                  className="text-yellow-200 font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0.7, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  next success story!
                </motion.span>{" "}
                Transform your career with our industry-leading courses and join
                thousands of satisfied students who achieved their dreams at Tech Hub.
              </motion.p>

              {/* Stats with staggered animation */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.2 }}
                viewport={{ once: true }}
              >
                {[
                  { value: "5000+", label: "Happy Students" },
                  { value: "4.9★", label: "Average Rating" },
                  { value: "95%", label: "Job Placement" },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="group bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm opacity-80 inline-block transition-transform duration-700 group-hover:rotate-[360deg]">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </Card>
        </motion.footer>

      </div>
    </section>
  );
};

export default Reviews;
