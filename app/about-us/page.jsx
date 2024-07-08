import PersonCard from '@/components/PersonCard';
import React from 'react';
import people from '@/data/people';

export default function AboutUsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center pt-10 pb-8">
        About Us, As of today...
      </h1>

      <div className="flex flex-wrap mx-auto gap-4 justify-center items-start">
        {people
          .filter((person) => person.category === 'member')
          .map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
      </div>

      <h1 className="text-4xl font-bold text-center pt-10 pb-8">
        Coming Soon...
      </h1>
      <div className="flex flex-wrap mx-auto gap-4 justify-center items-start">
        {people
          .filter((person) => person.category === 'coming_soon')
          .map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
      </div>

      <h1 className="text-4xl font-bold text-center pt-10 pb-8">
        With Special Thanks To...
      </h1>
      <div className="flex flex-wrap mx-auto gap-4 justify-center items-start">
        {people
          .filter((person) => person.category === 'partner')
          .map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
      </div>
    </div>
  );
}
