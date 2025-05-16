
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SpeakersSection from '@/components/SpeakersSection';
import HighlightsSection from '@/components/HighlightsSection';
import CompetitionSection from '@/components/CompetitionSection';
import RegistrationSection from '@/components/RegistrationSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

const Index = () => {
  // Initialize animation observer
  useRevealOnScroll();

  // Update document title
  useEffect(() => {
    document.title = 'Environmental Day Conference 2025 | Empowering Youth for Water Leadership';
  }, []);

  return (
    <div className="antialiased min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SpeakersSection />
      <HighlightsSection />
      <CompetitionSection />
      <RegistrationSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
