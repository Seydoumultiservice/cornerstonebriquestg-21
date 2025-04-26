
import React from 'react';

const TogoFlag = () => {
  return (
    <div className="relative w-32 h-20 mx-auto mb-8 overflow-hidden rounded-lg shadow-lg">
      <div className="absolute inset-0 bg-[#006a4e]">
        {/* Bandes horizontales */}
        <div className="h-full w-full relative overflow-hidden">
          <div className="absolute w-full h-1/5 bg-[#006a4e] animate-waving"></div>
          <div className="absolute w-full h-1/5 top-1/5 bg-[#ffd700] animate-waving delay-100"></div>
          <div className="absolute w-full h-1/5 top-2/5 bg-[#006a4e] animate-waving delay-200"></div>
          <div className="absolute w-full h-1/5 top-3/5 bg-[#ffd700] animate-waving delay-300"></div>
          <div className="absolute w-full h-1/5 top-4/5 bg-[#006a4e] animate-waving delay-400"></div>
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
