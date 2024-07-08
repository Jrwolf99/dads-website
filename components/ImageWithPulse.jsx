import React from 'react';

const ImageWithPulse = ({ src, alt, className, imageClasses }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 w-full h-full bg-gray-300 animate-pulse"></div>
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full ${imageClasses}`}
      />
    </div>
  );
};

export default ImageWithPulse;
