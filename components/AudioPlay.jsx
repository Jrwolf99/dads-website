'use client';
import { DownloadIcon } from 'lucide-react';
import React, { useEffect, forwardRef } from 'react';

const AudioPlay = forwardRef(
  (
    {
      controls = true,
      src = null,
      type = 'audio/mpeg',
      className = '',
      song = {},
    },
    ref
  ) => {
    useEffect(() => {
      const audioElement = ref.current;

      const handlePlay = () => {
        window.gtag('event', 'audio_play', {
          event_category: 'Audio',
          event_label: song.title,
          value: src,
        });
      };

      if (audioElement) {
        audioElement.addEventListener('play', handlePlay);
      }

      return () => {
        if (audioElement) {
          audioElement.removeEventListener('play', handlePlay);
        }
      };
    }, [ref, song, src]);

    const handleDownload = () => {
      window.gtag('event', 'audio_download', {
        event_category: 'Audio',
        event_label: song.title,
        value: src,
      });
    };

    return (
      <div className={`flex items-center gap-1 ${className}`}>
        <audio
          ref={ref}
          controls={controls}
          controlsList="nodownload"
          className="md:min-w-[300px] w-full h-12"
        >
          <source src={src} type={type} />
          Your browser does not support the audio element.
        </audio>
        <a
          href={src}
          download
          alt={`Download ${song.title}`}
          className=" text-center w-[150px] h-12 px-4 bg-blue-100/50 text-blue-500 dark:text-blue-400 text-xs flex items-center gap-2 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-full"
          onClick={handleDownload}
        >
          Download MP3
          <DownloadIcon size={24} />
        </a>
      </div>
    );
  }
);

export default AudioPlay;
