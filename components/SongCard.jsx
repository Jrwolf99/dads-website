import React from 'react';
import ImageWithPulse from './ImageWithPulse';

export default function SongCard({ song }) {
  return (
    <div className="w-full mx-auto min-h-[200px] bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row border hover:bg-gray-100 dark:hover:bg-700 transition duration-100 ease-in-out text-left">
      <div className="w-full md:w-[180px] h-[200px] flex-shrink-0">
        <ImageWithPulse
          src={song.titleImage}
          alt={song.title}
          imageClasses="object-cover w-full h-full"
          className="w-full h-full"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col gap-1 h-full overflow-hidden max-w-[200px]">
        <h2 className="text-md font-bold dark:text-gray-200 max-w-[120px]">{song.title}</h2>

        {song.subTitle && (
          <p className="-mt-1 dark:text-gray-200 text-gray-500 text-sm">{song.subTitle}</p>
        )}

        {/* <h3 className="text-lg font-semibold dark:text-gray-200 mt-4">
          Contributors
        </h3> */}
        <div className="text-xs text-gray-600 dark:text-gray-300">
          {song.people.map((person, index) => (
            <p key={index} className="">
              {person.name} {person.role && `(${person.role})`}
            </p>
          ))}
        </div>

        {/* <h3 className="text-lg font-semibold dark:text-gray-200 mt-4">Bio</h3> */}
        <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">{song.bio}</p>

        {/* <h3 className="text-lg font-semibold dark:text-gray-200 mt-4">
          Lyrics
        </h3> */}
        <p className="text-xs italic text-gray-600 dark:text-gray-300">
          {song.lyrics.length <= 50
            ? song.lyrics
            : song.lyrics.slice(0, song.lyrics.lastIndexOf(' ', 50)) + '...'}
        </p>
      </div>
    </div>
  );
}
