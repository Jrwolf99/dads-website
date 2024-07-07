import React from 'react';
import ImageWithPulse from './ImageWithPulse';

export default function SongCard({ song }) {
  return (
    <div className="w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row border hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-100 ease-in-out text-left">
      <ImageWithPulse
        src={song.titleImage}
        alt={song.title}
        className="w-full h-[400px] md:h-64 md:w-1/3"
      />
      <div className="p-4 md:w-2/3 flex flex-col gap-4">
        <h2 className="text-2xl font-bold dark:text-gray-200">{song.title}</h2>

        {/* <p className="mt-4 dark:text-gray-200">{song.subtitle}</p> */}

        {/* <h3 className="text-lg font-semibold dark:text-gray-200 mt-4">
          Contributors
        </h3> */}
        <div>
          {song.people.map((person, index) => (
            <p key={index} className="dark:text-gray-200">
              {person.name} {person.role && `(${person.role})`}
            </p>
          ))}
        </div>

        {/* <h3 className="text-lg font-semibold dark:text-gray-200 mt-4">Bio</h3> */}
        <p className="dark:text-gray-200">{song.bio}</p>

        {/* <h3 className="text-lg font-semibold dark:text-gray-200 mt-4">
          Lyrics
        </h3> */}
        <p className="dark:text-gray-200 italic">
          {song.lyrics.length <= 50
            ? song.lyrics
            : song.lyrics.slice(0, song.lyrics.lastIndexOf(' ', 50)) + '...'}
        </p>
      </div>
    </div>
  );
}
