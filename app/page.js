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
    "true-story": "True Stories",
    "not-so-true-story": "Not So True Stories",
    other: "Other Songs",
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <h1 className="text-4xl md:text-[64px] font-bold text-center px-4 md:px-16 pt-16 pb-10 md:leading-[60px]">
        Welcome to Wolf <br /> Songwriting
      </h1>

      <div className="flex flex-col gap-6 md:gap-10 text-center items-center justify-start w-full px-4 md:px-0">
        <p className="text-lg md:text-[24px] w-full my-2 text-gray-700 dark:text-gray-400">
          Our music, as of today...
        </p>

        <div className="md:flex flex-wrap justify-center items-start gap-8">
          {/* {Object.entries(groupedSongs).map(([category, categorySongs]) => (
            <div key={category} className="md:w-[600px]">
              <h2 className="w-full text-2xl mt-16 mb-8">
                {categoryTitles[category]}
              </h2>
              <div className="flex flex-col gap-4">
                {categorySongs.map((song) => (
                  <Link
                    className="w-full"
                    key={song.identifier}
                    as={`/music/${song.identifier}`}
                    href={`/music/[slug]`}
                  >
                    <SongCard song={song} />
                  </Link>
                ))}
              </div>
            </div>
          ))} */}
          {songs.map((song) => (
            <div className="md:w-[600px] relative mt-8 md:mt-0">
              <Link
                className="w-full"
                key={song.identifier}
                as={`/music/${song.identifier}`}
                href={`/music/[slug]`}
              >
                <SongCard song={song} />
              </Link>
              <div className="absolute top-0 right-0 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 font-semibold italic text-xs rounded-bl-md rounded-tr-md p-2 shadow border-1 border-gray-900">
                {categoryTitles[song.categoryIdentifier]}
                </div>
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
