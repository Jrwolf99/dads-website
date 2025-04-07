'use client';
import React, { useRef } from 'react';
import Share from '@/app/music/[slug]/Share';
import { DownloadIcon } from 'lucide-react';

export default function SongDetails({ song }) {
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    videoRef.current.src += '&autoplay=1';
  };

  const handleDownload = () => {
    window.gtag('event', 'audio_download', {
      event_category: 'Audio',
      event_label: song.title,
      value: song.audio,
    });
  };

  const parseLyrics = (lyrics) => {
    const parts = lyrics
      .split(/(\*\*.*?\*\*|\*.*?\*|##.*?#.*?##)/g)
      .map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={index}>{part.slice(1, -1)}</em>;
        }
        if (part.startsWith('##') && part.endsWith('##')) {
          const [color, text] = part.slice(2, -2).split('#');
          return (
            <span key={index} style={{ color }}>
              {text}
            </span>
          );
        }
        return part;
      });
    return parts;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black p-4 sm:p-6 lg:p-8 w-full">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-6 lg:mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-3">
            {song.title}
          </h1>
          <h2 className="text-xl lg:text-2xl text-gray-700 dark:text-gray-400">
            by{' '}
            {song.people.map((person, index) => (
              <span key={person.name}>
                {person.name} ({person.role})
                {index < song.people.length - 1 ? ', ' : ''}
              </span>
            ))}
          </h2>
        </div>

        <div className="w-full h-[250px] lg:h-[65%] lg:w-[65%] mx-auto h-0 pb-[36.5625%] relative mb-8 rounded-xl overflow-hidden shadow-2xl">
          <iframe
            ref={videoRef}
            src={song.videoLink}
            title={song.title}
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="fixed bottom-4 right-4 ml-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 flex flex-col gap-3 items-end z-50">
          <div className="bg-white/80 dark:bg-black/80 backdrop-blur-sm p-3 rounded-2xl shadow-lg flex gap-3">
            <Share shareLink={song.shareLink} />

            <a
              href={song.audio}
              download
              alt={`Download ${song.title}`}
              className="text-center w-[150px] h-12 px-4 bg-blue-100/50 text-blue-500 dark:bg-gray-800 dark:text-blue-400 text-xs flex items-center gap-2 hover:bg-blue-100 dark:hover:bg-blue-700 rounded-full cursor-pointer transition-colors duration-200"
              onClick={handleDownload}
            >
              Download MP3
              <DownloadIcon size={24} />
            </a>
          </div>
        </div>

        <div className="w-full max-w-3xl mx-auto text-center">
          <h3 className="text-2xl lg:text-3xl font-semibold text-black dark:text-white mb-6 underline">
            Lyrics
          </h3>
          <p className="whitespace-pre-line text-gray-700 dark:text-gray-400 text-sm md:text-lg leading-relaxed">
            {parseLyrics(song.lyrics)}
          </p>
        </div>
      </div>
    </div>
  );
}
