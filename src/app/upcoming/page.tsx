'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

export default function UpcomingPage() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch('/api/upcoming')
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <main className="p-6">
            {/* Page Title */}
      <h1 className="text-3xl font-bold mb-4 text-gray-800">🎬 Upcoming Movies</h1>

      {/* Movie Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform"
          >
            <Link href={`/movie/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto"
            />
            <div className="p-2">
              <p className="text-sm font-medium text-gray-700">{movie.title}</p>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
