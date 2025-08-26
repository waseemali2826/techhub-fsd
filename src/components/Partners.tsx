import React, { useEffect, useRef, createRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Use public folder image paths as strings
import { Award, Users, Trophy, Building, Handshake } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Partners = () => {
  const cardRefs = [createRef<HTMLDivElement>(), createRef<HTMLDivElement>(), createRef<HTMLDivElement>(), createRef<HTMLDivElement>()];

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.forEach((ref, idx) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const animationNames = [
          'animate__fadeInLeft',
          'animate__fadeInRight',
          'animate__fadeInUp',
          'animate__fadeInDown'
        ];
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          ref.current.classList.add('animate__animated', animationNames[idx], 'animate__faster');
        } else {
          ref.current.classList.remove('animate__animated', animationNames[idx], 'animate__faster');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [cardRefs]);

  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!paragraphRef.current) return;
      const rect = paragraphRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        paragraphRef.current.classList.add('animate__animated', 'animate__fadeInUpBig', 'animate__faster');
      } else {
        paragraphRef.current.classList.remove('animate__fadeInUpBig');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const achievements = [
    { 
      icon: Users,
      title: 'Students Trained',
      value: '5000+',
      description: 'Successful graduates across all programs'
    },
    {
      icon: Award,
      title: 'Certifications Issued',
      value: '3500+',
      description: 'International standard certifications'
    },
    {
      icon: Building,
      title: 'Industry Partners',
      value: '25+',
      description: 'Leading companies trust our training'
    },
    {
      icon: Trophy,
      title: 'Success Rate',
      value: '95%',
      description: 'Job placement and certification success'
    }
  ];

  const partnerLogos = [
    {
      name: 'NAVTTC',
      fullName: 'National Vocational & Technical Training Commission',
      logo: '/navtec-removebg-preview.webp',
      description: 'Official government training partner',
      type: 'Government'
    },
    {
      name: 'PSEB',
      fullName: 'Pakistan Software Export Board',
      logo: '/pseb-logo.webp',
      description: 'Setting and maintaining national standards for products and services',
      type: 'Standards & Quality'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 animate__animated animate__pulse animate__infinite">
            Training Programs & Partners
          </h2>
          <p
            ref={paragraphRef}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            We collaborate with government institutions and industry leaders to provide <br />
            world-class training programs that meet international standards.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              ref={cardRefs[index]}
              className="group text-center p-6 hover-lift hover:shadow-primary/10 animate-scale-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Cover overlay animation */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/70 to-primary/30 transition-all duration-700 opacity-100 group-hover:opacity-0 z-20 pointer-events-none"></div>
              <div className="relative z-30">
                <div className="flex justify-center items-center mb-4">
                  <span className="inline-block transition-transform duration-700 group-hover:rotate-[360deg]">
                    <div className="rounded-full bg-primary/10 p-4">
                      <achievement.icon className="text-primary" size={40} />
                    </div>
                  </span>
                </div>
                <div className="font-display text-3xl font-bold text-foreground mb-2">
                  {achievement.value}
                </div>
                <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Partners */}
        <div className="mb-16">
          <h3 className="font-display text-3xl font-bold text-center mb-12">Our Official Partners</h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {partnerLogos.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ x: index === 0 ? -150 : 150, opacity: 0, rotate: 0 }}
                  animate={{ x: 0, opacity: 1, rotate: 360 }}
                  exit={{ x: index === 0 ? 150 : -150, opacity: 0, rotate: 0 }}
                  transition={{ duration: 1 }}
                  style={{ width: '100%' }}
                >
                  <Card className="group partner-card-size p-8 text-center hover-lift hover:shadow-xl transition-all duration-300 border-2 border-primary/20 partner-card animate-spin-slow relative overflow-hidden" tabIndex={0}>
                    {/* Cover overlay animation */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/70 to-primary/30 transition-all duration-700 opacity-100 group-hover:opacity-0 z-20 pointer-events-none"></div>
                    <div className="relative z-30">
                      <div className="mb-6 flex justify-center items-center">
                        <span className="inline-block transition-transform duration-700 group-hover:rotate-[360deg]">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="w-[120px] h-[120px] object-contain mb-4"
                          />
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold mb-2">{partner.name}</h3>
                      <h4 className="text-sm text-muted-foreground mb-3 animate__animated animate__bounceInDown">{partner.fullName}</h4>
                      <p className="text-muted-foreground">{partner.description}</p>
                      <div className="mt-4 flex justify-center">
                        <Handshake className="text-primary" size={24} />
                      </div>
                    </div>
                  </Card>
                </motion.div>
            ))}
            <style>{`
              .animate-spin-slow {
                animation: spinTwice 3s linear 1;
              }
              @keyframes spinTwice {
                0% { transform: rotate(0deg); }
                50% { transform: rotate(360deg); }
                100% { transform: rotate(720deg); }
              }
              .partner-card-size {
                min-height: 400px;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
              }
            `}</style>
          </div>
          <script>{`
            document.querySelectorAll('.partner-card').forEach(card => {
              let lastY = null;
              card.addEventListener('mousemove', e => {
                if (lastY === null) lastY = e.clientY;
                const direction = e.clientY < lastY ? 'swap-up' : 'swap-down';
                card.classList.remove('swap-up', 'swap-down');
                card.classList.add(direction);
                lastY = e.clientY;
              });
              card.addEventListener('mouseleave', () => {
                card.classList.remove('swap-up', 'swap-down');
                lastY = null;
              });
              card.addEventListener('focus', () => {
                card.classList.add('swap-up');
              });
              card.addEventListener('blur', () => {
                card.classList.remove('swap-up', 'swap-down');
              });
            });
          `}</script>
        </div>
      </div>
    </section>
  );
};

export default Partners;
