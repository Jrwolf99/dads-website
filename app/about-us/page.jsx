import PersonCard from '@/components/PersonCard';
import React from 'react';
import people from '@/data/people';

export default function AboutUsPage() {
  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center pt-2 pb-16">
        About Us, As of today...
      </h1>

      <div className="flex gap-4 flex-wrap justify-center mx-auto px-4 max-w-[1200px]">
        {people
          .filter((person) => person.category === 'member' && !person.archived)
          .map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
      </div>


      <h1 className="text-4xl font-bold text-center pt-10 pb-8">
        With Special Thanks To...
      </h1>
      <div className="flex gap-4 flex-wrap justify-center mx-auto px-4 max-w-[1200px]">
        {people
          .filter((person) => person.category === 'partner' && !person.archived)
          .map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
      </div>
    </div>
  );
}
