import React from 'react';
import EventCard from '@/components/EventCard';
import events from '@/data/events';

export default function EventsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center p-16">Events</h1>
      <div className="container mx-auto p-4">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
}
