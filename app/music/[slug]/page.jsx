import SongCard from '@/components/SongCard';
import fs from 'fs';
import path from 'path';

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
    <div className="min-h-screen bg-white dark:bg-gray-800 flex flex-col items-center p-4">
      <div className="w-full flex flex-col md:flex-row items-start justify-start">
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
                <span key={index}>
                  {person}
                  {index < song.people.length - 1 ? ', ' : ''}
                </span>
              ))}
            </h2>
          </div>
          <audio controls className="w-full" controlsList="nodownload">
            <source src={song.audio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <div>
            <h3 className="text-lg font-semibold mb-2 dark:text-gray-200">
              Artists
            </h3>
            <ul className="list-disc list-inside dark:text-gray-400">
              {song.artists.map((artist, index) => (
                <li key={index}>
                  {artist.name} - {artist.role}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 dark:text-gray-200">
              Bio
            </h3>
            <p className="ml-4 dark:text-gray-400">{song.bio}</p>
          </div>
        </div>
      </div>
      <div className="w-full mt-8 mx-auto text-center">
        <h3 className="text-2xl font-semibold dark:text-gray-200">Lyrics</h3>
        <p className="whitespace-pre-line ml-4 dark:text-gray-400">
          {parseLyrics(song.lyrics)}
        </p>
      </div>
    </div>
  );
}
