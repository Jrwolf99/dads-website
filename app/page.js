import Link from "next/link";
import songs from "@/data/songs";
import SongCard from "@/components/SongCard";

export default function Home() {
  // Group songs by category
  const groupedSongs = songs.reduce((acc, song) => {
    if (!song.categoryIdentifier) return acc;

    const category = song.categoryIdentifier;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(song);
    return acc;
  }, {});

  // Category display names
  const categoryTitles = {
    "true-story": "True",
  };

  const activeSongs = [...songs].reverse().filter(song => !song.archived);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
           <h1 className="text-4xl font-bold text-center pt-2 pb-4">
        Welcome to Wolf Songwriting
      </h1>

      <div className="flex flex-col text-center items-center justify-start w-full px-4 md:px-6 lg:px-8">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl w-full text-gray-700 dark:text-gray-400">
          Our music, as of today...
        </p>

        <div className="w-full max-w-7xl sm:px-[100px] 2xl:px-[0px]">
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
                      <SongCard song={song} />
                    </Link>
                    {categoryTitles[song.categoryIdentifier] && (
                      <div className="absolute top-2 right-2 text-gray-600 dark:text-gray-400 text-[10px] rounded-md px-1.5 py-[2px] bg-gray-100 dark:bg-gray-800 dark:text-white">
                        {categoryTitles[song.categoryIdentifier]}
                      </div>
                    )}
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
        
        {/* <Link 
          href="/archived" 
          className="text-sm text-gray-500 dark:text-gray-400 underline hover:text-gray-700 dark:hover:text-gray-300 mb-8"
        >
          View Archived Songs
        </Link> */}
        {/* 
        <div className="flex flex-wrap gap-2 md:gap-4 justify-center mt-8 text-sm md:text-lg">
          <Link
            href="/music"
            className="border border-gray-500 dark:border-gray-400 rounded-lg px-6 md:px-10 py-3 md:py-5 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Listen to our Music
          </Link>
          <Link
            href="/events"
            className="border border-gray-500 dark:border-gray-400 rounded-lg px-6 md:px-10 py-3 md:py-5 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Check out our Events
          </Link>
          <Link
            href="/about-us"
            className="border border-gray-500 dark:border-gray-400 rounded-lg px-6 md:px-10 py-3 md:py-5 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Meet the Crew
          </Link>
        </div> */}
      </div>
    </div>
  );
}
