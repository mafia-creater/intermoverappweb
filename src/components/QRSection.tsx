import React from 'react';
import { Smartphone, QrCode } from 'lucide-react';


const QRSection: React.FC = () => {
  const expoGoLink = "https://apps.apple.com/us/app/expo-go/id982107779";
  
  return (
    <section id="download" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl mx-auto">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Try It Now</h2>
            <p className="text-xl text-gray-600 mb-6">
              Experience Intermover on your device by scanning the QR code with your phone camera.
            </p>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-800 mb-3">How to get started:</h3>
              <ol className="text-left text-gray-600 space-y-2 pl-6 list-decimal">
                <li>Download Expo Go app from App Store or Google Play</li>
                <li>Open your phone camera and scan the QR code</li>
                <li>Open the link with Expo Go</li>
                <li>Start exploring Bologna with our companion!</li>
              </ol>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href={expoGoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors shadow-md"
              >
                <Smartphone size={20} />
                <span>Open in Expo Go</span>
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative p-4 bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="absolute -top-3 -right-3 bg-blue-600 text-white p-2 rounded-full">
                <QrCode size={24} />
              </div>
              
              <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-100 flex items-center justify-center">
                {/* <p className="text-center text-gray-500 p-4">
                  [QR Code for Expo Go app would be here]

                </p> */}
                <img 
                  src='https://fra.cloud.appwrite.io/v1/storage/buckets/67f6a9e4000ec696b0bd/files/680e05e7000021bd46ba/view?project=67e04a47000d2aa438b3&mode=admin@/assets/images/qr.jpeg' 
                  alt="QR Code for Expo Go" 
                  className="w-full h-full object-cover rounded-lg"
                />

              </div>
              
              <p className="mt-4 text-sm text-gray-500 text-center">
                Scan with your phone camera
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRSection;