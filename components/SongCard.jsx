import React from "react";

export default function SongCard({ song, tags, mini }) {
  const titleSize = mini ? "text-[14px]" : "text-[16px]";
  const bodySize = mini ? "text-[12px]" : "text-sm";
  const tagSize = mini ? "text-[11px]" : "text-[13px]";

  return (
    <div
      className={`w-full ${mini ? "min-h-[120px] xl:max-w-[350px]" : "min-h-[200px]"} mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg flex ${mini ? "flex-row" : "flex-col lg:flex-row"} border hover:shadow-2xl transform transition-all duration-50 dark:hover:bg-gray-700 transition duration-100 ease-in-out text-left relative`}
    >
      <div
        className={`${mini ? "w-[120px]" : "w-full lg:w-[180px]"} ${mini ? "h-[120px]" : "h-[250px] sm:h-[280px] lg:h-[200px]"} flex-shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-700 relative ${mini ? "rounded-l-lg" : "rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"}`}
      >
        <img
          src={song.titleImage}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover blur-sm scale-110 ${mini ? "rounded-l-lg" : "rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"}`}
        />
        <img
          src={song.titleImage}
          alt={song.title}
          className={`absolute inset-0 w-full h-full object-contain z-10 ${mini ? "rounded-l-lg" : "rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"}`}
        />
      </div>
      {tags && tags.includes("true-story") && (
        <div
          className={`absolute top-0 right-0 ${mini ? "flex" : "hidden lg:flex"} flex-col items-center gap-1.5 z-10 translate-x-[20%] -translate-y-[25%]`}
        >
          <div
            className={`py-[3px] px-[6px] bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 shadow-sm rounded-bl-md rounded-tr-md ${tagSize}`}
          >
            True Story
          </div>
        </div>
      )}
      <div
        className={`${mini ? "p-2" : "p-4"} flex-1 flex flex-col gap-1 h-full overflow-hidden`}
      >
        <h2 className={`${titleSize} font-bold dark:text-gray-200 mr-8`}>
          {song.title}
        </h2>

        {song.subTitle && (
          <p className={`-mt-1 dark:text-gray-200 text-gray-500 ${bodySize}`}>
            {song.subTitle.length <= 50
              ? song.subTitle
              : song.subTitle.slice(0, song.subTitle.lastIndexOf(" ", 50)) +
                "..."}
          </p>
        )}

        {!mini && (
          <div className={`${bodySize} text-gray-600 dark:text-gray-300 line-clamp-3`}>
            {song.people.map((person, index) => (
              <p key={index} className={`${bodySize} mt-[2px]`}>
                {person.name} {person.role ? `(${person.role})` : ""}
              </p>
            ))}
          </div>
        )}

        <p className={`${bodySize} text-gray-600 dark:text-gray-300 mt-1`}>
          {song.bio}
        </p>

     

        {tags && tags.includes("true-story") && !mini && (
          <div className="flex lg:hidden flex-wrap items-center gap-2 mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
            <div
              className={`py-1 px-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 shadow-sm rounded-md ${tagSize}`}
            >
              True
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
