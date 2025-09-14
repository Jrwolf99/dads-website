"use client";
import React from 'react';

export default function PersonCard({ person }) {
  const handleClick = () => {
    if (person.links && person.links.length > 0) {
      window.open(person.links[0].url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button 
      onClick={handleClick}
      className="group relative w-[260px] bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <div className="relative w-full h-[260px] overflow-hidden">
        <img
          src={person.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-sm scale-110 transition-transform duration-700 group-hover:scale-125"
        />
        <img
          src={person.image}
          alt={person.name}
          className="absolute inset-0 w-full h-full object-contain z-10 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20" />
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-30">
          <h2 className="text-white text-lg font-bold -mb-1">{person.name}</h2>
          <p className="text-white/90 text-sm font-medium mb-1">{person.role}</p>
        </div>
      </div>
      
      <div className="p-3 h-[100px] flex flex-col justify-between">
        <p className="text-gray-600 dark:text-gray-300 text-xs pb-1">
          {person.sub_desc}
        </p>
        
        <div className="flex items-center justify-end gap-1.5">
          {person.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
            >
              <img
                src={link.icon}
                alt={link.name}
                className="w-4 h-4 dark:invert"
              />
            </a>
          ))}
        </div>
      </div>
    </button>
  );
}
