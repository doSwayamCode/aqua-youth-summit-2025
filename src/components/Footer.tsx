
import React from 'react';
import { Droplet } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 mb-10 md:mb-0">
            <div className="flex items-center mb-4">
              <Droplet className="h-8 w-8 text-water" />
              <span className="font-bold text-2xl ml-2">EnviroConf 2025</span>
            </div>
            <p className="text-gray-400 pr-10">
              Join us in celebrating World Environment Day 2025 with action, 
              awareness, and youth-driven innovation.
            </p>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Organized by:</h4>
              <div className="text-gray-400">
                <p>Dharti International Foundation &</p>
                <p>Remediation of the Contaminated Environment (RCE) Pvt. Ltd.</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 mb-10 md:mb-0">
            <h3 className="text-xl font-bold mb-6">Important Links</h3>
            <ul className="space-y-3">
              {['About', 'Speakers', 'Highlights', 'Competition', 'Register'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-water transition-colors block"
                  >
                    {item} Conference
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-water mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>R & I Park, IIT Delhi, New Delhi</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-water mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@dhartiinternational.org" className="hover:text-water transition-colors">
                  info@dhartiinternational.org
                </a>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-water mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 63743 46159</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Environmental Day Conference 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
