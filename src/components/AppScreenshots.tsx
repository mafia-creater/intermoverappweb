import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { screenshots } from '../data';

const AppScreenshots: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? screenshots.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === screenshots.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id="screenshots" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">App Screenshots</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a peek at the intuitive interface and features of the Intermover app.
          </p>
        </div>

        <div className="relative max-w-md mx-auto">
          {/* Phone frame */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-200 to-blue-400 rounded-[40px] blur-lg opacity-30 transform rotate-1"></div>
            <div className="relative bg-gray-900 p-3 rounded-[40px] shadow-xl border-8 border-gray-800">
              {/* Screen */}
              <div className="relative overflow-hidden rounded-[30px] aspect-[9/19.5] bg-white">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-gray-900 rounded-b-xl z-30"></div>
                
                {/* Screenshots */}
                <div 
                  className="flex transition-transform duration-500 h-full"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {screenshots.map((screenshot, index) => (
                    <div key={screenshot.id} className="min-w-full h-full flex-shrink-0">
                      <img 
                        src={screenshot.src} 
                        alt={screenshot.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center mt-8 gap-2">
            <button 
              onClick={goToPrevious}
              disabled={isAnimating}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors text-gray-800"
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex items-center gap-2">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isAnimating}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to screenshot ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={goToNext}
              disabled={isAnimating}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors text-gray-800"
              aria-label="Next screenshot"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppScreenshots;