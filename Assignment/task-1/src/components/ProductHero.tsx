import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const ProductHero = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <section className="relative py-8 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left - Product Image with Purple Background */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronRight size={20} className="text-gray-600" />
          </button>

          {/* Purple Background Shape */}
          <div className="relative border rounded-3xl overflow-hidden aspect-square lg:aspect-[4/3] flex items-center justify-center bg-white">
            {/* Product Image */}
            <div className="relative z-10 p-8">
              <img
                src="/logos/home.png"
                alt="Manuka Honey UMF 24+ MGO 1122+"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right - Product Information */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl lg:text-5xl font-light text-gray-900 mb-4">
              Manuka Honey
            </h1>
            <div className="space-y-1">
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl lg:text-4xl font-light text-gray-900">
                  UMF
                </span>
                <span className="text-xs text-gray-500 relative top-0">TM</span>
                <span className="text-2xl lg:text-4xl font-light text-gray-900">
                  24+
                </span>
              </div>
              <div className="text-2xl lg:text-4xl font-light text-gray-900">
                MGO 1122+
              </div>
            </div>
          </div>

          {/* Info Button with Tooltip */}
          <div
            className="relative inline-block"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
              <div className="w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center">
                <span className="text-xs">i</span>
              </div>
              <span className="text-sm">What is UMF and MGO?</span>
            </button>

            {showTooltip && (
              <div className="absolute left-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-20">
                {/* UMF Section */}
                <div className="mb-4">
                  <h3 className="font-bold">UMF</h3>
                  <p className="text-sm text-gray-600">
                    UMF is the strength and purity rating of Manuka honey.
                  </p>
                  <div className="flex space-x-2 mt-2 text-sm font-medium">
                    <span className="text-orange-500">10+</span>
                    <span className="text-red-500">15+</span>
                    <span className="text-pink-500">20+</span>
                    <span className="text-purple-500">24+</span>
                    <span className="text-blue-500">26+</span>
                    <span className="text-green-500">28+</span>
                    <span className="text-blue-700">30+</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    The higher the number, the greater the potency and rarity of
                    Manuka honey.
                  </p>
                </div>

                {/* MGO Section */}
                <div>
                  <h3 className="font-bold">MGO</h3>
                  <p className="text-sm text-gray-600">
                    MGO is the key natural compound that gives Manuka honey its
                    special antibacterial strength.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2 text-sm font-medium">
                    <span className="text-orange-500">263+</span>
                    <span className="text-red-500">514+</span>
                    <span className="text-pink-500">829+</span>
                    <span className="text-purple-500">1122+</span>
                    <span className="text-blue-500">1282+</span>
                    <span className="text-green-500">1450+</span>
                    <span className="text-blue-700">1620+</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    The higher the number, the higher the antibacterial
                    properties in the honey.
                  </p>
                </div>

                {/* Close */}
                <div className="text-right mt-2">
                  <button
                    onClick={() => setShowTooltip(false)}
                    className="text-xs text-gray-500 hover:text-gray-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* The Optimiser */}
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-gray-900">The Optimiser</h2>
            <p className="text-gray-600 leading-relaxed">
              For those times in life when quality comes first. This pure UMF™
              24+ Manuka Honey is powerfully active, sourced from wild and
              rugged locations around Aotearoa New Zealand and great for almost
              all uses. It has a full, delicious flavour and your body will love
              you for it.
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex text-orange-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm text-gray-600">825 REVIEWS</span>
          </div>

          {/* Certification Badges */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-xs font-bold text-gray-700">UMF</span>
            </div>
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-xs font-bold text-gray-700">MGO</span>
            </div>
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-xs font-bold text-gray-700">✓</span>
            </div>
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-xs font-bold text-gray-700">NZ</span>
            </div>
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-xs font-bold text-gray-700">MGO</span>
            </div>
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-xs font-bold text-gray-700">✓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
