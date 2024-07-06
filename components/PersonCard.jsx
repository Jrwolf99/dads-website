import React from 'react';
import ImageWithPulse from './ImageWithPulse';

export default function PersonCard({ person }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden m-4 flex flex-col xl:flex-row border">
      <ImageWithPulse
        src={person.image}
        alt={person.name}
        className="w-full object-cover xl:w-1/4 h-48 xl:h-auto"
      />
      <div className="p-4 xl:w-3/4">
        <h2 className="text-xl font-bold dark:text-gray-200">{person.name}</h2>
        <p className="mt-4 dark:text-gray-200">{person.sub_desc}</p>
      </div>
    </div>
  );
}
