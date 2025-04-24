
import React from 'react';

const TogoFlag = () => {
  return (
    <div className="relative w-32 h-20 mx-auto mb-8 overflow-hidden rounded-lg shadow-md">
      <div className="absolute inset-0 animate-wave">
        {/* Bandes vertes et jaunes */}
        <div className="h-full w-full">
          <div className="h-1/5 bg-[#006a4e]"></div>
          <div className="h-1/5 bg-[#ffd700]"></div>
          <div className="h-1/5 bg-[#006a4e]"></div>
          <div className="h-1/5 bg-[#ffd700]"></div>
          <div className="h-1/5 bg-[#006a4e]"></div>
        </div>
        
        {/* Canton rouge avec étoile */}
        <div className="absolute top-0 left-0 w-2/5 h-3/5 bg-[#d21034] flex items-center justify-center">
          <div className="text-white text-2xl animate-pulse">★</div>
        </div>
      </div>
    </div>
  );
};

export default TogoFlag;
