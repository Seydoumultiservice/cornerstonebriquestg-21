
import React from 'react';

const TogoFlag = () => {
  return (
    <div className="relative w-full h-24 md:h-32 overflow-hidden rounded-lg shadow-md mb-6">
      <div className="absolute inset-0 animate-wave">
        {/* Green and yellow stripes background */}
        <div className="h-full w-full">
          <div className="h-1/5 bg-[#006a4e]"></div>
          <div className="h-1/5 bg-[#ffd700]"></div>
          <div className="h-1/5 bg-[#006a4e]"></div>
          <div className="h-1/5 bg-[#ffd700]"></div>
          <div className="h-1/5 bg-[#006a4e]"></div>
        </div>
        
        {/* Red canton with star */}
        <div className="absolute top-0 left-0 w-2/5 h-3/5 bg-[#d21034] flex items-center justify-center">
          <div className="text-white text-4xl animate-pulse">★</div>
        </div>
      </div>
    </div>
  );
};

export default TogoFlag;
