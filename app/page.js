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

  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <h1 className="text-3xl md:text-5xl font-bold text-center px-4 pb-4 md:leading-[52px]">
        Welcome to Wolf <br /> Songwriting
      </h1>

      <div className="flex flex-col text-center items-center justify-start w-full px-4 md:px-0">
        <p className="text-base md:text-xl mb-4 md:mb-8 w-full text-gray-700 dark:text-gray-400">
          Our music, as of today...
        </p>

        <div className="md:flex flex-wrap justify-center items-start gap-4">
          {songs.map((song) => (
            <div className="md:w-[400px] relative mt-4 md:mt-0">
              <Link
                className="w-full"
                key={song.identifier}
                as={`/music/${song.identifier}`}
                href={`/music/[slug]`}
              >
                <SongCard song={song} />
              </Link>
              {categoryTitles[song.categoryIdentifier] && (
                <div className="absolute top-2 right-2 text-gray-600 md:dark:text-gray-400 text-[10px] rounded-md px-1.5 py-[2px] bg-gray-100 dark:bg-gray-800 dark:text-white md:bg-transparent">
                  {categoryTitles[song.categoryIdentifier]}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-lg md:text-[24px] w-full my-2 py-16 text-gray-700 dark:text-gray-400">
          If God gave you a talent... Use it.
        </p>
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
