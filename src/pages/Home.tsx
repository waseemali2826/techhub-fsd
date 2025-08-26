import React from 'react';
import Hero from '@/components/Hero';
import FreeCourses from '@/components/FreeCourses';
import PaidCourses from '@/components/PaidCourses';
import Partners from '@/components/Partners';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <FreeCourses />
      <PaidCourses />
      <Partners />
      <Reviews />
      <FAQ />
    </div>
  );
};

export default Home;
