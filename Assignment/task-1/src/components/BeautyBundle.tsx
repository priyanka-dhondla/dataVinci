import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BeautyBundle = () => {
  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium text-gray-900">Beauty Bundle</h2>
        <div className="flex items-center space-x-2">
          <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
            <ChevronLeft size={16} className="text-gray-600" />
          </button>
          <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
            <ChevronRight size={16} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Bundle Products */}
      <div className="flex items-center space-x-4 lg:space-x-6">
        {/* Product 1 */}
        <div className="flex-shrink-0">
          <div className="w-20 h-24 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="/logos/b1.png"
              alt="UMF 20+"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-center mt-2">
            <div className="text-sm font-medium text-gray-900">UMF 20+</div>
            <div className="text-xs text-gray-600">250g ▼</div>
          </div>
        </div>

        {/* Plus */}
        <div className="text-gray-400 text-xl">+</div>

        {/* Product 2 */}
        <div className="flex-shrink-0">
          <div className="w-20 h-24 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="/logos/b2.png"
              alt="UMF 24+"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-center mt-2">
            <div className="text-sm font-medium text-gray-900">UMF 24+</div>
            <div className="text-xs text-gray-600">250g ▼</div>
          </div>
        </div>

        {/* Plus */}
        <div className="text-gray-400 text-xl">+</div>

        {/* Product 3 */}
        <div className="flex-shrink-0">
          <div className="w-20 h-24 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
            <img
              src="/logos/b3.png"
              alt="UMF 24+"
              className="w-full h-full object-contain"
            />{" "}
          </div>
          <div className="text-center mt-2">
            <div className="text-sm font-medium text-gray-900">Wooden</div>
            <div className="text-sm font-medium text-gray-900">Spoon</div>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex-1 text-right space-y-1">
          <div className="text-sm text-gray-500 line-through">$478.75 USD</div>
          <div className="text-xl font-bold text-gray-900">$430.88 USD</div>
          <div className="text-sm text-green-600 font-medium">Save 10%</div>
        </div>
      </div>

      {/* Add Bundle Button */}
      <button className="w-full bg-gray-900 text-white font-medium py-3 rounded-full hover:bg-gray-800 transition-colors">
        ADD BUNDLE TO CART
      </button>
    </section>
  );
};

export default BeautyBundle;
