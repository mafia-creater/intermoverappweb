import React from 'react';
import { features } from '../data';
import * as LucideIcons from 'lucide-react';

const Features: React.FC = () => {
  // Function to dynamically get icon component from string name
  const getIconComponent = (iconName: string) => {
    const Icon = (LucideIcons as Record<string, React.FC<{ size?: number; className?: string }>>)[iconName];
    return Icon ? <Icon size={40} className="text-blue-600" /> : null;
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Designed for Students Like You</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our app provides everything international students need to navigate life in Bologna with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="feature-card bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100"
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  {getIconComponent(feature.icon)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 flex-grow">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 italic">
            "All the essentials in one place, designed specifically for international students in Bologna."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;