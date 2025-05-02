// app/movie/[id]/page.tsx
import { Movie } from '@/app/top-rated/page';
import Image from 'next/image';

type Params = {
  params: {
    id: string;
  };
};

async function getMovieDetails(id: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&append_to_response=videos`,
    {
      next: { revalidate: 43200 },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch movie details');
  }

  return res.json();
}

export default async function MoviePage(props: Params) {
  const id = props.params.id;
  const movie:Movie = await getMovieDetails(id);

  const trailer = movie.videos?.results?.find(
    (vid: any) => vid.type === 'Trailer' && vid.site === 'YouTube'
  );

  return (
    <div className="p-6 max-w-4xl mx-auto flex flex-col gap-8">
      {/* Trailer on Top */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Watch Trailer</h2>
        {trailer ? (
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title="YouTube trailer"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        ) : (
          <p className="text-gray-500 italic">No trailer available for this movie.</p>
        )}
      </div>
<div className='flex justify-between gap-10'>
      {/* Poster */}
      <div className="flex justify-center">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={400}
          height={600}
          className="rounded-lg shadow-md w-full max-w-xs"
        />
      </div>

      {/* Movie Details */}
      <div>
        <h1 className="text-3xl font-bold mb-3 text-left">{movie.title}</h1>
        <p className="text-gray-700 mb-4 text-left">{movie.overview}</p>
        <p className="text-sm text-gray-500 text-left">Release Date: {movie.release_date}</p>
        <p className="text-sm text-gray-500 text-left">Rating: {movie.vote_average} / 10</p>
      </div>
      </div>
    </div>
  );
}
