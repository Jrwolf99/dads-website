import React from 'react';

export default function PersonCard({ person }) {
  return (
    <div className="w-[300px] mb-10 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col border">
      <div className="relative w-full h-[280px] overflow-hidden">
        <img
          src={person.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
        />
        <img
          src={person.image}
          alt={person.name}
          className="absolute inset-0 w-full h-full object-contain z-10"
        />
      </div>
      <div className="p-4 w-full">
        <h2 className="text-xl font-bold dark:text-gray-200">{person.name}</h2>
        <p className="text-sm dark:text-gray-400 italic">{person.role}</p>
        <p className="mt-4 dark:text-gray-200 text-[12px]">{person.sub_desc}</p>
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
