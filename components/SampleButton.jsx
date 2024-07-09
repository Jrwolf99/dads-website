'use client';
import { MusicalNoteIcon } from '@heroicons/react/24/solid';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { FacebookProvider, Like } from 'react-facebook';

export default function SampleButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  const fullPath = usePathname();

  // get dark mode status
  const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const hideComponent = fullPath.includes('music') && fullPath !== '/music';

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  }, [isPlaying]);

  if (hideComponent) {
    return null;
  }

  return (
    <div
      className="fixed bottom-5 w-full flex flex-row flex-wrap justify-center md:justify-between items-end md:pr-4"
      style={{ zIndex: 100 }}
    >
      <FacebookProvider appId="2252397071767122">
        <Like
          href="https://www.facebook.com/songwritingwolf"
          colorScheme={darkMode ? 'dark' : 'light'}
          showFaces
          share
          layout="button_count"
        />
      </FacebookProvider>
      <button
        type="button"
        onClick={() => setIsPlaying(!isPlaying)}
        className="group w-full flex items-end justify-center md:justify-end rounded md:w-[400px]"
      >
        {' '}
        {!isPlaying && (
          <>
            <div className="hidden md:flex items-center justify-center gap-2 dark:text-gray-200">
              <p className="text-sm text-gray-500 text-center p-1 dark:text-gray-200">
                Listen to a sample?
              </p>

              <div className="p-2 bg-gray-100 group-hover:bg-gray-200 dark:bg-gray-700 dark:group-hover:bg-gray-600 rounded-full">
                <MusicalNoteIcon className="h-8 w-8 text-gray-500 dark:text-gray-200" />
              </div>
            </div>

            <div className="flex md:hidden items-center justify-center gap-2 dark:text-gray-200 bg-green-200">
              <div className="text-gray-700 p-2 bg-gray-100 group-hover:bg-gray-200 dark:bg-gray-700 dark:group-hover:bg-gray-600 rounded-full">
                Listen to a sample?
              </div>
            </div>
          </>
        )}
        {isPlaying && (
          <audio ref={audioRef} controls>
            <source src="/music/wall-of-stone.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
      </button>
      {/* Enjoy our music? Like our page on facebook */}
    </div>
  );
}
