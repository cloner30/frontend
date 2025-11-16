import React from 'react';

const AnimatedGradient = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute w-full h-full animate-gradient-shift">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2f4a] via-[#2a3f5a] to-[#1a2f4a] opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#ffce05]/20 via-transparent to-[#ffce05]/20 animate-gradient-rotate" />
      </div>
    </div>
  );
};

export default AnimatedGradient;