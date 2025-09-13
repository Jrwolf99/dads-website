import React from 'react';
import ImageWithPulse from './ImageWithPulse';

export default function SongCard({ song }) {
  return (
    <div className="max-w-[300px] md:max-w-full w-full mx-auto min-h-[200px] bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row border hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-100 ease-in-out text-left relative">
      <div className="w-full md:w-[180px] h-[300px] md:h-[200px] flex-shrink-0">
        <ImageWithPulse
          src={song.titleImage}
          alt={song.title}
          imageClasses="object-cover w-full h-full"
          className="w-full h-full"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col gap-1 h-full overflow-hidden max-w-[300px]">
        <h2 className="text-md font-bold dark:text-gray-200 max-w-[140px]">{song.title}</h2>

        {song.subTitle && (
          <p className="-mt-1 dark:text-gray-200 text-gray-500 text-[12px]">
            {song.subTitle.length <= 50
              ? song.subTitle
              : song.subTitle.slice(0, song.subTitle.lastIndexOf(' ', 50)) + '...'}
          </p>
        )}

        <div className="text-xs text-gray-600 dark:text-gray-300">
          {song.people.map((person, index) => (
            <p key={index}>
              {person.name} {person.role && `(${person.role})`}
            </p>
          ))}
        </div>

        <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">{song.bio}</p>

        <p className="text-xs italic text-gray-600 dark:text-gray-300">
          {song.lyrics.length <= 50
            ? song.lyrics
            : song.lyrics.slice(0, song.lyrics.lastIndexOf(' ', 50)) + '...'}
        </p>
      </div>
    </div>
  );
}
