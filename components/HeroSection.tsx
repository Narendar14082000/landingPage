import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-purple-100 relative py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 px-6">
          <h1 className="text-5xl font-bold text-gray-900">Master your life by mastering emotions</h1>
          <p className="mt-4 text-gray-700">Ahead app</p>
          <div className="mt-6 flex items-center">
            <a href="#" className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <span>Download on the</span>
              <img src="/apple-logo.png" alt="App Store" className="h-6" />
            </a>
            <div className="ml-4">
              <div className="flex items-center">
                <span className="text-yellow-400">★★★★★</span>
                <span className="ml-2 text-gray-600">100+ AppStore reviews</span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 px-6 mt-10 lg:mt-0 relative">
        <div className="w-15 h-42">
            <img src="/phone.png" alt="App Screenshot" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
