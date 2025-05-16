
import React, { useEffect } from 'react';
import { FileText, CalendarCheck, Users, MessageSquare } from 'lucide-react';

const HighlightsSection = () => {
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
    
    document.querySelectorAll('.reveal-animation').forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const highlights = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Keynote Addresses",
      description: "Hear from leading experts in water conservation and environmental sustainability."
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Interactive Sessions",
      description: "Engage in discussions on water policy, innovation & youth-led initiatives."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Networking",
      description: "Connect with researchers, educators, and environmental leaders."
    },
    {
      icon: <CalendarCheck className="h-8 w-8" />,
      title: "Certification",
      description: "Receive participation certificates acknowledging your contribution."
    }
  ];

  return (
    <section id="highlights" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 reveal-animation">
            Conference Highlights
          </h2>
          <div className="w-20 h-1 bg-water mx-auto mb-8 reveal-animation"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="reveal-animation flex flex-col items-center text-center p-6 rounded-lg bg-gradient-to-b from-white to-blue-50 shadow-md hover:shadow-lg transition-all"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-water text-white p-4 rounded-full mb-4 animate-float">
                {item.icon}
              </div>
              <h3 className="font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 reveal-animation">
          <div className="bg-gradient-to-r from-purple/20 to-water/20 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple/10 rounded-full -mt-20 -mr-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-water/10 rounded-full -mb-10 -ml-10"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-center">Event Schedule</h3>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                  {[
                    { time: "1:30 PM", title: "Registration & Welcome" },
                    { time: "2:00 PM", title: "Keynote Speeches" },
                    { time: "4:30 PM", title: "Interactive Sessions" },
                    { time: "5.30 PM", title: "Competition & Awards" }
                  ].map((item, index) => (
                    <div key={index} className="p-6 text-center">
                      <p className="font-mono text-water-dark font-bold">{item.time}</p>
                      <p className="font-medium mt-2">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-center text-gray-600 mt-6">
                * Detailed schedule will be provided to registered participants
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
