import React from "react";
import ImageWithPulse from "./ImageWithPulse";

export default function SongCard({ song, tags, mini }) {
  return (
    <div className="w-full min-h-[200px] bg-white dark:bg-gray-800 shadow-lg rounded-lg flex flex-col lg:flex-row border hover:shadow-2xl transform transition-all duration-50 dark:hover:bg-gray-700 transition duration-100 ease-in-out text-left relative">
      <div className="w-full lg:w-[180px] h-[250px] sm:h-[280px] lg:h-[200px] flex-shrink-0 overflow-hidden rounded-t-lg lg:rounded-l-lg lg:rounded-t-none">
        <ImageWithPulse
          src={song.titleImage}
          alt={song.title}
          imageClasses="object-cover w-full h-full rounded-t-lg lg:rounded-l-lg lg:rounded-r-none"
          className="w-full h-full"
        />
      </div>
      {tags && tags.includes("true-story") && (
        <div className="absolute top-0 right-0 hidden lg:flex flex-col items-center gap-1.5 z-10 translate-x-1/4 -translate-y-1/4">
          <div className="py-[3px] px-[6px] bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 shadow-sm rounded-bl-md rounded-tr-md text-[11px]">
            True Story
          </div>
        </div>
      )}
      <div className="p-4 flex-1 flex flex-col gap-1 h-full overflow-hidden">
        <h2
          className={`${mini ? "text-[11px] sm:text-[11px]" : "text-[13px] sm:text-[14px]"} font-bold dark:text-gray-200 mr-8`}
        >
          {song.title}
        </h2>

        {song.subTitle && (
          <p
            className={`-mt-1 dark:text-gray-200 text-gray-500 ${mini ? "text-[11px]" : "text-[11px]"}`}
          >
            {song.subTitle.length <= 50
              ? song.subTitle
              : song.subTitle.slice(0, song.subTitle.lastIndexOf(" ", 50)) +
                "..."}
          </p>
        )}

        <div
          className={`${mini ? "text-[11px]" : "text-xs"} text-gray-600 dark:text-gray-300 line-clamp-3`}
        >
          {song.people.map((person, index) => (
            <p key={index}>
              {person.name} {person.role && `(${person.role})`}
            </p>
          ))}
        </div>

        <p
          className={`${mini ? "text-[11px]" : "text-xs"} text-gray-600 dark:text-gray-300 mt-1`}
        >
          {song.bio}
        </p>

        <p
          className={`${mini ? "text-[11px]" : "text-xs"} italic text-gray-600 dark:text-gray-300`}
        >
          {song.lyrics.length <= 50
            ? song.lyrics
            : song.lyrics.slice(0, song.lyrics.lastIndexOf(" ", 50)) + "..."}
        </p>

        {tags && tags.includes("true-story") && (
          <div className="flex lg:hidden flex-wrap items-center gap-2 mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
            <div
              className={`py-1 px-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 shadow-sm rounded-md ${mini ? "text-[11px]" : "text-[11px]"}`}
            >
              True
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
