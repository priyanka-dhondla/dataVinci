import React from 'react';

const UMFScale = () => {
  const umfLevels = [
    { level: 'UMF™ 10+', active: false },
    { level: 'UMF™ 15+', active: false },
    { level: 'UMF™ 20+', active: false },
    { level: 'UMF™ 24+', active: true },
    { level: 'UMF™ 26+', active: false },
    { level: 'UMF™ 28+', active: false },
    { level: 'UMF™ 30+', active: false }
  ];

  return (
    <section className="space-y-4">
      <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wide">UMF™ SCALE</h3>
      
      <div className="flex flex-wrap gap-2">
        {umfLevels.map((item) => (
          <button
            key={item.level}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              item.active
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {item.level}
          </button>
        ))}
      </div>
    </section>
  );
};

export default UMFScale;