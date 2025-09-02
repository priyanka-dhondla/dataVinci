import React from 'react';

const DeliveryInfo = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Delivery */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wide">DELIVERY</h3>
        <div className="space-y-2">
          <div className="text-sm text-gray-600">FREE DELIVERY ON ORDERS OVER $30</div>
          <div className="text-right">
            <div className="text-sm font-medium text-gray-900">ESTIMATED DELIVERY DATE:</div>
            <div className="text-sm text-gray-600">Jun 9 - Jun 13 to</div>
          </div>
        </div>
      </div>

      {/* After Pay */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wide">AFTER PAY</h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">or 4 interest-free payments of $13.97 with</span>
          <div className="bg-black text-white px-2 py-1 rounded text-xs font-bold">
            $ Afterpay
          </div>
          <button className="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center">
            <span className="text-xs text-gray-600">i</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeliveryInfo;