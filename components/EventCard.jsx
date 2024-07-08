import React from 'react';
import ImageWithPulse from './ImageWithPulse';

export default function EventCard({ event }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden m-4 flex flex-col xl:flex-row border">
      {/* <img
        src={event.titleImage}
        alt={event.title}
        className="w-full h-48 object-cover xl:w-1/2 xl:h-auto"
      /> */}
      <ImageWithPulse
        src={event.titleImage}
        alt={event.title}
        imageClasses={'object-cover'}
        className="w-full xl:w-1/2 h-48 xl:h-auto"
      />
      <div className="p-4 xl:w-1/2">
        <h2 className="text-xl font-bold dark:text-gray-200">{event.title}</h2>
        <p className="text-gray-600 dark:text-gray-400">
          {event.date} at {event.time}
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          {event.location.name}
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          {event.location.address}
        </p>
        <p className="mt-4 dark:text-gray-200">{event.details}</p>
        <div className="mt-4">
          <p className="font-semibold dark:text-gray-200">
            Contact Information:
          </p>
          <p className="dark:text-gray-200">{event.contactInfo.name}</p>
          <p className="dark:text-gray-200">{event.contactInfo.email}</p>
          <p className="dark:text-gray-200">{event.contactInfo.phone}</p>
        </div>
      </div>
    </div>
  );
}
