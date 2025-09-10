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
  const featuredSongs = activeSongs.slice(0, 3);
  const regularSongs = activeSongs.slice(3);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <h1 className="text-3xl md:text-5xl font-bold text-center px-4 pb-4 md:leading-[52px]">
        Welcome to Wolf <br /> Songwriting
      </h1>

      <div className="flex flex-col text-center items-center justify-start w-full px-4 md:px-0">
        <p className="text-base md:text-xl mb-4 md:mb-8 w-full text-gray-700 dark:text-gray-400">
          Our music, as of today...
        </p>

        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {featuredSongs.map((song) => (
              <div key={song.identifier} className="relative">
                <Link
                  className="w-full"
                  as={`/music/${song.identifier}`}
                  href={`/music/[slug]`}
                >
                  <div className="w-full mx-auto h-[650px] bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden border hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-100 ease-in-out text-left relative flex flex-col">
                    <div className="w-full h-[400px] flex-shrink-0">
                      <img
                        src={song.titleImage}
                        alt={song.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h2 className="text-xl font-bold dark:text-gray-200 mb-2">{song.title}</h2>
                      {song.subTitle && (
                        <p className="dark:text-gray-200 text-gray-500 text-sm mb-3">{song.subTitle}</p>
                      )}
                      <div className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                        {song.people.map((person, index) => (
                          <p key={index}>
                            {person.name} {person.role && `(${person.role})`}
                          </p>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{song.bio}</p>
                      <p className="text-sm italic text-gray-600 dark:text-gray-300 flex-1 overflow-hidden">
                        {song.lyrics.length <= 100
                          ? song.lyrics
                          : song.lyrics.slice(0, song.lyrics.lastIndexOf(' ', 100)) + '...'}
                      </p>
                    </div>
                  </div>
                </Link>
                {categoryTitles[song.categoryIdentifier] && (
                  <div className="absolute top-4 right-4 text-gray-600 md:dark:text-gray-400 text-xs rounded-md px-2 py-1 bg-gray-100 dark:bg-gray-800 dark:text-white">
                    {categoryTitles[song.categoryIdentifier]}
                  </div>
                )}
              </div>
            ))}
          </div>

          {regularSongs.length > 0 && (
            <div>
              <div className="md:flex flex-wrap justify-center items-start gap-4">
                {regularSongs.map((song) => (
                  <div key={song.identifier} className="md:w-[400px] relative mt-4 md:mt-0">
                    <Link
                      className="w-full"
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
            </div>
          )}
        </div>

        <p className="text-lg md:text-[24px] w-full my-2 py-8 text-gray-700 dark:text-gray-400">
          If God gave you a talent... Use it.
        </p>
        
        <Link 
          href="/archived" 
          className="text-sm text-gray-500 dark:text-gray-400 underline hover:text-gray-700 dark:hover:text-gray-300 mb-8"
        >
          View Archived Songs
        </Link>
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
