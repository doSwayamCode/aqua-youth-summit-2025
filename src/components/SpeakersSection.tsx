import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import nishantSir from '@/assets/speakers/nishant.jpg';
import ansh from '@/assets/speakers/ansh.jpg';
import prashant from '@/assets/speakers/prashant.jpg';
import swayam from '@/assets/speakers/swayam.jpg';
import { Phone, Mail } from 'lucide-react';

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
      name: "Nishant Bhardwaj",
      role: "Organizer",
      position: "Director, Dharti International Foundation",
      organization: "Director, Dharti International Foundation",
      description: "At the 2025 Environmental Day Conference themed 'Empowering Youth for Water Leadership,' young leaders are celebrated for their vital role in water conservation.",
      image: nishantSir,
      phone: "+91 98765 43210",
      email: "director@dhartiinternational.org",
      facePosition: "custom",
      imageStyle: { objectPosition: "73% center" }
    },
    {
      name: "Prashant Kumar",
      role: "Organizer",
      position: "Co-founder Dharti International Foundation",
      organization: "Co-founder, Dharti International Foundation",
      description: "With a strong foundation in finance and rural development experience, Prashant bridges corporate strategy with grassroots impact.",
      image: prashant,
      phone: "+91 62074 44084",
      email: "prashantkumarprashant07@gmail.com",
      facePosition: "center",
    },
    {
      name: "Ansh Raj",
      role: "Organizer",
      position: "Director, Dharti International Foundation",
      organization: "Conference Coordinator",
      description: "His exceptional organizational skills, passion for sustainability, and commitment to youth engagement have been instrumental in bringing this event to life.",
      image: ansh,
      phone: "+91 91996 60345",
      email: "outreach.dif@gmail.com",
      facePosition: "center",
    },
     {
      name: "Swayam Gupta",
      role: "Organizer",
      position: "IT Management",
      organization: "Technical Coordinator",
      description: "It’s also important to highlight the technical brilliance that Swayam brings to the 2025 Environmental Day Conference. As Conference Coordinator, Swayam integrated technology seamlessly to enhance participation, accessibility, and impact. From managing virtual collaboration platforms to designing data-driven tools that track youth-led water initiatives, his tech-savvy approach has modernized how such events are run. Swayam believes that digital innovation is key to accelerating environmental action, and his efforts have empowered young leaders to leverage technology for real-world water conservation solutions. His blend of technical skill and environmental passion makes him an outstanding example of today’s youth driving change through innovation.",
      image: swayam,
      phone: "+91 84470 86603",
      email: "swayamgupta999@proton.me",
      facePosition: "center",
    }
    
  ];

  return (
    <section id="speakers" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 reveal-animation">
            Organizers
          </h2>
          <div className="w-20 h-1 bg-water mx-auto mb-8 reveal-animation"></div>
          <p className="text-gray-600 reveal-animation">
            Learn from industry experts and thought leaders in the field of environmental 
            conservation and water management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {speakers.map((speaker, index) => (
            <Card 
              key={index} 
              className="reveal-animation card-hover overflow-hidden"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 h-56 md:h-auto relative overflow-hidden">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className={`w-full h-full object-cover absolute inset-0 ${
                      speaker.facePosition === "top" ? "object-top" : 
                      speaker.facePosition === "bottom" ? "object-bottom" : 
                      speaker.facePosition === "custom" ? "" : "object-center"
                    }`}
                    style={speaker.imageStyle || {}}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://via.placeholder.com/150?text=Speaker";
                    }}
                  />
                </div>
                <CardContent className="md:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-xl mb-1">{speaker.name}</h3>
                    <p className="text-gray-800 font-medium mb-3">{speaker.organization}</p>
                    
                    {/* Contact information */}
                    <div className="flex flex-col space-y-1 mb-4">
                      {speaker.phone && (
                        <a 
                          href={`tel:${speaker.phone.replace(/\s+/g, '')}`}
                          className="flex items-center text-xs text-gray-600 hover:text-water transition-colors"
                        >
                          <Phone size={14} className="mr-2" /> {speaker.phone}
                        </a>
                      )}
                      {speaker.email && (
                        <a 
                          href={`mailto:${speaker.email}`}
                          className="flex items-center text-xs text-gray-600 hover:text-water transition-colors"
                        >
                          <Mail size={14} className="mr-2" /> {speaker.email}
                        </a>
                      )}
                    </div>
                    
                    {speaker.description && (
                      <div className="mt-2">
                        <p className="text-gray-600 text-sm italic line-clamp-3">
                          "{speaker.description}"
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-4">
                    <div className="inline-block bg-blue-100 text-water-dark text-xs px-3 py-1 rounded-full font-medium">
                      Oganizer
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
