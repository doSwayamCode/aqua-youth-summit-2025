
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const RegistrationSection = () => {
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

  return (
    <section id="register" className="section-padding water-bg relative">
      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white reveal-animation">
            Register Now
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8 reveal-animation"></div>
          <p className="text-white/90 reveal-animation">
            Limited seats available – early registration is strongly encouraged.
            Be a part of the movement for a sustainable water future.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto reveal-animation bg-white/95 backdrop-blur-sm shadow-2xl">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-center mb-6">Registration Details</h3>
                <div className="bg-blue-50 p-4 rounded-lg text-center mb-6">
                  <span className="font-bold text-xl">₹1000</span>
                  <span className="text-gray-600 ml-1">For Scholars, Practitioners and Academicians</span>
                  <br />
                   <span className="font-bold text-xl">₹500</span>
                  <span className="text-gray-600 ml-1">Students</span>
                  <br />
                   <span className="font-bold text-xl">₹250</span>
                  <span className="text-gray-600 ml-1">To attend online</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-water mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">Access to all conference sessions</p>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-water mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">Conference materials</p>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-water mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">Participation certificate</p>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-water mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">Networking opportunities</p>
                </div>
              </div>
              
              <div className="pt-6 text-center">
                <Button asChild className="bg-water hover:bg-water-dark text-white w-full py-6 text-lg">
                  <a 
                    href="https://www.dhartiinternational.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Register!
                  </a>
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  For any queries, please contact us at:
                  <br />
                  <a href="mailto:info@dhartiinternational.org.org" className="text-water hover:underline">
                    info@dhartiinternational.org
                  </a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RegistrationSection;
