import React from "react";
import ImageWithPulse from "./ImageWithPulse";

export default function SongCard({
  song,
  tags,
  legendLookup,
  iconContainerBaseClass,
  textBadgeBaseClass,
  imageClass,
}) {
  return (
    <div className="max-w-[400px] md:max-w-full w-full mx-auto min-h-[200px] bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row border hover:shadow-2xl transform  transition-all duration-50 dark:hover:bg-gray-700 transition duration-100 ease-in-out text-left relative md:pr-[50px]">
      <div className="w-full md:w-[180px] h-[300px] md:h-[200px] flex-shrink-0">
        <ImageWithPulse
          src={song.titleImage}
          alt={song.title}
          imageClasses="object-cover w-full h-full"
          className="w-full h-full"
        />
      </div>
      {tags && tags.length > 0 && (
        <div className="absolute top-2 right-2 hidden md:flex flex-col items-center gap-1.5 z-10">
          {tags.map((tag) => {
            const item = legendLookup[tag];
            if (!item) return null;
            return (
              <div key={tag}>
                {item.src ? (
                  <div className={iconContainerBaseClass}>
                    <img
                      src={item.src}
                      alt={item.label}
                      className={`object-contain ${item.styles}`}
                    />
                  </div>
                ) : (
                  <div className={`${textBadgeBaseClass} ${item.styles}`}>
                    {item.text}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
      <div className="p-4 flex-1 flex flex-col gap-1 h-full overflow-hidden max-w-[400px]">
        <h2 className="text-md font-bold dark:text-gray-200 max-w-[140px]">
          {song.title}
        </h2>

        {song.subTitle && (
          <p className="-mt-1 dark:text-gray-200 text-gray-500 text-[12px]">
            {song.subTitle.length <= 50
              ? song.subTitle
              : song.subTitle.slice(0, song.subTitle.lastIndexOf(" ", 50)) +
                "..."}
          </p>
        )}

        <div className="text-xs text-gray-600 dark:text-gray-300 line-clamp-3">
          {song.people.map((person, index) => (
            <p key={index}>
              {person.name} {person.role && `(${person.role})`}
            </p>
          ))}
        </div>

        <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
          {song.bio}
        </p>

        <p className="text-xs italic text-gray-600 dark:text-gray-300">
          {song.lyrics.length <= 50
            ? song.lyrics
            : song.lyrics.slice(0, song.lyrics.lastIndexOf(" ", 50)) + "..."}
        </p>

        {tags && tags.length > 0 && (
          <div className="flex md:hidden flex-wrap items-center gap-2 mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
            {tags.map((tag) => {
              const item = legendLookup[tag];
              if (!item) return null;
              return (
                <div key={tag} className="flex items-center gap-1.5">
                  {item.src ? (
                    <div className={`${iconContainerBaseClass} ${item.styles}`}>
                      <img
                        src={item.src}
                        alt={item.label}
                        className={imageClass}
                      />
                    </div>
                  ) : (
                    <div className={`${textBadgeBaseClass} ${item.styles}`}>
                      {item.text}
                    </div>
                  )}
                  <span className="text-gray-600 dark:text-gray-400 text-[10px] font-medium">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
