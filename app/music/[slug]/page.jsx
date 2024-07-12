import fs from 'fs';
import path from 'path';
import SongDetails from '@/components/SongDetails';

const getSongs = (songIdentifier = null) => {
  const filePath = path.join(process.cwd(), 'data', 'songs.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);

  if (songIdentifier) {
    return data.find((song) => song.identifier === songIdentifier);
  }

  return data;
};

export function generateStaticParams() {
  const data = getSongs();

  return data.map((song) => ({
    params: {
      slug: song.identifier,
    },
  }));
}

export default function Page({ params }) {
  const { slug } = params;

  const song = getSongs(slug);

  return <SongDetails song={song} />;
}
