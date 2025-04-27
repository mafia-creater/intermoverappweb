import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AppScreenshots from './components/AppScreenshots';
import QRSection from './components/QRSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-inter">
      <Header />
      <main>
        <Hero />
        <Features />
        <AppScreenshots />
        <QRSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;