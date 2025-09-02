import React from 'react';

const TasteProfile = () => {
  return (
    <section className="space-y-6">
      <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wide">TASTE PROFILE</h3>
      
      <div className="space-y-4">
        {/* Taste Scale */}
        <div className="relative">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Clean & Intense</span>
            <span>Bold & Intense</span>
          </div>
          
          {/* Scale Bar */}
          <div className="relative h-2 bg-gray-200 rounded-full">
            <div className="absolute left-0 top-0 h-full w-3/4 bg-gradient-to-r from-gray-400 to-gray-800 rounded-full"></div>
            <div className="absolute top-1/2 left-3/4 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-gray-900 rounded-full border-2 border-white shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TasteProfile;