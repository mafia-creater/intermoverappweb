import React from 'react';
import { socialLinks } from '../data';
import * as LucideIcons from 'lucide-react';

const Footer: React.FC = () => {
  // Function to dynamically get icon component from string name
  const getIconComponent = (iconName: string) => {
    const Icon = (LucideIcons as Record<string, React.FC<{ size?: number; className?: string }>>)[iconName];
    return Icon ? <Icon size={20} className="text-gray-400" /> : null;
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Intermover</h2>
            <p className="text-gray-400">Making student life in Bologna simpler.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {socialLinks.map(link => (
                <a 
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {getIconComponent(link.icon)}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Intermover. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>
            Made with ❤️ by Ripudaman
          </p>
          {/* <p className="mt-2">
            Intermover is not affiliated with the University of Bologna or any official entity.
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;