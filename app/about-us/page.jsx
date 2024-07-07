import PersonCard from '@/components/PersonCard';
import React from 'react';
import people from '@/data/people';

export default function AboutUsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center pt-10 pb-8">About Us</h1>

      <div className="flex flex-wrap mx-auto gap-4 justify-center items-start">
        {people.map((person, index) => (
          <PersonCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
}
