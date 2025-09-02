import React from "react";

const ProductGallery = () => {
  return (
    <div className="space-y-4">
      {/* Main Gallery Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Top Left */}
        <div className="bg-gray-100 rounded-2xl aspect-square overflow-hidden">
          <img
            src="/logos/l1.png"
            alt="Product lifestyle 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top Right */}
        <div className="bg-purple-200 rounded-2xl aspect-square overflow-hidden">
          <img
            src="/logos/l2.png"
            alt="Product lifestyle 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Left */}
        <div className="bg-gray-100 rounded-2xl aspect-square overflow-hidden">
          <img
            src="/logos/l3.png"
            alt="Product lifestyle 3"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Right */}
        <div className="bg-gray-100 rounded-2xl aspect-square overflow-hidden">
          <img
            src="/logos/l4.png"
            alt="Product lifestyle 4"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Gallery Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Bottom Left */}
        <div className="bg-gray-100 rounded-2xl aspect-square overflow-hidden">
          <img
            src="/logos/l5.png"
            alt="Product lifestyle 5"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Right with Text Overlay */}
        <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl aspect-square overflow-hidden relative">
          <img
            src="/logos/l6.png"
            alt="Natural Raw honey"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <div className="text-lg font-bold">Natural Raw</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
