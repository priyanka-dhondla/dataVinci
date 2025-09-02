import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
      {/* Purple Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600 rounded-full opacity-10 transform -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full opacity-10 transform translate-x-48 translate-y-48"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-purple-400 rounded-full opacity-20 transform -translate-y-16"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Manuka Honey
              <br />
              <span className="text-purple-600">UMF 24+</span>
              <br />
              <span className="text-purple-600">MGO 1122+</span>
            </h1>
            
            <div className="flex justify-center lg:justify-start items-center mb-4">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">★</span>
                ))}
              </div>
              <span className="text-gray-600 text-sm">(124 reviews)</span>
            </div>

            <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto lg:mx-0">
              The finest Manuka honey quality that fate. This honey UMF 24+ has an amazing MANUKA 
              flavour. Australian honey New Zealand and good for special care. It has a lot, delicious 
              flavour and pure food not ordinary pure local.
            </p>

            {/* Certification Badges */}
            <div className="flex justify-center lg:justify-start items-center space-x-6 mb-8">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-xs">UMF</span>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xs">MGO</span>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-xs">✓</span>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xs">NZ</span>
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Manuka Honey Jar"
                className="w-full max-w-md mx-auto lg:max-w-lg"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-purple-400 rounded-full opacity-20 blur-3xl transform scale-150"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;