import React, { useState } from 'react';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Left - Which Manuka Button */}
          <div className="hidden lg:block">
            <button className="border border-gray-300 rounded-full px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              WHICH MANUKA IS FOR ME?
            </button>
          </div>

          {/* Center - Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Shop</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Explore</a>
            
            {/* Logo */}
            <div className="mx-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#8B5CF6"/>
                    <path d="M2 17L12 22L22 17" stroke="#8B5CF6" strokeWidth="2"/>
                    <path d="M2 12L12 17L22 12" stroke="#8B5CF6" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-gray-900 leading-tight">NEW ZEALAND</div>
                  <div className="text-sm font-bold text-gray-900 leading-tight">HONEY CO.</div>
                </div>
              </div>
            </div>

            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Rewards</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Contact</a>
          </nav>

          {/* Right - Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-gray-900">
              <User size={20} />
            </button>
            <button className="p-2 text-gray-700 hover:text-gray-900">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-700 hover:text-gray-900 relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                0
              </span>
            </button>
          </div>

          {/* Mobile Logo */}
          <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#8B5CF6"/>
                  <path d="M2 17L12 22L22 17" stroke="#8B5CF6" strokeWidth="2"/>
                  <path d="M2 12L12 17L22 12" stroke="#8B5CF6" strokeWidth="2"/>
                </svg>
              </div>
              <div className="text-center">
                <div className="text-xs font-bold text-gray-900 leading-tight">NEW ZEALAND</div>
                <div className="text-xs font-bold text-gray-900 leading-tight">HONEY CO.</div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <nav className="px-4 py-4 space-y-4">
            <button className="w-full border border-gray-300 rounded-full px-6 py-2 text-sm font-medium text-gray-700 mb-4">
              WHICH MANUKA IS FOR ME?
            </button>
            <a href="#" className="block text-gray-700 font-medium py-2">Shop</a>
            <a href="#" className="block text-gray-700 font-medium py-2">Explore</a>
            <a href="#" className="block text-gray-700 font-medium py-2">About</a>
            <a href="#" className="block text-gray-700 font-medium py-2">Rewards</a>
            <a href="#" className="block text-gray-700 font-medium py-2">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;