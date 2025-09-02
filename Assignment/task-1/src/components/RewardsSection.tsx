import React from 'react';

const RewardsSection = () => {
  return (
    <section className="bg-gray-50 rounded-2xl p-6">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-br from-red-400 via-orange-400 to-yellow-400 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
        <div className="flex-1">
          <span className="text-gray-700">Colourclub members earn up to </span>
          <span className="text-2xl font-bold text-orange-500">56</span>
          <span className="text-gray-700"> reward points when buy this item. </span>
          <a href="#" className="text-gray-900 underline hover:no-underline">Sign up or log in</a>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;