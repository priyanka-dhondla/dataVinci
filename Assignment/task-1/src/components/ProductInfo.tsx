import React, { useState } from 'react';
import { Star, Heart, Share2 } from 'lucide-react';

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('250g');

  const sizes = [
    { size: '250g', price: 89.00 },
    { size: '500g', price: 159.00 },
    { size: '1kg', price: 299.00 }
  ];

  const selectedProduct = sizes.find(s => s.size === selectedSize);

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500">
        <span>Home</span> / <span>Shop</span> / <span className="text-gray-900">Manuka Honey</span>
      </nav>

      {/* Product Title */}
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          Manuka Honey UMF 24+ MGO 1122+
        </h1>
        <p className="text-gray-600">Premium Grade Manuka Honey</p>
      </div>

      {/* Rating */}
      <div className="flex items-center space-x-2">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} fill="currentColor" />
          ))}
        </div>
        <span className="text-gray-600">(124 reviews)</span>
      </div>

      {/* Price */}
      <div className="space-y-2">
        <div className="text-3xl font-bold text-gray-900">
          ${selectedProduct?.price.toFixed(2)}
        </div>
        <p className="text-green-600 font-medium">Free shipping on orders over $75</p>
      </div>

      {/* Size Selection */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-900">
          Size: {selectedSize}
        </label>
        <div className="grid grid-cols-3 gap-3">
          {sizes.map((option) => (
            <button
              key={option.size}
              onClick={() => setSelectedSize(option.size)}
              className={`p-3 border rounded-lg text-center transition-all ${
                selectedSize === option.size
                  ? 'border-purple-500 bg-purple-50 text-purple-700'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className="font-medium">{option.size}</div>
              <div className="text-sm text-gray-600">${option.price}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-900">
          Quantity
        </label>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            -
          </button>
          <span className="w-12 text-center font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <div className="space-y-3">
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl transition-colors">
          ADD TO CART - ${(selectedProduct!.price * quantity).toFixed(2)}
        </button>
        <button className="w-full border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold py-4 rounded-xl transition-colors">
          BUY NOW
        </button>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors">
          <Heart size={20} />
          <span>Add to Wishlist</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors">
          <Share2 size={20} />
          <span>Share</span>
        </button>
      </div>

      {/* Product Details */}
      <div className="space-y-4 pt-6 border-t">
        <h3 className="font-semibold text-gray-900">Product Details</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• UMF 24+ certified by UMFHA</li>
          <li>• MGO 1122+ methylglyoxal content</li>
          <li>• Raw and unpasteurized</li>
          <li>• Traceable to New Zealand source</li>
          <li>• Third-party laboratory tested</li>
        </ul>
      </div>

      {/* Certifications */}
      <div className="space-y-4 pt-6 border-t">
        <h3 className="font-semibold text-gray-900">Certifications</h3>
        <div className="flex space-x-4">
          <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
            <span className="text-green-600 font-bold text-xs">UMF</span>
          </div>
          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
            <span className="text-blue-600 font-bold text-xs">MGO</span>
          </div>
          <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
            <span className="text-green-600 font-bold text-xs">NZ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;