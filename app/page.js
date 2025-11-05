import Link from "next/link";
import Image from "next/image";
import songs from "@/data/songs";
import SongCard from "@/components/SongCard";

export default function Home() {
  const activeSongs = [...songs].reverse().filter((song) => !song.archived);
  const songsWithReal = activeSongs.filter((song) =>
    song.tags?.includes("real")
  );
  const songsWithoutReal = activeSongs.filter(
    (song) => !song.tags?.includes("real")
  );

  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center pt-2 pb-4">
        Welcome to Wolf Songwriting
      </h1>

      <div className="flex flex-col text-center items-center w-full px-4 md:px-6 lg:px-8">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-400">
          Our music, as of today...
        </p>
        <p className="flex items-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 mt-4">
          {/* todo, feather img here */}
          <Image src="/images/pen.png" alt="Feather" width={20} height={20} />
          <span className="text-gray-700 dark:text-gray-400">
            All lyrics are written by Bill Wolf.
          </span>
        </p>

        <div className="w-full max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-0">
          {songsWithReal.length > 0 && (
            <div className="mt-8 mb-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-center mb-8">
                Studio Recordings
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center">
                {songsWithReal.map((song) => (
                  <div key={song.identifier} className="relative w-full">
                    <Link
                      className="w-full"
                      as={`/music/${song.identifier}`}
                      href={`/music/[slug]`}
                    >
                      <SongCard song={song} tags={song.tags} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
          {songsWithoutReal.length > 0 && (
            <div className="mt-12 mb-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-center mb-8">
                Bill's Lyrics, AI Music
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 items-center">
                {songsWithoutReal.map((song) => (
                  <div key={song.identifier} className="relative w-full">
                    <Link
                      className="w-full"
                      as={`/music/${song.identifier}`}
                      href={`/music/[slug]`}
                    >
                      <SongCard song={song} tags={song.tags} mini />
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
