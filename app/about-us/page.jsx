import PersonCard from '@/components/PersonCard';
import React from 'react';
import people from '@/data/people';

export default function AboutUsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center pt-10 pb-8">
        About Us, As of today...
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-7xl px-4">
        {people
          .filter((person) => person.category === 'member')
          .map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
      </div>


      <h1 className="text-4xl font-bold text-center pt-10 pb-8">
        With Special Thanks To...
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-7xl px-4">
        {people
          .filter((person) => person.category === 'partner')
          .map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
      </div>
    </div>
  );
}
