import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white pt-16">
      <div 
        className={`container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12 
          transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Your Guide to <span className="text-blue-600">Bologna</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-xl">
            Helping international students move, adapt, and thrive in Bologna, Italy with all the resources they need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#download"
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors shadow-md"
            >
              Get Started
            </a>
            <a 
              href="#features"
              className="px-8 py-3 bg-white text-blue-600 font-medium rounded-full border border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-64 h-auto">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-200 to-blue-400 rounded-[40px] blur-lg opacity-30 transform rotate-6"></div>
            <div className="relative bg-white p-2 rounded-[40px] shadow-xl border-4 border-gray-100">
              <img 
                src="https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg"
                alt="Bologna Student Companion App Demo"
                className="w-full h-auto rounded-[35px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#features" className="text-blue-600 hover:text-blue-800 transition-colors">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;