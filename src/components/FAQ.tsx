import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, HelpCircle, CheckCircle, Clock, Users } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FAQ = () => {
  // Limit each category to 4 questions
  const faqsRaw = [
    {
      category: 'General',
      questions: [
        {
          question: 'What is Tech Hub Faisalabad?',
          answer:
            'Tech Hub Faisalabad is the largest IT learning institute in Faisalabad, empowering young minds with cutting-edge IT skills through expert-led courses. We are partnered with NAVTTC and offer both free and paid training programs.',
        },
        {
          question: 'Are your courses internationally recognized?',
          answer:
            'Yes, all our courses provide internationally recognized certifications. We follow industry standards and our partnerships with NAVTTC and other organizations ensure that your certificates are valued globally.',
        },
        {
          question: 'What are your class timings?',
          answer:
            'We offer flexible class timings to accommodate different schedules. Morning classes run from 9 AM to 12 PM, afternoon classes from 2 PM to 5 PM, and evening classes from 6 PM to 9 PM. Weekend batches are also available.',
        },
        // Add a placeholder if less than 4
        {
          question: 'How do I contact Tech Hub?',
          answer: 'You can contact us via our website, phone, or visit our campus during working hours.'
        },
      ],
    },
    {
      category: 'Technical',
      questions: [
        {
          question: 'Do I need to bring my own laptop?',
          answer:
            'No, we provide all necessary equipment including computers, software, and development tools. However, having your own laptop allows you to practice at home and is recommended for better learning outcomes.',
        },
        {
          question: 'What if I miss classes due to personal reasons?',
          answer:
            'We provide makeup classes and recorded sessions for students who miss classes. Our online learning platform allows you to catch up with missed content and assignments.',
        },
        {
          question: 'Do you provide online courses?',
          answer:
            'Currently, we focus on on-campus training for better hands-on experience. However, we provide online support materials, recorded lectures, and virtual mentoring sessions to supplement classroom learning.',
        },
        {
          question: 'Is technical support available?',
          answer: 'Yes, our team provides technical support for all enrolled students.'
        },
      ],
    },
    {
      category: 'Free Courses',
      questions: [
        {
          question: 'How can I enroll in free courses?',
          answer:
            "You can enroll in our free courses through the Prime Minister's Youth Skills Development Program. Simply visit our institute with your educational documents (minimum intermediate) and fill out the enrollment form. Admission is merit-based.",
        },
        {
          question: 'What is the eligibility criteria for free courses?',
          answer:
            'The minimum qualification required is intermediate (12 years of education). Age limit is typically 18-35 years. Pakistani nationality is required for government-funded programs.',
        },
        {
          question: 'Do free courses provide job placement support?',
          answer:
            'Yes, our free courses include comprehensive job placement support. We have partnerships with leading companies and provide interview preparation, resume building, and direct job referrals.',
        },
        {
          question: 'What certifications do I get from free courses?',
          answer:
            'Free course graduates receive NAVTTC-recognized certificates which are internationally accepted. You also get course completion certificates from Tech Hub and skill-based certifications from relevant platforms.',
        },
      ],
    },
    {
      category: 'Paid Courses',
      questions: [
        {
          question: 'What additional benefits do paid courses offer?',
          answer:
            'Paid courses offer personalized mentorship, smaller class sizes, advanced curriculum, lifetime access to course materials, priority job placement support, and access to exclusive industry networks and events.',
        },
        {
          question: 'Do you offer installment plans for paid courses?',
          answer:
            'Yes, we offer flexible payment plans. You can pay in 2-3 installments depending on the course duration. We also provide early bird discounts and special offers for students.',
        },
        {
          question: 'Can I switch from a free course to a paid course?',
          answer:
            'Yes, you can upgrade to paid courses at any time. We offer credit transfer for completed modules and special upgrade pricing for existing students.',
        },
        {
          question: 'Are paid courses available online?',
          answer: 'Currently, paid courses are offered on-campus only, but online support is available.'
        },
      ],
    },
  ];

  // Only keep first 4 questions for each category (defensive)
  const faqs = faqsRaw.map(cat => ({
    ...cat,
    questions: cat.questions.slice(0, 4)
  }));

  const quickStats = [
    { icon: Users, value: '5000+', label: 'Students Trained' },
    { icon: CheckCircle, value: '95%', label: 'Success Rate' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
  ];

  // Filter only the four main categories for the grid
  const gridCategories = faqs.filter(cat => [
    'General', 'Free Courses', 'Paid Courses', 'Technical'
  ].includes(cat.category));

  // Other categories (e.g., Career Support) shown below the grid
  const otherCategories = [];

  return (
    <section
      className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10 animate-extra-faq"
      aria-labelledby="faq-heading"
      role="region"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.h1
            id="faq-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 drop-shadow-lg"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            viewport={{ once: true }}
          >
            <span className="inline-block">Frequently Asked Questions</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Find answers to common questions about our courses, enrollment process, certifications, and career support services.
          </motion.p>
        </motion.header>

        <motion.main
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {gridCategories.map((cat, idx) => (
            <motion.article
              key={cat.category}
              className="h-full"
              aria-labelledby={`faq-category-${idx}`}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
            >
              <Card className="group overflow-hidden bg-gradient-to-br from-white via-background to-primary/10 shadow-2xl border-2 border-primary/20 rounded-2xl h-full flex flex-col transition-all duration-300 hover:scale-[1.03] hover:shadow-primary/30 relative">
                <div className="flex items-center gap-3 bg-gradient-primary text-primary-foreground p-6 rounded-t-2xl">
                  <span className="inline-block bg-white/20 rounded-full p-2" aria-hidden="true">
                    {idx === 0 && <HelpCircle className="text-yellow-400" size={28} />}
                    {idx === 1 && <CheckCircle className="text-green-400" size={28} />}
                    {idx === 2 && <Badge className="bg-blue-400 text-white px-2 py-1 text-xs">Paid</Badge>}
                    {idx === 3 && <Clock className="text-purple-400" size={28} />}
                  </span>
                  <h2 id={`faq-category-${idx}`} className="font-display text-xl md:text-2xl font-bold">{cat.category} Questions</h2>
                </div>
                <CardContent className="p-0">
                  <Accordion type="single" collapsible className="w-full" aria-label={cat.category + ' FAQ'}>
                    {cat.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${cat.category.toLowerCase()}-${index}`}
                        className="border-b border-border/50"
                      >
                        <motion.div
                          whileHover={{ scale: 1.04, rotate: [0, 2, -2, 0], transition: { duration: 0.4 } }}
                        >
                          <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 transition-colors text-left no-underline hover:no-underline font-semibold" aria-expanded="false">
                            <span className="font-semibold text-primary/80">{faq.question}</span>
                          </AccordionTrigger>
                        </motion.div>
                        <AccordionContent className="px-6 pb-4 text-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </motion.main>
      </div>
    </section>
  );
};
export default FAQ;