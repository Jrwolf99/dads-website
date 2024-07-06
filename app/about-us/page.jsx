import PersonCard from '@/components/PersonCard';
import React from 'react';
import people from '@/data/people';

export default function AboutUsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center pt-10 pb-8">About Us</h1>

      <div className="container mx-auto p-4">
        {people.map((person, index) => (
          <PersonCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
}
