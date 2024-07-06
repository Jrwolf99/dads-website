import SongCard from '@/components/SongCard';
import React from 'react';
import songs from '@/data/songs';
import Link from 'next/link';

export default function MusicPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center pt-10 pb-8">Music</h1>
      <div className="container mx-auto p-4">
        {songs.map((song) => (
          <Link
            key={song.identifier}
            as={`/music/${song.identifier}`}
            href={`/music/[slug]`}
          >
            <SongCard song={song} />
          </Link>
        ))}
      </div>
    </div>
  );
}
