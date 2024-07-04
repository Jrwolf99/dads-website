import SampleButton from '@/components/SampleButton';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <SampleButton />

      <h1 className="text-4xl font-bold text-center p-16">
        Wolf Music Productions
      </h1>

      <div className="flex flex-col gap-10 text-center items-center justify-center max-w-[600px]">
        <p className="text-[24px] w-full my-2 text-gray-700 dark:text-gray-400">
          Welcome to Wolf Music, a site dedicated to songwriting and music.
        </p>

        <p className="text-[24px] w-full my-2 text-gray-700 dark:text-gray-400">
          Explore the songs and get in touch with Bill or the artists if you'd
          like. We hope you enjoy your visit and discover some music you love.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-8 text-lg">
          <Link
            href="/music"
            className="border border-gray-500 dark:border-gray-400 rounded-lg px-10 py-5 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Listen to our Music
          </Link>
          <Link
            href="/events"
            className="border border-gray-500 dark:border-gray-400 rounded-lg px-10 py-5 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Check out our Events
          </Link>
          <Link
            href="/contact-us"
            className="border border-gray-500 dark:border-gray-400 rounded-lg px-10 py-5 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
