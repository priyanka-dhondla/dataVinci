import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import BeautyBundle from "./BeautyBundle";
import RewardsSection from "./RewardsSection";
import DeliveryInfo from "./DeliveryInfo";
import UMFScale from "./UMFScale";
import TasteProfile from "./TasteProfile";

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState("125g");
  const [quantity, setQuantity] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState("one-time");

  const sizes = [
    {
      size: "125g",
      weight: "4.4oz",
      imgUrl: "/logos/c1.png",
    },
    {
      size: "250g",
      weight: "8.8oz",
      imgUrl: "/logos/c2.png",
    },
    {
      size: "500g",
      weight: "17.6oz",
      imgUrl: "/logos/c3.png",
    },
    {
      size: "1kg",
      weight: "35.2oz",
      imgUrl: "/logos/c4.png",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Size Selection */}
      <div className="space-y-4">
        <div className="text-sm font-medium text-gray-900 uppercase tracking-wide">
          SIZE (SELECT ONE)
        </div>
        <div className="text-gray-600 mb-4">
          Variant: {selectedSize} |{" "}
          {sizes.find((s) => s.size === selectedSize)?.weight}
        </div>

        {/* Size Grid */}
        <div className="grid grid-cols-4 gap-3">
          {sizes.map((option) => (
            <button
              key={option.size}
              onClick={() => setSelectedSize(option.size)}
              className={`aspect-square rounded-2xl border-2 transition-all ${
                selectedSize === option.size
                  ? "border-orange-400 bg-orange-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="p-2">
                <img
                  src={option.imgUrl}
                  alt={`${option.size} jar`}
                  className="w-full h-full object-contain"
                />
              </div>
            </button>
          ))}
        </div>

        {/* Row 2 - Additional Products (kept as is for now) */}
        <div className="grid grid-cols-4 gap-3 mt-3">
          <button className="aspect-square rounded-2xl border-2 border-gray-200 hover:border-gray-300 transition-all">
            <div className="p-2">
              <img
                src="/logos/c5.png"
                alt="250g jar"
                className="w-full h-full object-contain"
              />
            </div>
          </button>
          <button className="aspect-square rounded-2xl border-2 border-gray-200 hover:border-gray-300 transition-all">
            <div className="p-2">
              <img
                src="/logos/c6.png"
                alt="500g jar"
                className="w-full h-full object-contain"
              />
            </div>
          </button>
          <button className="aspect-square rounded-2xl border-2 border-gray-200 hover:border-gray-300 transition-all">
            <div className="p-2 flex items-center justify-center">
              <img
                src="/logos/c7.png"
                alt="500g jar"
                className="w-full h-full object-contain"
              />{" "}
            </div>
          </button>
          <div></div>
        </div>
      </div>

      {/* Payment Options */}
      <div className="space-y-4">
        <div className="text-sm font-medium text-gray-900 uppercase tracking-wide">
          PAYMENT OPTIONS (SELECT ONE)
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => setSelectedPayment("one-time")}
            className={`p-4 rounded-2xl border-2 transition-all text-left ${
              selectedPayment === "one-time"
                ? "border-orange-400 bg-orange-400 text-white"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="font-medium">One-time purchase</div>
            <div className="text-lg font-bold">$55.88 USD</div>
          </button>

          <button
            onClick={() => setSelectedPayment("subscribe")}
            className={`p-4 rounded-2xl border-2 transition-all text-left ${
              selectedPayment === "subscribe"
                ? "border-orange-400 bg-orange-400 text-white"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="font-medium">Subscribe & save 20%</div>
            <div className="text-lg font-bold">$44.70 USD</div>
          </button>
        </div>

        <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
          <div className="w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center">
            <span className="text-xs">?</span>
          </div>
          <span className="text-sm">What is a Subscription?</span>
        </button>
      </div>

      {/* Quantity and Add to Cart */}
      <div className="space-y-4">
        <div className="text-sm font-medium text-gray-900 uppercase tracking-wide">
          SELECT QUANTITY
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-orange-400 rounded-full">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-12 h-12 flex items-center justify-center text-white hover:bg-orange-500 rounded-l-full transition-colors"
            >
              <Minus size={16} />
            </button>
            <div className="w-16 h-12 flex items-center justify-center text-white font-medium bg-orange-400">
              {quantity}
            </div>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-12 h-12 flex items-center justify-center text-white hover:bg-orange-500 rounded-r-full transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>

          <button className="flex-1 bg-gray-900 text-white font-medium py-3 px-8 rounded-full hover:bg-gray-800 transition-colors">
            ADD TO CART
          </button>
        </div>
      </div>
      <BeautyBundle />
      <hr />
      <RewardsSection />
      <hr />
      <DeliveryInfo />
      <hr />
      <UMFScale />
      <TasteProfile />
    </div>
  );
};

export default ProductDetails;
