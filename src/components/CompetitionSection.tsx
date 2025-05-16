
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';

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
      color: "from-yellow-300 to-amber-500"
    },
    {
      place: "2nd",
      award: "Cash Award + Certificate",
      color: "from-gray-300 to-gray-400"
    },
    {
      place: "3rd",
      award: "Cash Award + Certificate",
      color: "from-amber-600 to-amber-800"
    }
  ];

  const rules = [
    "Each team must consist of 2 to 3 members",
    "Topic must relate to Water Conservation, Sustainability, or Innovation",
    "Presentations must be concise, clear, and impactful (3-minute limit strictly enforced)"
  ];

  return (
    <section id="competition" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 reveal-animation">
            3-Minute Talk Competition
          </h2>
          <div className="w-20 h-1 bg-water mx-auto mb-8 reveal-animation"></div>
          <p className="text-gray-600 reveal-animation">
            An engaging competition designed to showcase innovative ideas, research, and perspectives
            related to water and environment. Each team will be given 3 minutes to present their concept or
            research.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-6 reveal-animation">Competition Format</h3>
            <div className="space-y-5 reveal-animation">
              {rules.map((rule, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-water text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <p className="ml-4 text-gray-700">{rule}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 reveal-animation">
              <h3 className="text-2xl font-bold mb-6">Awards</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {prizes.map((prize, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "rounded-lg overflow-hidden shadow-lg group card-hover",
                      index === 0 ? "transform scale-105" : ""
                    )}
                  >
                    <div className={cn(
                      "h-12 bg-gradient-to-r p-3 text-center text-white font-bold",
                      prize.color
                    )}>
                      {prize.place} Prize
                    </div>
                    <div className="p-6 bg-white text-center">
                      <p className="text-gray-700">
                        {prize.award}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 reveal-animation">
            <div className="rounded-xl overflow-hidden shadow-xl bg-white">
              <div className="bg-gradient-to-r from-water to-purple/60 text-white p-6 text-center">
                <h3 className="text-xl font-bold">Showcase Your Ideas</h3>
              </div>
              <div className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-green-100 rounded-full p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="ml-4 text-gray-700">Opportunity to present your innovative ideas</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-green-100 rounded-full p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="ml-4 text-gray-700">Gain recognition for your research</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-green-100 rounded-full p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="ml-4 text-gray-700">Participation certificates for all participants</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-green-100 rounded-full p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="ml-4 text-gray-700">Network with like-minded individuals</p>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <a href="#register" className="btn-primary inline-block">
                    Join the Competition
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitionSection;
