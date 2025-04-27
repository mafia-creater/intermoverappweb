import React from 'react';
import { Code2, BookOpen, Layers } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About the Project</h2>
          <p className="text-xl text-gray-600 mb-12">
            Bologna Student Companion was built with care to help international students navigate their experience in Bologna.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Code2 size={28} className="text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Built with React Native</h3>
              <p className="text-gray-600">
                Developed using React Native and Expo for a smooth, native experience on both iOS and Android.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <BookOpen size={28} className="text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Student-Focused Design</h3>
              <p className="text-gray-600">
                Designed with input from international students to address real needs and challenges.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Layers size={28} className="text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Continuous Improvement</h3>
              <p className="text-gray-600">
                Regularly updated with new features based on user feedback and changing student needs.
              </p>
            </div>
          </div>
          
        
        </div>
      </div>
    </section>
  );
};

export default AboutSection;