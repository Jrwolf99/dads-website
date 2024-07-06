'use client';
import { MusicalNoteIcon } from '@heroicons/react/24/solid';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

export default function SampleButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  const fullPath = usePathname();

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
    <button
      type="button"
      onClick={() => setIsPlaying(!isPlaying)}
      className="fixed bottom-5 right-0 md:right-5 group md:max-w-[400px] w-full flex items-center justify-end rounded p-4"
    >
      {' '}
      {!isPlaying && (
        <div className="flex items-center justify-center gap-2 dark:text-gray-200">
          <p className="hidden xl:block text-sm text-gray-500 text-center p-1 dark:text-gray-200">
            Listen to a sample?
          </p>
          <div className="p-2 bg-gray-100 group-hover:bg-gray-200 dark:bg-gray-700 dark:group-hover:bg-gray-600 rounded-full">
            <MusicalNoteIcon className="h-8 w-8 text-gray-500 dark:text-gray-200" />
          </div>
        </div>
      )}
      {isPlaying && (
        <audio ref={audioRef} controls className="w-[90%] mx-auto">
          <source src="/music/wall-of-stone.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </button>
  );
}
