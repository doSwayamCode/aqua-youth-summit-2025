
import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SpeakersSection = () => {
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

  const speakers = [
    {
      name: "Prof. K. K. Pant",
      role: "Chief Guest",
      position: "Director",
      organization: "IIT Roorkee",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Dr. Pankaj Kumar Gupta",
      role: "Keynote Speaker",
      position: "Centre for Rural Development and Technology (CRDT)",
      organization: "IIT Delhi",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <section id="speakers" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 reveal-animation">
            Distinguished Guests
          </h2>
          <div className="w-20 h-1 bg-water mx-auto mb-8 reveal-animation"></div>
          <p className="text-gray-600 reveal-animation">
            Learn from industry experts and thought leaders in the field of environmental 
            conservation and water management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {speakers.map((speaker, index) => (
            <Card 
              key={index} 
              className="reveal-animation card-hover overflow-hidden"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-48 md:h-auto">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="md:w-2/3 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-xl mb-1">{speaker.name}</h3>
                    <p className="text-water font-medium mb-1">{speaker.role}</p>
                    <p className="text-gray-600 text-sm">{speaker.position}</p>
                    <p className="text-gray-800 font-medium">{speaker.organization}</p>
                  </div>
                  
                  <div className="mt-4">
                    <div className="inline-block bg-blue-100 text-water-dark text-xs px-3 py-1 rounded-full font-medium">
                      Featured Speaker
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
