
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Droplet } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 shadow-md backdrop-blur-sm py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Droplet 
            className={cn(
              "h-8 w-8 transition-colors duration-300",
              isScrolled ? "text-water" : "text-white"
            )} 
          />
          <span 
            className={cn(
              "font-bold text-xl sm:text-2xl transition-colors duration-300",
              isScrolled ? "text-water-dark" : "text-white"
            )}
          >
            EnviroConf 2025
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {['About', 'Speakers', 'Highlights', 'Competition', 'Register'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                'font-medium hover:text-water-light transition-colors',
                isScrolled ? 'text-gray-700' : 'text-white'
              )}
            >
              {item}
            </a>
          ))}
          <Button className="bg-purple hover:bg-purple-dark text-white">
            Register Now
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className={cn(
            "w-6 h-0.5 mb-1.5 transition-all",
            isScrolled ? "bg-gray-800" : "bg-white",
            mobileMenuOpen && "transform rotate-45 translate-y-2"
          )}></div>
          <div className={cn(
            "w-6 h-0.5 mb-1.5 transition-all",
            isScrolled ? "bg-gray-800" : "bg-white",
            mobileMenuOpen && "opacity-0"
          )}></div>
          <div className={cn(
            "w-6 h-0.5 transition-all",
            isScrolled ? "bg-gray-800" : "bg-white",
            mobileMenuOpen && "transform -rotate-45 -translate-y-2"
          )}></div>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 top-16 bg-white z-40 transition-all duration-300 transform",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
          {['About', 'Speakers', 'Highlights', 'Competition', 'Register'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-800 font-medium text-lg py-2 border-b border-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button className="bg-purple hover:bg-purple-dark text-white mt-4">
            Register Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
