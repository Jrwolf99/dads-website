import React from 'react';
import ImageWithPulse from './ImageWithPulse';

export default function PersonCard({ person }) {
  return (
    <div className="w-[300px] h-[420px] mb-10 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col border">
      <ImageWithPulse
        src={person.image}
        alt={person.name}
        className="w-full h-48"
      />
      <div className="p-4 w-full">
        <h2 className="text-xl font-bold dark:text-gray-200">{person.name}</h2>
        <p className="text-sm dark:text-gray-400 italic">{person.role}</p>
        <p className="mt-4 dark:text-gray-200">{person.sub_desc}</p>
        <div className="flex flex-wrap mt-4 gap-4">
          {person.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all transform hover:scale-[1.15] duration-300 ease-in-out"
            >
              <img
                src={link.icon}
                alt={link.name}
                className="w-6 h-6 inline-block dark:invert"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
