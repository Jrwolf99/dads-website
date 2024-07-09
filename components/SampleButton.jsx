'use client';
import { MusicalNoteIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { FacebookProvider, Like, ShareButton } from 'react-facebook';

export default function SampleButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  const fullPath = usePathname();

  const hideComponent = fullPath.includes('music') && fullPath !== '/music';

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 800);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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
      className="fixed bottom-5 w-full flex flex-row flex-wrap gap-2 justify-center md:justify-between items-end md:px-4"
      style={{ zIndex: 100 }}
    >
      {!isSmallScreen ? (
        <FacebookProvider appId="2252397071767122">
          <ShareButton
            href="http://www.facebook.com/songwritingwolf"
            className="bg-blue-500 text-white p-2 rounded-full text-sm shadow-sm border border-blue-700"
          >
            Like us on Facebook
          </ShareButton>
        </FacebookProvider>
      ) : (
        <a
          href="https://www.facebook.com/songwritingwolf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white p-2 rounded-full text-sm shadow-sm border border-blue-700"
        >
          Like us on Facebook
        </a>
      )}
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

            <div className="flex md:hidden items-center justify-center gap-2">
              <div className="text-gray-500 dark:text-gray-200 p-2 bg-gray-100 group-hover:bg-gray-200 dark:bg-gray-700 dark:group-hover:bg-gray-600 rounded-full">
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
