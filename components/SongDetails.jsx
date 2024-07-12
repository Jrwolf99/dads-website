'use client';
import React, { useRef } from 'react';
import AudioPlay from './AudioPlay';
import Share from '@/app/music/[slug]/Share';

export default function SongDetails({ song }) {
  const audioRef = useRef(null);

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
    <div className="min-h-screen bg-white dark:bg-gray-800 flex flex-col items-center justify-center p-4">
      <div className="text-center md:text-left w-full flex flex-col items-center md:flex-row md:items-start justify-center">
        <img
          src={song.titleImage}
          alt={song.title}
          className="w-full object-contain object-center max-w-md rounded-lg"
        />
        <div className="p-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold dark:text-gray-200">
              {song.title}
            </h1>
            <h2 className="text-xl text-gray-700 dark:text-gray-400">
              by{' '}
              {song.people.map((person, index) => (
                <span key={person.name}>
                  {person.name}
                  {index < song.people.length - 1 ? ', ' : ''}
                </span>
              ))}
            </h2>
          </div>
          <AudioPlay
            ref={audioRef}
            src={song.audio}
            type="audio/mpeg"
            className="w-full"
            controls
          />
          <div>
            <ul className="list-disc list-inside dark:text-gray-400">
              {song.people.map((person, index) => (
                <li key={index}>
                  {person.name} ({person.role})
                </li>
              ))}
            </ul>
          </div>
          <Share shareLink={song.shareLink} />
        </div>
      </div>
      <div className="w-full my-12 mx-auto text-center">
        <h3 className="text-2xl font-semibold dark:text-gray-200">Lyrics</h3>
        <p className="whitespace-pre-line dark:text-gray-400">
          {parseLyrics(song.lyrics)}
        </p>
      </div>
    </div>
  );
}
