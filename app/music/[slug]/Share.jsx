'use client';
import React, { useEffect, useState } from 'react';
import { FacebookProvider, ShareButton } from 'react-facebook';

export default function Share({ shareLink }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 800);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      {!isSmallScreen ? (
        <FacebookProvider appId="2252397071767122">
          <ShareButton
            href={shareLink}
            className="text-sm text-gray-700 dark:text-gray-400 underline text-start"
          >
            If you liked this, please leave us some feedback!
          </ShareButton>
        </FacebookProvider>
      ) : (
        <a
          href="https://www.facebook.com/songwritingwolf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-700 dark:text-gray-400 underline text-center w-full"
        >
          If you liked this, please leave us some feedback!
        </a>
      )}
    </>
  );
}
