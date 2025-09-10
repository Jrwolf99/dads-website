import Link from "next/link";
import songs from "@/data/songs";
import SongCard from "@/components/SongCard";

export default function ArchivedPage() {
  const archivedSongs = songs.filter(song => song.archived);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <h1 className="text-3xl md:text-5xl font-bold text-center px-4 pb-4 md:leading-[52px]">
      Songs from our past collection...
      </h1>

      <div className="flex flex-col text-center items-center justify-start w-full px-4 md:px-0">
        <p className="text-base md:text-xl mb-4 md:mb-8 w-full text-gray-700 dark:text-gray-400">
        
        </p>

        {archivedSongs.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No archived songs yet.</p>
        ) : (
          <div className="md:flex flex-wrap justify-center items-start gap-4">
            {archivedSongs.reverse().map((song) => (
              <div key={song.identifier} className="md:w-[400px] relative mt-4 md:mt-0">
                <Link
                  className="w-full"
                  as={`/music/${song.identifier}`}
                  href={`/music/[slug]`}
                >
                  <SongCard song={song} />
                </Link>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16">
          <Link
            href="/"
            className="border border-gray-500 dark:border-gray-400 rounded-lg px-6 md:px-10 py-3 md:py-5 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Back to Current Music
          </Link>
        </div>
      </div>
    </div>
  );
}
