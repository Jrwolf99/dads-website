import Link from "next/link";
import songs from "@/data/songs";
import SongCard from "@/components/SongCard";
import { legendItems } from "@/data/legendItems";

export default function Home() {
  const legendLookup = Object.fromEntries(
    legendItems.map((item) => [item.key, item])
  );

  const activeSongs = [...songs].reverse().filter((song) => !song.archived);

  const iconContainerBaseClass =
    "flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm";
  const textBadgeBaseClass =
    "flex items-center justify-center text-gray-600 dark:text-gray-400 text-[10px] rounded-md border border-gray-300 dark:border-gray-600 shadow-sm";
  const imageClass = "w-full h-full object-contain";

  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <h1 className="text-4xl font-bold text-center pt-2 pb-4">
        Welcome to Wolf Songwriting
      </h1>

      <div className="flex flex-col text-center items-center justify-start w-full px-4 md:px-6 lg:px-8">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl w-full text-gray-700 dark:text-gray-400">
          Our music, as of today...
        </p>

        <div className="w-full max-w-[1600px] sm:px-[100px] 2xl:px-[0px]">
          <div className="mt-10 mb-8 relative">
            <div className="absolute inset-0 border-t border-gray-200 dark:border-gray-700"></div>
            <div className="relative pt-6 px-6 sm:px-8">
              <div className="flex flex-wrap items-center justify-start md:justify-center gap-x-8 gap-y-4 pl-5 md:pl-0">
                {legendItems.map((item) => (
                  <div
                    key={item.key}
                    className={`flex items-center ${
                      item.src ? "gap-3" : "gap-2.5"
                    }`}
                  >
                    {item.src ? (
                      <div
                        className={`${iconContainerBaseClass} ${item.styles}`}
                      >
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
                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {activeSongs.length > 0 && (
            <div className="mt-6 sm:mt-[px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 sm:gap-8">
                {activeSongs.map((song) => (
                  <div key={song.identifier} className="relative">
                    <Link
                      className="w-full"
                      as={`/music/${song.identifier}`}
                      href={`/music/[slug]`}
                    >
                      <SongCard
                        song={song}
                        tags={song.tags}
                        legendLookup={legendLookup}
                        iconContainerBaseClass={iconContainerBaseClass}
                        textBadgeBaseClass={textBadgeBaseClass}
                        imageClass={imageClass}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="w-full bg-white dark:bg-gray-800 rounded-2xl p-8 sm:p-12 mt-16 sm:mt-20 lg:mt-24 mb-8 sm:mb-12">
          <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white italic">
            "If God gave you a talent... Use it."
          </blockquote>
        </div>
      </div>
    </div>
  );
}
