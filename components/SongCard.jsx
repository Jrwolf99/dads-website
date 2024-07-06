import React from 'react';
import ImageWithPulse from './ImageWithPulse';

export default function SongCard({ song }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden m-4 flex flex-col md:flex-row border hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-100 ease-in-out">
      <ImageWithPulse
        src={song.titleImage}
        alt={song.title}
        className="w-full h-48 md:w-1/3 md:h-auto"
      />
      <div className="p-4 md:w-2/3">
        <h2 className="text-xl font-bold dark:text-gray-200">{song.title}</h2>
        <p className="mt-4 dark:text-gray-200">{song.subtitle}</p>

        <h3 className="text-lg font-semibold dark:text-gray-200 mt-4">
          Artists
        </h3>
        {song.artists.map((artist, index) => (
          <p key={index} className="dark:text-gray-200">
            {artist.name} {artist.role && `(${artist.role})`}
          </p>
        ))}

        <h3 className="text-lg font-semibold dark:text-gray-200 mt-4">
          Authors
        </h3>
        {song.authors.map((author, index) => (
          <p key={index} className="dark:text-gray-200">
            {author.name} {author.role && `(${author.role})`}
          </p>
        ))}

        <p className="mt-4 dark:text-gray-200">{song.bio}</p>
      </div>
    </div>
  );
}
