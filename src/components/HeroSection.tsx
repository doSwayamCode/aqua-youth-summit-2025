
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Droplet } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create animated water droplets effect
    const createDroplet = () => {
      if (!heroRef.current) return;
      
      const droplet = document.createElement('div');
      droplet.classList.add('water-drop');
      
      // Random position and size
      const size = Math.random() * 50 + 20;
      droplet.style.width = `${size}px`;
      droplet.style.height = `${size}px`;
      droplet.style.left = `${Math.random() * 100}%`;
      droplet.style.top = `${Math.random() * 100}%`;
      droplet.style.animationDuration = `${Math.random() * 8 + 6}s`;
      
      heroRef.current.appendChild(droplet);
      
      // Remove droplet after animation
      setTimeout(() => {
        droplet.remove();
      }, 8000);
    };
    
    // Create droplets at intervals
    const interval = setInterval(createDroplet, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="water-bg min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      id="hero"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-4xl mx-auto animate-fade-in">
            Environmental Day Conference 
            <span className="block mt-2 text-nature-light">2025</span>
          </h1>
          
          <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-light text-white opacity-90 max-w-2xl mx-auto animate-fade-in">
            Empowering Youth for Water Leadership
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-8 text-white opacity-90">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-nature-light" />
              <span>5th June 2025</span>
            </div>
            <span className="hidden sm:block">•</span>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-nature-light" />
              <span>R & D Park, IIT Delhi</span>
            </div>
          </div>
          
          <p className="mt-6 text-white/80 max-w-2xl mx-auto">
            Join us for a full day of thought-provoking discussions, expert talks, and dynamic interactive sessions 
            focused on actionable strategies for sustainable water management.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              size="lg" 
              className="bg-nature hover:bg-nature-dark text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <a href="#register">
                Register Now
                <Droplet className="ml-2 h-5 w-5 animate-float group-hover:text-blue-200 transition-colors" />
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="bg-transparent border-2 border-white/50 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              <a href="#about">Learn More</a>
            </Button>
          </div>
          
          <div className="mt-12 flex items-center gap-4">
            <span className="text-xs uppercase tracking-wider text-white/60">Organized by</span>
            <div className="flex items-center gap-2 text-white">
              <span className="font-semibold">Dharti International Foundation</span>
              <span>&</span>
              <span className="font-semibold">RCE Pvt. Ltd.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="water-wave"></div>
    </section>
  );
};

export default HeroSection;
