"use client";

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import "animate.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Number',
      details: ['+92 300-6622815'],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@techhubfsd.com'],
      action: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Our Location',
      details: [
        "357/A Choti, D Ground Block A People's Colony No 1, Faisalabad, Punjab 37000"
      ],
      action: 'View on Google Maps',
      link: 'https://www.google.com/maps?q=357/A+Choti,+D+Ground+Block+A+People\'s+Colony+No+1,+Faisalabad,+Punjab+37000'
    }
  ];

  const courses = [
    'Cyber Security & AWS',
    'Full Stack Development',
    'Digital Marketing',
    'Graphic Design',
    'Data Science',
    'React Native Development',
    'Cloud Computing',
    'Other'
  ];

  return (
    <section className="w-full bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            className="font-display text-4xl md:text-5xl font-bold mb-6 rounded-lg px-3 py-2 bg-gradient-to-r from-primary via-primary/70 to-primary-foreground text-transparent bg-clip-text drop-shadow-lg"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.15, 0.95, 1.12, 0.98, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: 'loop' }}
          >
            Contact Us
          </motion.h2>
          <p className="text-xl text-black max-w-3xl mx-auto animate__animated animate__fadeInBottomRight">
            Ready to start your tech journey? Get in touch with us for course information, 
            enrollment details, or any questions about our training programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form Card */}
          <Card className="hover-lift hover:shadow-xl transition-all duration-300 animate__animated animate__flip">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-black">
                <MessageCircle className="text-primary group-hover:rotate-12 transition-transform duration-300" />
                Send us a Message
              </CardTitle>
              <p className="text-black">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black">Full Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="transition-all duration-300 focus:shadow-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black">Email Address *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="transition-all duration-300 focus:shadow-md"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black">Phone Number</label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+92 300 1234567"
                      className="transition-all duration-300 focus:shadow-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black">Course Interest</label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a course</option>
                      {courses.map(course => (
                        <option key={course} value={course}>{course}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-black">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your background, goals, and any specific questions..."
                    required
                    rows={4}
                    className="transition-all duration-300 focus:shadow-md"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-primary transition-all duration-300 group"
                >
                  <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                  Send Message
                </Button>

                <p className="text-sm text-black text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className={`group hover-lift hover:shadow-xl transition-all duration-300 animate__animated animate__slow animate__delay-${index }s ${
                  index === 0 ? 'animate__fadeInRightBig' :
                  index === 1 ? 'animate__fadeInTopRight' :
                  index === 2 ? 'animate__rotateIn' : ''
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-primary p-3 rounded-lg group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                      <info.icon className="text-primary-foreground" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors text-black">
                        {info.title}
                      </h3>
                      <div className="space-y-1 text-black">
                        {info.details.map((detail, idx) => (
                          <p key={idx}>{detail}</p>
                        ))}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        {info.action}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
