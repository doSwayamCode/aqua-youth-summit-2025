
import React, { useEffect, useRef } from 'react';
import { Earth, Droplet, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe all elements with reveal animation
    document.querySelectorAll('.reveal-animation').forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const features = [
    {
      icon: <Earth className="h-10 w-10 text-water" />,
      title: "Water Conservation",
      description: "Learn about innovative approaches to preserve our most precious resource through conservation and smart management."
    },
    {
      icon: <Droplet className="h-10 w-10 text-water" />,
      title: "Sustainable Future",
      description: "Discover how your actions today can ensure water security and sustainability for generations to come."
    },
    {
      icon: <Users className="h-10 w-10 text-water" />,
      title: "Youth Leadership",
      description: "Develop leadership skills and connect with like-minded individuals passionate about environmental stewardship."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="section-padding bg-white"
    >
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 reveal-animation">
            About the Conference
          </h2>
          <div className="w-20 h-1 bg-water mx-auto mb-8 reveal-animation"></div>
          <p className="text-gray-600 leading-relaxed reveal-animation">
            Water is one of the most critical resources for sustaining life, and the youth of today must 
            become the custodians of our water future. In celebration of World Environment Day, this 
            conference aims to raise awareness, build capacity, and promote leadership among students and 
            young professionals in the field of water conservation, innovation, and policy development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              ref={(el) => elementsRef.current[index] = el}
              className={cn(
                "bg-white rounded-xl p-8 shadow-lg border border-gray-100 card-hover reveal-animation",
                `transition-all duration-700 delay-[${index * 200}ms]`
              )}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-blue-50 p-4 rounded-full inline-block mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-water/10 to-nature/10 rounded-2xl p-8 reveal-animation">
          <h3 className="text-2xl font-bold mb-4 text-center">Who Should Attend?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {[
              "University and college students",
              "Young researchers",
              "Environmental enthusiasts",
              "Aspiring water leaders"
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white/50 backdrop-blur-sm rounded-lg p-6 text-center shadow-sm border border-gray-100 hover:bg-white/90 transition-all"
              >
                <p className="font-medium text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
