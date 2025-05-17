import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Trophy, Clock, Users, Lightbulb, Award, Network } from 'lucide-react';

const CompetitionSection = () => {
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

  const prizes = [
    {
      place: "1st",
      award: "Cash Award + Certificate",
      color: "from-yellow-300 to-amber-500",
      icon: <Trophy className="h-12 w-12 text-yellow-600 group-hover:text-yellow-400 transition-colors duration-300" />
    },
    {
      place: "2nd",
      award: "Cash Award + Certificate",
      color: "from-gray-300 to-gray-400",
      icon: <Trophy className="h-10 w-10 text-gray-600 group-hover:text-gray-400 transition-colors duration-300" />
    },
    {
      place: "3rd",
      award: "Cash Award + Certificate",
      color: "from-amber-600 to-amber-800",
      icon: <Trophy className="h-8 w-8 text-amber-700 group-hover:text-amber-500 transition-colors duration-300" />
    }
  ];

  const rules = [
    {
      text: "Each team must consist of 2 to 3 members",
      icon: <Users className="h-5 w-5 text-white" />
    },
    {
      text: "Topic must relate to Water Conservation, Sustainability, or Innovation",
      icon: <Lightbulb className="h-5 w-5 text-white" />
    },
    {
      text: "Presentations must be concise, clear, and impactful (3-minute limit strictly enforced)",
      icon: <Clock className="h-5 w-5 text-white" />
    }
  ];

  const benefits = [
    {
      text: "Opportunity to present your innovative ideas",
      icon: <Lightbulb className="h-6 w-6 text-green-600" />
    },
    {
      text: "Gain recognition for your research",
      icon: <Award className="h-6 w-6 text-green-600" />
    },
    {
      text: "Participation certificates for all participants",
      icon: <Award className="h-6 w-6 text-green-600" />
    },
    {
      text: "Network with like-minded individuals",
      icon: <Network className="h-6 w-6 text-green-600" />
    }
  ];

  return (
    <section id="competition" className="section-padding bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 reveal-animation bg-clip-text text-transparent bg-gradient-to-r from-water to-purple">
            3-Minute Talk Competition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-water to-purple mx-auto mb-8 reveal-animation"></div>
          <p className="text-gray-600 text-lg reveal-animation">
            An engaging competition designed to showcase innovative ideas, research, and perspectives
            related to water and environment. Each team will be given 3 minutes to present their concept or
            research.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-water to-purple/80 p-6">
                <h3 className="text-3xl font-bold text-white mb-1 reveal-animation">Competition Format</h3>
                <p className="text-blue-100 opacity-90">Clear rules for a fair competition</p>
              </div>
              
              <div className="p-8">
                <div className="space-y-6 reveal-animation mb-10">
                  {rules.map((rule, index) => (
                    <div key={index} className="flex items-start group hover:scale-105 transition-transform duration-300">
                      <div className="bg-gradient-to-r from-water to-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                        {rule.icon || index + 1}
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-700 font-medium group-hover:text-water transition-colors duration-300">{rule.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="reveal-animation">
                  <h3 className="text-2xl font-bold mb-6 text-water-dark">Awards</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {prizes.map((prize, index) => (
                      <div 
                        key={index} 
                        className={cn(
                          "rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300",
                          index === 0 ? "transform scale-105 hover:scale-110" : "hover:scale-105"
                        )}
                      >
                        <div className={cn(
                          "h-16 bg-gradient-to-r p-3 text-center text-white font-bold flex items-center justify-center flex-col",
                          prize.color
                        )}>
                          <span className="text-xl">{prize.place} Prize</span>
                        </div>
                        <div className="p-6 bg-white text-center flex flex-col items-center">
                          {prize.icon}
                          <p className="text-gray-700 mt-3 font-medium">
                            {prize.award}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 reveal-animation">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100 transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-r from-water/90 to-purple/70 text-white p-8 text-center">
                <h3 className="text-3xl font-bold mb-2">Showcase Your Ideas</h3>
                <p className="text-blue-100 opacity-90">Take your research to the next level</p>
              </div>
              
              <div className="p-8">
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center hover:scale-105 transition-transform duration-300">
                      <div className="bg-green-100 rounded-full p-3 shadow-sm">
                        {benefit.icon}
                      </div>
                      <p className="ml-4 text-gray-700">{benefit.text}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 text-center">
                  <Button 
                    className="bg-gradient-to-r from-water to-purple hover:shadow-lg transition-shadow duration-300 text-white font-medium py-6 px-8 text-lg rounded-full"
                    onClick={() => {
                      const registerSection = document.getElementById('register');
                      if (registerSection) {
                        registerSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Join the Competition
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16 reveal-animation">
          <div className="inline-block bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-water font-semibold inline-flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Register before June 2, 2025 to participate!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitionSection;
